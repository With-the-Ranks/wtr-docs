# Build A Campaign

Building a [campaign](https://withtheranks.com/docs/spoke/for-spoke-admins/campaigns) lets you reach out to your contacts in a systematic and scripted
way. Spoke administrators and owners are able to create campaigns
from the Spoke administration [dashboard](https://withtheranks.com/docs/spoke/for-spoke-admins/dashboards).

After you create and start a campaign, you can continue editing
all information **with the exception of the contact list.** You must set up your VAN integration before creating a new
campaign - for more information, see VAN Integration & List
Loading. (link) To "add" contacts to a campaign,
duplicate the campaign by selecting [Copy Campaign](https://withtheranks.com/docs/spoke/for-spoke-admins/copy-a-campaign) from the individual campaign page and load new contacts into the
duplicate campaign.

  

Note: some options are not available when using the Basic
builder mode. To switch to Advanced mode and configure all
settings, click on the ***Builder Mode*** dropdown menu at
the top of the page.

  

To build a new campaign, use the following steps:

### **Step 1: Initiate a new campaign**

From the Campaigns page of the administrator dashboard, click
the **plus (+)** button in the lower right corner, and click on
***Create Blank*** (the pencil icon). This will pull up a
new campaign settings page.

![](https://lh6.googleusercontent.com/zXY0WDynV61SRJOYCzP9seOMFOkXB2suaDwbdV9RmMr6kYsEf2XEEontWEt-nuo65Oszu5619oK0v0TT4p76sOwwghw2EsvJ8VrX9RSYmKMpxdqMzIy0_B_hJBvysOmPxH80TJv2rk6KrgaTJY5o_yM)

  

You can also duplicate an existing campaign by selecting **Copy Campaign** from the individual campaign page. This will often be the more
efficient option.

  

For more information about copying campaigns, see [Copy a Campaign](https://withtheranks.com/docs/spoke/for-spoke-admins/copy-a-campaign).

  

### **Step 2: Enter campaign information**

The first window in the campaign settings page is called **Basics** and includes fields for basic campaign information. Enter values
for the following fields:

* **Title** — required — This title will be visible
  to texters and will be used for email notifications and for naming
  export files. Campaign titles can be useful for the [bulk script editor](https://withtheranks.com/docs/spoke/for-spoke-admins/bulk-script-editor) or for your own analyses and record keeping, so you should
  group similar campaigns according to a carefully considered naming
  convention.
* **Description** — required — This field can be
  used to include instructions, additional information, or even
  an inspirational message for your texters.
* **Due Date** — required — The date on which the
  campaign "ends." After this date, texters cannot send
  initial messages for this campaign, though they can still respond
  to replies as long as the campaign is not archived. Setting a
  [due date](https://docs.spokerewired.com/article/60-due-dates) can ensure, for example, that you never recruit for an event
  after the event date has passed.
* **Intro HTML** — optional — The HTML that is
  displayed to texters as part of the assignment banner.
* Logo Image URL — optional — The URL for an image
  that is displayed to texters as part of the assignment banner.
  add file formats
* **Primary Color**— optional — The color that
  is displayed to texters as part of the assignment banner. Use
  the slider to choose a color, or enter a hex color code.

When you are finished, click the ***SAVE AND GOTO NEXT SECTION*** button.

  

### Step 3: Set texting hours

To set texting hours:

1. Open the **Texting Hours** window.
2. Enter a start time. Use a 12-hour time, such as 9 am.
3. Enter an end time. Use a 12-hour time, such as 9 pm.
4. Select a default timezone to apply to contacts without ZIP
   codes.
5. Click ***Save***.

Note: In order to comply with regulations regarding consumer
telephone contact, texting cannot start before 9am local time
and must end no later than 9pm local time. Spoke will
automatically honor the timeframe you set relative to the
uploaded zip code of each contact. We recommend ending your
texting by 8:30pm local time to ensure deliverability within the
allowable texting hours.

  

For more information, see [Texting Hours](https://withtheranks.com/docs/spoke/for-spoke-admins/texting-hours).

  

### Step 4: Import contacts to the campaign

From the **Contacts**window, perform the following steps:

##### To Import a CSV:

1. In the ***Contact Source*** menu, select **CSV** from
   the drop down menu.
2. Click ***Select a File*** or drag and drop the file into
   the dotted-line rectangle.
3. Locate the contact-list CSV file and click ***Open***.
4. After uploading a csv file, a popup menu will appear
   allowing you to map the column headers of your csv to the
   required column headers (First Name, Last Name, and Cell
   Phone), as well as map the optional headers (Zip and
   External ID).
5. Click ***Save***.
6. Optional — Exclude contacts who also appear as contacts
   within another campaign.
   1. Start typing the name of the campaign you want to
      use for filtering (or open the drop-down menu).
   2. Click the campaign name in the list.
7. Repeat until you've finished adding the campaigns you
   want to exclude.
8. Then hit ***Save***. The name of your csv will now
   appear in the file upload box with a green background,
   indicating a successful upload.

  

For more information and images about uploading your CSV
contacts list file, see [Contact Lists](https://withtheranks.com/docs/spoke/for-spoke-admins/contact-lists).

**To Import a list from VAN:**

(You must already have your VAN integration set up. To do
this, see
 [VAN Integration & List Loading](https://withtheranks.com/docs/spoke/for-spoke-admins/van-list-loading).)

For VAN lists, you cannot filter out contacts that are also in
another campaign.

1. Select **Integration** from the ***Contact Source*** menu.
2. Select the integration you wish to use (i.e. Votebuilder
   / VAN), and click the refresh button at the far right of
   the screen.

   ![](https://lh4.googleusercontent.com/ZY_JVjQv2X9J6mfD4xSnZ8QXmYfFaK1Vi1mwj7NuI0nY3m5hYHGNzyuTW8Ce094TLwkN4_zFteM_zFexaDZPjdoLiCeZVmV4wLFUKx65jce2EH5xltMmhgivVIASqqV1EYHr8_s-K2icp0pDWlTC9X8)
3. Browse for the correct list under the ***Choose a list*** menu, then press ***Save.***
4. Review the upload notifications for processing notes.

When you are finished, click the ***SAVE AND GOTO NEXT SECTION*** button.

**Note: Once you start the campaign, you will not be able to
modify or add to the contact list.**

  

### **Step 5: Optional — Filter Landlines**

### **Filtering landlines or otherwise un-textable numbers will cost $.0025 (1/4 cent) per phone number, but as long as more than a third of your phone numbers are likely to be invalid, it will save you money: It's cheaper to look up a phone number and throw it out for 1/4 cent than text that number at 1 cent/segment! If you're pretty sure your phone numbers are valid, feel free to skip this section.**

### **Note: Phone number lookups are charged only once per contact cell for your entire organization. If a contact existed on a previous campaign and the Filter Landlines feature was used, you will not be charged an additional $.0025 to look up the same cell a second time.**

  

For more information, see [Filter Landlines](https://docs.spokerewired.com/article/118-filter-landlines).

  

### Step 6: Resolve any overlapping contacts with other campaigns

If you have uploaded contacts who also appear as contacts within
other campaigns, those campaigns are listed in the **Contact Overlap Management** window. Perform one of the following:

* Leave the campaign with overlapping contacts in the list.
* Select the overlapping contacts, then click the trash icon
  to remove those contacts from this new campaign.

  

For more information, see [Contact Overlap Management](https://withtheranks.com/docs/spoke/for-spoke-admins/contact-overlap-management).

  

### Step 7: Optional — Assign teams to the campaign

Add teams to the campaign from the **Teams** window:

1. Click on the ***Select teams*** field and select the
   team name from the drop down menu.
2. Optional— Add additional teams by repeating the
   previous step.
3. Optional— Entirely restrict conversation
   assignment to members of the listed teams by toggling the
   switch on. Left off, the assignment will be prioritized
   for members of those teams but not restricted.

  

For more information about creating a team, see [Create a Team](https://withtheranks.com/docs/spoke/for-spoke-admins/create-a-team).

When you are finished, click the ***SAVE AND GOTO NEXT SECTION*** button.

  

### Step 8: Optional — Set the assignment options for texters

Assignment is best done through [auto-assignment](https://withtheranks.com/docs/spoke/for-spoke-admins/auto-assignment) (see Step 10) or through manual assignment within Message Review.
However, you have the option to manually assign a number of contacts
to an individual texter while building the campaign. To do so:

1. Open the **Texters** window.
2. Search for the names of the texters. The texters must
   already exist in Spoke.
3. Specify the number of contacts to assign to each texter.
4. If you have selected multiple texters, you can split the
   remaining messages by using the ***Split remaining unsent messages*** toggle.

When you are finished, click the ***SAVE AND GOTO NEXT SECTION*** button.

  

### Step 9: Create an interaction script for your texters

To create an interaction script, follow the instructions in [Create an Interaction Script](https://withtheranks.com/docs/spoke/for-spoke-admins/create-interaction-script).

When you are finished, click the ***SAVE AND GOTO NEXT SECTION*** button.

  

### Step 10: Create canned responses for supplementary FAQ

To add a canned response:

1. Open the **Canned Responses** window.
2. Click ***Add new canned response*****.**
3. Enter a title for the canned response.
4. Write a script for the response:
   1. Click the ***Script*** field.
   2. Write your canned response.
   3. Click ***Done*****.**
5. Click ***Add Response***.
6. Optional— Add additional canned responses.

  

For more information, see [Canned Responses](https://withtheranks.com/docs/spoke/for-spoke-admins/canned-responses).

When you are finished, click the ***SAVE AND GOTO NEXT SECTION*** button.

  

### Step 11: Recommended — Set the auto-assignment option

Turning on auto-assignment allows your texters to pick up the
assignment automatically from the request form. By default,
auto-assignment is turned off.

To turn on auto-assignment:

1. Open the **Autoassign Mode** window.
2. Turn the toggle on.
3. Optional –turn on the toggle to release
   unhandled replies after a certain period of time and enter
   the number of minutes in the ***Idle Minutes*** field.

  

For more information, see [Auto-Assignment](https://withtheranks.com/docs/spoke/for-spoke-admins/auto-assignment).

When you are finished, click the ***SAVE AND GOTO NEXT SECTION*** button.

  

### Step 12: Start the campaign

Before you start the campaign, double-check the previous steps
to ensure you have properly entered and saved the campaign
details. When you are ready to start the campaign, click the ***Start this Campaign*** button in the top right.

 