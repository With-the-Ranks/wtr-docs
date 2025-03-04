# Data Dictionary

#### The following table is designed to help you better understand the data from your texting campaigns, allowing you to analyze campaign performance. Sample scripts for potential analyses can be found below the table. Depending on the platform you use, you may need to adjust schema prefixes (e.g. "message" may need to become "spoke.message").

| title | description | key columns |
| --- | --- | --- |
| campaign | Contains information about each campaign - e.g. when it was created or whether it was archived. Primary key is campaign.id. |  |
| campaign\_contact | Contains information about a contact for each campaign. Joins to campaign on campaign\_contact.campaign\_id = campaign.id. Primary key is campaign\_contact.id. |  |
| message | Contains each message, inbound and outbound. Joins to campaign and campaign\_contact on message.campaign\_contact\_id = campaign\_contact.id. | is\_from\_contact = true means message is inbound, = false means outbound message |
| question\_response | Contains "question responses," or Spoke question responses. Joins to campaign and campaign\_contact on question\_response.campaign\_contact\_id = campaign\_contact.id. Only includes contacts who have a question\_response populated. | 'value' contains question response values like support score, activist codes, Wrong Number, etc. |
| all\_question\_response | Contains "question responses", or Spoke question responses. Joins to campaign and campaign\_contact on question\_response.campaign\_contact\_id = campaign\_contact.id. Includes all contacts, including those who did not respond, where the "value" is null. |  |
| canned\_response | Contains all Spoke canned responses. |  |
| interaction\_step | Contains all of the scripts at each 'interaction step' in the texting script, as well as the hierarchy for how all of the 'interaction steps' in the texting script tree are related to one another. |  |
| opt\_out | Contains all opted out contacts, as well as the campaigns on which they were opted out. |  |
| campaign\_contact\_tag | Campaign contacts and associated tags. Must be joined back to all\_tag or tag on campaign\_contact\_tag.tag\_id = all\_tag.id to get tag titles. |  |
| all\_tag | Contains all tags, including those which have been deleted. |  |
| tag | A view of all\_tag for tags that have not been deleted. |  |
| user | Contains information about users (texters, supervolunteers, admins, owners). |  |
| team | Contains team ID and team title for texting teams you may have within your organization. |  |
| user\_team | Crosswalk between team and user. | joins to team on team.id = user\_team.team\_id |
| user\_organization | Crosswalk between user and organization. |  |
| organization | Lists all organizations within your instance of Spoke. For example, you might have different organizations if there are multiple sub-groups / affiliates of a larger organization using your Spoke. | joins to campaign on organization.id = campaign.organization\_id |

### Sample Scripts

How to get **counts of contacts with certain tags within a certain
interval**:

```


select at.title, count(distinct cc.id)  from campaign_contact cc



left join campaign_contact_tag cct on cc.id = cct.campaign_contact_id



left join all_tag at on cct.tag_id = at.id



where cct.updated_at between now() - interval '12 hours' and now()



group by at.title

  

```

How to get an **export ready for VAN bulk upload**,
marking null values as 'canvassed, no response':

```


select distinct cc.external_id,



case when aqr.value is null then 'canvassed, no response'



else aqr.value end as value,



to_char(m.sent_at,'MM-DD-YYYY') as date from campaign c



left join campaign_contact cc on c.id = cc.campaign_id



left join message m on cc.id = m.campaign_contact_id



left join all_question_response aqr on cc.id = aqr.campaign_contact_id

  

```

How to find the **number of texts sent inbound and outbound**, grouped by day:

*edit timezone to reflect your timezone*

```


select   date(sent_at::timestamptz at time zone 'EDT') as date,



case



when is_from_contact = true then 'inbound'



when is_from_contact = false then 'outbound'



end      as direction,



Count(*) as messages



from     message



group by date(sent_at::timestamptz at time zone 'EDT'),



is_from_contact



order by date(sent_at::timestamptz at time zone 'EDT') desc;

  

```

How to find **number of texts sent by a member of a certain team** (i.e. "Spanish texting team")

```


select Count(*)



from   message



where  user_id in



(



select user_id



from   user_team



join   team



on     team.id = user_team.team_id



where  team.title ilike '%spanish%' );

  

```

How to find **number of unique texters** in your
organization:

```


select count(*) from user;

  

```

How to calculate **response rates** **by script option** for Campaign ID 75, **for initial text only:**

```


-- Your analysis on messages, grouped by the script_option_hash



-- replace campaign_id with actual campaign ID



with hash_counts as (



select



campaign_id,



script_version_hash,



count(*) as hash_count



from message



join campaign_contact



on campaign_contact.id = message.campaign_contact_id



where



campaign_id = 75



group by 1, 2



),



-- Fetch script options as reference



scripts as (



select



interaction_step.id as istep_id,



interaction_step.campaign_id,



unnest(interaction_step.script_options) as script_option



from interaction_step



where campaign_id = 75



-- EDITING HERE WILL CHANGE the 'interaction_step' parent, and for initial texts, the



-- interaction step parent will be null



and parent_interaction_id is null



),



-- Resolve analysis script_option hashs to script_option text



script_options as (select



scripts.istep_id,



scripts.campaign_id,



hash_counts.hash_count,



scripts.script_option,



hash_counts.script_version_hash



from scripts



join hash_counts



on hash_counts.script_version_hash = md5(scripts.script_option)



order by 1, 3 desc),



-- Response rate =



-- of everyone who got a certain initial, how many of them had ANY response



script_total_contacts as (



select m.script_version_hash,



cc.id as campaign_contact_id,



script_option



from message m



inner join campaign_contact cc on m.campaign_contact_id = cc.id



inner join script_options sc on sc.script_version_hash = m.script_version_hash),



script_response_contacts as (



select distinct campaign_contact_id from message



where is_from_contact = true



),



responded_bool as (



select



stc.campaign_contact_id,



stc.script_option,



case when src.campaign_contact_id is null then false



else true end as responded



from



script_total_contacts stc



left join script_response_contacts src on src.campaign_contact_id = stc.campaign_contact_id),



subtotals as (



select  script_option,responded, count(distinct campaign_contact_id) as subtotal_count



from responded_bool



group by script_option,responded),



totals as (



select  script_option,count(distinct campaign_contact_id) as total_count



from responded_bool



group by script_option)



select totals.script_option,



responded,



subtotal_count,



total_count,



subtotal_count::numeric*100 / total_count::numeric



from subtotals



left join totals on subtotals.script_option = totals.script_option

  

```

