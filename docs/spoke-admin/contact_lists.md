# Contact Lists

Every campaign requires a contact list, which provides the full
set of people you wish to contact with that campaign. If loading
contacts via a file rather than a [VAN integration](https://withtheranks.com/docs/spoke/for-spoke-admins/van-list-loading), you must provide the contact list in a **comma separated values (CSV) format**.

Once uploaded to the campaign, Spoke maintains an internal
version of the list and modifies it as the campaign progresses.
You can export the modified contact list for your own record
keeping. For more information, see [Export Data from a Campaign](https://withtheranks.com/docs/spoke/for-spoke-admins/export-data-from-a-campaign).

**CSV Files**
-------------

#### **Column Headers**

If loading your contact list as a file, your list should be a
comma separated values (CSV) file with the following column
headings in the first row:

* **firstName**— Required — First names of your
  contacts.
* **lastName**— Required— Last names of your
  contacts.
* **cell**— Required— Cell number of your
  contacts**.**
* **zip**— Recommended— Zip code of your
  contacts. The zip code is used to estimate your
  contact's timezone and allow texters to have
  conversations with them at the appropriate time.
* **external\_id** — Recommended — ID to map your
  contacts to a CRM. This value is often made up of VAN IDs.

Note:  The  **firstName**and **lastName**fields will be
automatically capitalized for all values other than common
placeholders for unknown names: "friend" and
"there".

#### **Custom Fields**

You have the option to include additional custom fields in the
contact list. You can use these fields in the campaign's [interaction script](https://withtheranks.com/docs/spoke/for-spoke-admins/interaction-scripts). Just as with the **firstName** field, these values will dynamically
populate in your script for each contact. An example of this is
polling_location, where each contact may have their specific
polling location appended.

**Uploading a Contact List**
----------------------------

You can upload contact lists from the campaign settings page.
Click the **Contacts** window and then either:

1. Click **Select a File**or
2. Drag and drop the file into the dotted-line rectangle

![](https://lh4.googleusercontent.com/EfxgdyBzzn2Hl-ELdAzXlIdA0TuXOxcPb6mRJ9lwJuDqA9haWwRAyv7oI2C7oSsSZQH1HHnHDnOub9DXdCMD1a4O8DH-O8-g2HMdqHjd1hKkQ1pcwhR-LfxeFiraiPleXauMWJASB4bl_ucmvF7uhS4)

3. After uploading a csv file, a popup menu will appear
   allowing you to map the column headers of your csv to the
   required column headers (First Name, Last Name, and Cell
   Phone), as well as map the optional headers (Zip and
   External ID).

![](https://lh5.googleusercontent.com/Xfv5mgVxggIXqrYWB50eLEKd1eE6JCyMufIo7x_-VLf70PPhyfHWxbR0C3wfXFJkr7IUd7I_ecp_4kr3bPThu4FcSCSKadRNPgjfey_caH-bZA4DUomo9JN_imKGqey3B794F2PWsJGrIZ6XEGCo22U)

![](https://lh5.googleusercontent.com/17hMw0YzflF7ln_klrxQzqRPlgHQwl_kCiGwP_EzZbN3dPRIDhmPy2qPpGa8Rm4oZsve3ORGGWunrja1ZZWvylDjZhLdL_WuKYVAbx8LLYS-D5IjFH6_Wy57qnbFho7nsyS8G-BywJVIwcFqnuB3xiE)

Then hit **Save.** The name of your csv will now appear in the
file upload box with a green background, indicating a successful
upload.

Note: You can use the **Configure Column Mapping** button to open
the popup again and update the mappings you chose.

![](https://lh6.googleusercontent.com/zpGMQ74h9RiFV_2l5FPgbaexgXXAdrC70zuV-F3rMCQtr0-3_3lGIENxplmeWsTXqVZ19bwHX8r7BpQr0XAibcKpKnYgCJBnRnazHzHfglEsfnio03iDPNyih9-J_oBNrMQh9O5hPButF31WOddYXz0)

Optional — Exclude contacts who also appear as contacts
within another campaign using the drop down menu.

![](https://lh5.googleusercontent.com/PjL4c34dSxex9bUAgT_YATRktpVkPuxQXQ7dAtIl8ZsrByfiZ5pYvgDNqJax6xYEVA8Z5Zv1vds3lvj5p5Su6HT9X724r3-l7cFrLl46M2x3Nlw2KUgBM2hC2hItRI1uJji_Pp10fAlhBIjgEFm2PWE)

1. Start typing the name of the campaign you want to use for
   filtering (or open the drop-down menu).
2. Click the campaign name in the list.
3. Repeat until you've finished adding the campaigns you
   want to exclude.

#### List Processing

When you upload a contact list, Spoke performs two rounds of
processing. The first round, which happens in the Spoke
application, handles the following:

* The removal of duplicate contacts (duplicates are determined
  based on phone number; the first instance is kept).
* The removal of contacts without phone numbers.
* The removal of contacts with invalid phone numbers.

After you click **Save**, the second round of processing
handles the following:

* The removal of all contacts that have opted out.
* The removal of all contacts from campaigns that you
  specified in Filter Existing Campaigns (see below).

Any automated handling of your contact list is detailed in the
upload report. You can view the upload report from the contacts
window of the campaign settings page.

Note: If you upload another contact list, it removes all
previously uploaded contacts and replaces them with the most
recent contact list. This is true up until the point that your
campaign is started, after which you will no longer be able to
modify the contact list.

#### **Filtering Existing Campaigns**

You can choose to filter contacts who already exist as contacts
within another campaign. This helps you prevent sending too many
messages to a contact or sending redundant information from two
similar campaigns.

To use this feature, enter the names of the campaigns that are
used to filter out contacts. You can enter multiple campaign
names at once. **This step must be done before loading the CSV.**

You can also achieve the same function of eliminating overlap
with previous campaigns by using [Contact Overlap Management](https://withtheranks.com/docs/spoke/for-spoke-admins/contact-overlap-management).

 