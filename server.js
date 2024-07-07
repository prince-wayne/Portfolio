const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/send-email', (req, res) => {
    const { name, email, projectDetails, startDate, endDate } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.Email_Owner,
            pass: process.env.Email_Password_Owner
        }
    });

    const mailOptions = {
        from: process.env.Email_Owner,
        to: process.env.Email_Password_Owner,
        subject: `Portfolio contact from ${email}`,
        text: `Name: ${name}\nEmail: ${email}\nProject Details: ${projectDetails}\nStart Date: ${startDate}\nEnd Date: ${endDate}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
