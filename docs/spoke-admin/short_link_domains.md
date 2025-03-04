# Short Link Domains

### What is a Short Link Domain?

A short link domain is a **shorter** version of a URL you intend to share.

Custom short link domains let you minimize the chance that your
messages with links are blocked by carriers. Commonly used short
links (e.g., bit.ly, tinyurl.com, etc.) as well as commonly
used link domains (e.g., ActBlue, Mobilize, ActionKit) are
some of the more common reasons that carriers choose to block
messages, which they interpret as spam.

When trying to send out links of this type, some clients have
found success using the link shortening service [Rebrandly](https://www.rebrandly.com/). However, it's important (and worthwhile) that you buy a
custom domain from them rather than using their default domain
of *rebrand.ly*. Links that say rebrand.ly, bit.ly, or
tiny.url in them perform poorly. Create a custom domain using
.me, .us, or another less common URL suffix and name the domain
something legible, like rewired.us. Purchasing a domain can cost
as little as $2 and will boost your deliverability
considerably.

For even further deliverability assurance, use script versions
to rotate links. In the interactions section of your campaign
builder, click ADD SCRIPT VERSION. Using [Rebrandly](https://www.rebrandly.com/), you can set up multiple short links to send out the same
link. See our example below using the links
GNDchampion.me/1, GNDchampion.me/2, and GNDchampion.me/3.
While these example links all lead to the same donate page,
having 3 script versions will alternate which link is sent out,
improving deliverability.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/6324b9611ec1962d58a80219/file-TWi5qCgDn4.jpg)

*For more information, contact [support@withtheranks.com](mailto:support@withtheranks.com).*

### Setting up Rotating Short Link Domains in Spoke

***UPDATE: "Short Link Domains" is no longer a default
Spoke feature, but we can enable this feature if your
organization is texting out 50,000-100,000 messages per
day with links and is running into deliverability
issues.****If you think this would be a good solution for your use
case, please email [support@withtheranks.com](mailto:support@withtheranks.com)*

You can add to a list of short link domains from the
administration [dashboard](https://withtheranks.com/docs/spoke/for-spoke-admins/dashboards). When a texter sends a message that includes a shortened link,
Spoke uses this list to automatically detect and replace the
short link's domain with another domain in the list. Spoke
cycles through the domains in this list to spread out usage of
the domains. The *maximum**usage* setting for a domain
specifies the number of times Spoke will use that domain before moving
onto the next one.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/5eea2dc82c7d3a10cba913ba/file-QtinuDJH8t.png)

You must set up the short links outside of the Spoke platform,
and they must resolve to the same end location for the domain
replacement to work. Spoke can detect only the domains you've
added to the short link domain list; URLs with other
domains will not be replaced.

> **Note:** If you don't set up short links outside of
> the platform, the links you send out will not work as expected. If
> you have questions or concerns, contact [support@withtheranks.com](mailto:support@withtheranks.com).

 