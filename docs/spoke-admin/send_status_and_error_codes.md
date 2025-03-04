# Send Status And Error Codes

### Send Status

*Send status* is a column within the messages export from
Spoke. It refers to the status of an outbound message (inbound messages
are always DELIVERED).

There are 3 possible values for send status: **SENT,** **DELIVERED,**and **ERROR**.

#### ERROR

A send status of **ERROR** means that the
message was **not delivered** to the recipient's phone.
Most commonly, this occurs when the recipient's carrier rejects the
message as part of their spam filter. This often happens when your
message has included links or URLs. To read about methods of increasing
deliverability of links, see [here](https://withtheranks.com/docs/spoke/for-spoke-admins/sending-links) and [here](https://withtheranks.com/docs/spoke/for-spoke-admins/short-link-domains).

You may also see an ERROR send status for a contact who has
replied "STOP" or "UNSUBSCRIBE" in the past. Don't worry —
You won't be charged for messages rejected for this particular
reason (you *are* charged for messages rejected by carriers
for other reasons). It is considered best practice to send an opt-out
confirmation message, according to the official CTIA guidelines.

#### DELIVERED

A send status of **DELIVERED** means that
Spoke **received confirmation** that the message was
delivered to the recipient's phone. Almost all of the time, this
means that the recipient's phone received the message. Some of the
time, however, carriers choose to send affirmative delivery reports
*without* having sent the message; this typically occurs after
sending a large volume of a particular URL, and it's likely that
they do it in order to prevent you or us from reverse-engineering
their spam filters.

#### SENT

A send status of  **SENT** means that the message was just sent by the user and is **in the process of being delivered**. This is most often a temporary status, and you'll see many
messages marked as SENT if you export from a currently-running
campaign. Delivery reports typically arrive in a few seconds,
but some arrive minutes or hours later. That said, a small
percent of messages will stay SENT for all time. This means that
we never received a delivery report from the carrier. Like
false-positive delivery reports, this just happens sometimes and
is likely done to prevent the reverse-engineering of spam
filters.

### Error Codes

*Error code* is a column on the messages export from Spoke.
It refers to the error codes that we receive from underlying telecom
providers (expressed as stringified 5-digit integers).

Error codes are specific to the service that is powering your
instance of Spoke, which at the moment is either [Telnyx](https://developers.telnyx.com/docs/api/v2/overview#error-codes), [Twilio](https://www.twilio.com/docs/api/errors#1-anchor), or [Bandwidth](https://dev.bandwidth.com/docs/messaging/errors/).

 