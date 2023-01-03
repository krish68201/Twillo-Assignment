const id = 'ACcc7711232341bca940778cdb0b08d909';
const token = 'c75ed46d0007af2dcebb22ca9aa588dc';
  

const twilio = require('twilio');
  

const client = twilio(id, token);
  

client.messages
    .create({
          
        
        body: ' Node Js server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind. ',
  
        // Senders Number (Twilio Sandbox No.)
        from: 'whatsapp:+14155238886',
  
        // Number receiving the message
        to: 'whatsapp:+918770396590',
        mediaUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    })
    .then(message => console.log("Message sent successfully"))
    .done();