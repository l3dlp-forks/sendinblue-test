// TODO: Complete the values of the following 4 variables to make the script
// work.
// The SendinBlue API Key.
var apiKey = '';
// The first email address used as the first recipient.
var target = '';
// The second email address used as the second recipient.
var target2 = '';
// The ID of the used SendinBlue SMTP email template.
var templateId = 0;


// START OF THE SCRIPT:
var util = require('util'); // for debugging
require('mailin-api-node-js');
var client = new Mailin('https://api.sendinblue.com/v2.0', apiKey);

var data = {
    id: templateId,
    // Recipients are separated by a pipe character.
    to: target + '|' + target2,
    // In SendinBlue, merge vars are called attributes. There are no
    // recipient-level attributes, all attributes are global. Attributes are
    // used in the template content like %NAME% or %FOOTER%. See:
    // https://apidocs.sendinblue.com/template/#1
    attr: {
        NAME: 'A',
        FOOTER: '2016'
    },
    attachment_url : '',
    headers: {
        'Content-Type': 'text/html;charset=UTF-8'
    }
};

client.send_transactional_template(data).on('complete', function (data) {
    console.log(util.inspect(JSON.parse(data), {
        colors: true, // default is false
        depth: null // default depth is 2, null means infinite depth
    }));
});
