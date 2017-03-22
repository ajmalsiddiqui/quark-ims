const nodemailer = require('node-mailer');

const database = require('./database');

const transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ajmalsiddiqui414@gmail.com',
    pass: 'alfasierra'
  }
});

let mailOptions = {
  from: "Spartan Coffee",
  subject: "EMERGENCY ALERT",
  text: "EMERGENCY"
};

function setOptions(roomArray){
  let text = 'Alert! The security of the following rooms has been compromised:\n';
  roomArray.forEach((room) => {
    text+=room + '\n';
  });
  mailOptions.text = text;
}

function send(){
  database.getDocs((doc) => {
    let mailText = mailOptions.text;
    mailOptions.to = doc.email;
    mailOptions.text = 'Hello' + doc.name + '\n\n' + mailText;
    transport.sendMail(mailOptions, (err, info) => {
      if(err){
        console.log(err);
      }
      else{
        console.log('Mails sent!\nInformation\n' + info);
      }
    });
  });
}

module.exports = {
  'setOptions': setOptions,
  'send': send
}