How to **calculate ID rates** by script option for Campaign
ID 75, **for initial text only:**

```


-- Your analysis on messages, grouped by the script_option_hash



with subtotal as (select value,



m.script_version_hash,



x.script_option,



count(distinct qr.campaign_contact_id) as subtotal



from campaign c



left join campaign_contact cc on c.id = cc.campaign_id



left join question_response qr on cc.id = qr.campaign_contact_id



left join message m on cc.id = m.campaign_contact_id



left join



(with hash_counts as (



select



campaign_id,



script_version_hash,



count(*) as hash_count



from message



join campaign_contact



on campaign_contact.id = message.campaign_contact_id



where



campaign_id in (75)



group by 1, 2



),



-- Fetch script options as reference



scripts as (



select



interaction_step.id as istep_id,



interaction_step.campaign_id,



unnest(interaction_step.script_options) as script_option



from interaction_step



where campaign_id in (75)



-- EDITING HERE WILL CHANGE the 'interaction_step' parent, and for initial texts, the



-- interaction step parent will be null



and parent_interaction_id is null



)



-- Resolve analysis script_option hashs to script_option text



select



scripts.istep_id,



scripts.campaign_id,



hash_counts.hash_count,



scripts.script_option,



hash_counts.script_version_hash



from scripts



join hash_counts



on hash_counts.script_version_hash = md5(scripts.script_option)



order by 1, 3 desc) x on x.script_version_hash = m.script_version_hash



where c.id = 75



-- This line limits the question_value responses to those that include ---- numbers only - useful if you are calculating support %



and value ~ '[0-9]'



group by value, m.script_version_hash,x.script_option),



-- Calculate total sent of each script version



totals as (



select subtotal.script_version_hash,



subtotal.script_option,



sum(subtotal.subtotal) as total



from subtotal



group by script_version_hash, subtotal.script_option)



-- Final analysis



select st.*,



t.total,



case



when t.total = 0 then t.total



else st.subtotal::numeric*100/t.total



end as percent



from subtotal st



left join totals t on t.script_version_hash = st.script_version_hash

  

```

How to **analyze "A/B" test results using script versions** for Campaign ID 75:

```


-- Your analysis on messages, grouped by the script_option_hash



with hash_counts as (



select



campaign_id,



script_version_hash,



count(*) as hash_count



from message



join campaign_contact



on campaign_contact.id = message.campaign_contact_id



where



campaign_id = 75



group by 1, 2



),



-- Fetch script options as reference



scripts as (



select



interaction_step.id as istep_id,



interaction_step.campaign_id,



unnest(interaction_step.script_options) as script_option



from interaction_step



where campaign_id = 75



)



-- Resolve analysis script_option hashes to script_option text



select



scripts.istep_id,



scripts.campaign_id,



hash_counts.hash_count,



scripts.script_option,



hash_counts.script_version_hash



from scripts



join hash_counts



on hash_counts.script_version_hash = md5(scripts.script_option)



order by 1, 3 desc



;

  

```

How to analyze **reply rates** of "A/B" test
results for Campaign ID 75:

```


select



ab_test.script_version_hash,



responded,



total,



reply_rate,



sample.text as sample_message



from (



select



script_version_hash,



count(*) filter (where message_status <> 'messaged' and message_status <> 'needsMessage') as responded,



count(*) filter (where message_status <> 'needsMessage') as total,



count(*) filter (where message_status <> 'messaged' and message_status <> 'needsMessage') /



(count(*) filter (where message_status <> 'needsMessage'))::float * 100 as reply_rate



from message



join campaign_contact



on campaign_contact.id = message.campaign_contact_id



where campaign_id = 75



and not exists (



select 1 from message earlier_message



where earlier_message.campaign_contact_id = campaign_contact.id



and earlier_message.created_at < message.created_at



)



and send_status = 'DELIVERED'



group by 1



) ab_test



join message sample on sample.id = (



select id



from message



where message.script_version_hash = ab_test.script_version_hash



limit 1



);

  

```

How to analyze **opt out rates** of "A/B"
test results for Campaign ID 75:

```


select



ab_test.script_version_hash,



opted_out,



total,



opt_out_rate,



sample.text as sample_message



from (



select



script_version_hash,



count(*) filter (where is_opted_out = true and message_status <> 'needsMessage') as opted_out,



count(*) filter (where message_status <> 'needsMessage') as total,



count(*) filter (where is_opted_out = true and message_status <> 'needsMessage') /



(count(*) filter (where message_status <> 'needsMessage'))::float * 100 as opt_out_rate



from message



join campaign_contact



on campaign_contact.id = message.campaign_contact_id



where campaign_id = 75



and not exists (



select 1 from message earlier_message



where earlier_message.campaign_contact_id = campaign_contact.id



and earlier_message.created_at < message.created_at



)



and send_status = 'DELIVERED'



group by 1



) ab_test



join message sample on sample.id = (



select id



from message



where message.script_version_hash = ab_test.script_version_hash



limit 1



);

  

```

 