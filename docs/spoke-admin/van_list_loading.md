# Van List Loading

Setting up your VAN integration
-------------------------------

Using the version (or
*fork*) of Spoke specific to With the Ranks, you are
able to load **saved lists****from VAN** directly into texting campaigns. This is done through a [VAN integration](https://help.ngpvan.com/van/s/article/2969508-requesting-and-approving-api-keys).

Set up VAN for Spoke integration
--------------------------------

1. You will need the application name and API key from
VAN.

**Accepted:** Politics Rewired-,
Hustle-, or Civis-type VAN API keys.

**Not Accepted:** Spoke- type
VAN API keys.

* **Application name** -- This will be the "username"
  for the Spoke integration. It will be of the form: DNCNY.000.hustle
* **API Key** -- This will be of the form: b1b9de3b-12b1-4e13-bebe-115123aa6536

2. Be sure that you've saved a
**LIST**rather than a **QUERY**. Saved
searches can't be pulled into Spoke, but saved lists can be!

3. The list in VAN must be in a folder shared with the API key
user. Follow the steps below to allow this access:

1. In VAN, go to the folder that contains the lists you want to
   show up in Spoke
2. In the top right corner, click "Edit Folder"
3. Turn on "Allow other user to save into this folder"
4. Turn on "Allow the API to save into this folder"
5. Go down to the "User Access" section and add the API user
   into the "Users with Access" column
6. Press save

Create VAN integration in Spoke
-------------------------------

1. First, navigate to
*Integrations*on your left-side admin panel.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/5ee9247b2c7d3a10cba90472/file-XxYzNfOZT2.png)

2. Click on the "+" symbol in the bottom right corner of your
screen.

3. Create and save the integration:

* **Integration name** -- You can name your integration
  whatever you'd like! *Archie* has a nice ring.
* **System type** -- This should be "Votebuilder."
* **Van operation mode** -- Select "Voterfile" if
  you will be pulling voter lists and select "MyCampaign" if you
  would like to pull lists on volunteers you load into VAN. If
  you are not sure what to select, select "Voterfile."
* **Username** -- This is your "Application name"
  from VAN. If it ends in *spoke*, refer to the section
  above as this is (counterintuitively) invalid!
* **API key** -- This is your "API key" from VAN.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/62a1ff6857320007925231e6/file-8aK9syO5SL.png)

Pull list information
---------------------

You will need to pull list information from VAN before you can
select a list to load into a campaign.

1. Click
*Sync*on the Integration page.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/63238369b0f178684ee3b1d8/file-Kf88HxQIKm.png)

2. Refresh the integrations list. The 
*sync options last fetched*column will update when
the list information has been pulled.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/632383a4b0f178684ee3b1dc/file-y1nEkObCD6.jpg)

Please note, our configure opt outs feature is under
construction. Please email us if you'd like to configure how
opt-outs appear in your VAN.

Load a list
-----------

1. Click into the
*Integration* drop-down menu in the Campaign Edit
page and link your new campaign to your VAN Integration then
click SAVE.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/5f7654bb52faff0016aebda4/file-6IND6pTRa7.png)

2. Then click into the
*Contacts* drop-down menu. Update the *Contact source* to *Integration*(replacing *CSV*)and choose
which saved list from VAN that you would like to
text. Click Save to begin importing the list's contacts
into Spoke.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/5f76561dc9e77c0016213b21/file-gW82xMKCqF.png)

Write script with VAN-provided fields
-------------------------------------

VAN provides a large assortment of custom fields to use in
scripts. Depending on your VAN committee, however, many of these
may not have values. You should check with your VAN
administrator about which fields are guaranteed to contain
values.

Sync data back to VAN
---------------------

1. Click the 
*Sync To VAN*button on the top right corner of the
Individual Campaign Page.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/5f765ccb46e0fb0017988f3b/file-LF5Am59eAF.png)

2. Then click
*Configure Mapping* on the Sync to VAN pop-up menu.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/5f765ce4cff47e001a58a5c2/file-LdAIB5OJZI.png)

3. All of your survey answers will be displayed on the Configure
Mapping pop-up. Survey answers that have currently been selected
by your texters will be tagged with the yellow triangle. Survey
answers that have not been used yet in conversations will be
tagged with a gray circle.

To start linking your survey options back to VAN click the plus
sign to the right of the survey answer.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/5f765cf8cff47e001a58a5c3/file-RQfWXu399I.png)

4. Select between VAN 
*Survey Response, Activist Code* and *Result Code*
in the *Mapping Type* drop-down menu. Once you have finished
selecting your VAN pathway, click *ADD*.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/5f765d2046e0fb0017988f3c/file-ednffR3Gos.png)

5. After you have linked all of your survey answers back to VAN,
click
*OK*.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/5f765d4752faff0016aebdc0/file-oDRbwQ4B6K.png)

8. Finish the process by clicking
*Sync*!

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/5f765d60c9e77c0016213b37/file-q7aiEXr51e.png)

Troubleshooting your VAN integration
====================================

#### 

#### 

#### After setting up the integration, the contact list won't upload beyond 0%.

**Solution:** Refresh sync.

1. Click 
*Refresh Sync Options* on the Integration page.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/5f765bd946e0fb0017988f39/file-dk94bikYch.png)

2. Refresh the integrations list. The 
*last synced*column will update when the list
information has been pulled.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/5f765c7dcff47e001a58a5c1/file-EXQ3WL2nxm.png)

#### 

#### **Lists in VAN will not show up in Spoke.**

**Solution:**Share VAN folders with the API
key user.

1. In VAN, go to the folder that contains the lists you want to
   show up in Spoke
2. In the top right corner, click "Edit Folder"
3. Turn on "Allow other user to save into this folder"
4. Turn on "Allow the API to save into this folder"
5. Go down to the "User Access" section and add the API user
   into the "Users with Access" column
6. Press save
7. In Spoke, go to the "Integrations" menu item on the left
   menu of your administrative dashboard
8. On the right side of the API integration you have set up,
   press "Sync Refresh"
9. Above that and on the middle of the screen, press "Refresh"

After completing those steps and selecting the API integration
in the "Integration" section in the campaign, you will have
access to the new lists in the "Contact" section.

If there are still issues, this is what else you can try:

* Check to confirm the username and API key are in the correct
  format
* Try both modes of VAN integration
* Do a hard refresh of the campaign page after any changes

#### 

#### **No options show up when configuring the mapping.**

**Solution:** Create questions and survey
responses in the script.

1. Go to interactions and under the initial text, write a
   question
2. Provide responses to the question by clicking **Add a Response**

Learn more about
[writing responses to surveys here](https://withtheranks.com/docs/spoke/for-spoke-admins/create-interaction-script).

 
