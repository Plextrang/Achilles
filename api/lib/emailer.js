const nodemailer = require('nodemailer');

// Function to send email
async function sendEmail(productName, recipientEmail) {
    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'achillesemail67@gmail.com', // Your email address
            pass: 'AchillesAdmin1!' // Your email password or application-specific password
        }
    });

    // Email content
    let mailOptions = {
        from: 'achillesemail67', // Sender address
        to: recipientEmail, // Recipient address
        subject: 'Low Stock Alert', // Subject line
        text: `Product ${productName} is low on stock.`, // Plain text body
    };

    // Send email
    let info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
}

module.exports = {sendEmail}
// Example usage:
// sendEmail('Product ABC', 'recipient@example.com');
