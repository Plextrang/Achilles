const nodemailer = require('nodemailer');
const { testSMTPConnection } = require('./testConnection');
async function sendEmail(productName, recipientEmail) {
    try {
        console.log("This is from the sendEmail function!");
        testSMTPConnection();
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'achillesemail67@gmail.com',
                //pass: 'AchillesAdmin1!'
                pass: 'ualm ggwh fqdp vdbd'
            }
        });

        let mailOptions = {
            from: 'achillesemail67@gmail.com',
            to: recipientEmail,
            subject: 'Low Stock Alert',
            text: `Product ${productName} is low on stock.`
        };

        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

module.exports = { sendEmail }