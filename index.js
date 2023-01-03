
const id = 'ACcc7711232341bca940778cdb0b08d909';
const token = 'c75ed46d0007af2dcebb22ca9aa588dc';
  

const twilio = require('twilio');
  

const client = twilio(id, token);
  

client.messages
    .create({
          
        
        body: 'Hello My name is Krishnika Gupta. We can send WhatsApp messages using the Twilio API in NodeJS. ',
  
        // Senders Number (Twilio Sandbox No.)
        from: 'whatsapp:+14155238886',
  
        // Number receiving the message
        to: 'whatsapp:+918770396590',
       
    })
    .then(message => console.log("Message sent successfully"))
    .done();