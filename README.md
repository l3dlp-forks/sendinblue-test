# SendinBlue evaluation and API test for jillix
The free plan supports 9000 emails per month, webhooks, it has a daily quota of
300 emails per day, and at the beginning, before you gain reputation, you have a
hourly quota of 40 emails per hour. It has [a nice NodeJS
API](https://github.com/mailin-api/mailin-api-node-js) with [a
good](https://github.com/mailin-api/mailin-api-node-js/tree/master/V2.0)
[documentation](https://apidocs.sendinblue.com/).

To run [`example.js`](example.js) first run `npm install` in its directory and
complete the values of the first 4 variables declared at the beginning of the
script.

## Other arguments
### Advantages
1. The SendinBlue NodeJS API is cleaner than SendGrid's API.
2. It has a nice visual, drag & drop HTML template designer and it also has a
   plain text editor and an HTML editor.

### Disadvantages
1. In the free plan, in the sent emails created with the visual editor there
   always is a SendinBlue logo. In the sent emails created with the plain text
   or with the HTML editor there isn't any SendinBlue logo.
2. Recipient merge vars when migrating from Mandrill are not supported (only
   global merge vars are supported in the form of attributes).
