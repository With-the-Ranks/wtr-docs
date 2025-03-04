# Segments And Encodings

In Spoke, SMS messages are billed by the
**segment**, rather than the whole message. To
learn about MMS messages, scroll to the MMS section below.

#### **What is a segment?**

A segment is a component of a larger overall text message. You
can think of it as a single page in a letter. You can read more
about segments
[here](https://www.twilio.com/blog/2017/03/what-the-heck-is-a-segment.html).

Most of the time, an SMS segment can be up to 160 characters. An
SMS message under 160 characters will often be one segment,
while a message between 160 and 320 characters will be 2
segments. 
  
   
However, depending on the characters present in your message, your
message may be encoded differently. Encoding can affect the number
of characters that networks can fit into a single segment.

#### **What is character encoding?**

The most common and efficient character encoding is called
*GSM.* Most standard characters will be able to be encoded
using GSM encoding. If you use certain characters like emojis (e.g., **🙂**), non-English characters (e.g. *í, ü*), or certain
punctuation (e.g. *`, –*), your message will require
Unicode character encoding. Unicode is limited to 70 characters
per segment.

#### **Segments within Spoke**

To help you keep track of the number of segments you're sending,
we've added a segment counter that also informs you of the
character set with which your message is likely to be encoded.
This counter is only relevant for SMS messages, not MMS.
  
For example, when typing an emdash (—), you can see the character
set switch to Unicode and the segment count and characters left adjust
accordingly:

![GSM Encoded Message](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/5ea1bdee04286364bc98e446/file-oLo299bMdf.png)

![Unicode Encoded Message](https://s3.amazonaws.com/helpscout.net/docs/assets/5d4878eb2c7d3a330e3c1b86/images/5ea1be602c7d3a7e9aeb8352/file-EEtCIm0orL.png)

#### Segments within Spoke exports

By using the
*Export Data* button from the individual campaign
page, you will be emailed two links to download your data
exports. The second of these is your *messages export*,
where you can find a breakdown of the number of segments on a
particular campaign. For a more robust segment breakdown, please
email [support@withtheranks.com](mailto:support@withtheranks.com).

### How is MMS different?

Unlike SMS, MMS pricing does not take into consideration the
number of characters. When you include an image with your text,
the entire text will be priced at our MMS price of $0.03,
regardless of length.

**Note:** Spoke has a universal limit of 1600 characters
for any text.

 