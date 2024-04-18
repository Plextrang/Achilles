const nodemailer = require('nodemailer');

// Function to send email
async function sendEmail(productName, recipientEmail) {
    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail.com', // Your email address
            pass: 'your_password' // Your email password or application-specific password
        }
    });

    // Email content
    let mailOptions = {
        from: 'your_email@gmail.com', // Sender address
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
