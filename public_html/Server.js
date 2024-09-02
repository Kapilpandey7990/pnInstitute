const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const multer = require('multer');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the directory
app.use(express.static(path.join(__dirname, 'public_html')));

// MongoDB connection (not used for file storage in this version)
const mongoURI = 'mongodb://localhost:27017/formDataDB';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create a transport instance using Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kp3446085@gmail.com',  // Replace with your email
        pass: 'rbpm ywjl vamq jxcd'      // Replace with your app password
    }
});

// Define Mongoose schema and model for form submissions
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    selectClass: String,
    message: String,
    attachment: String // Storing file URL or path
});

const FormData = mongoose.model('FormData', formSchema);

// Handle form submission for reviews
app.post('/submit-review', upload.single('attachment'), async (req, res) => {
    try {
        const { name, selectClass, contact, year, subject } = req.body;

        // Send email
        const mailOptions = {
            from: 'kp3446085@gmail.com',  // Replace with your email
            to: 'kp894855@gmail.com',  // Replace with the recipient email
            subject: 'New Review Submission',
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Class:</strong> ${selectClass}</p>
                <p><strong>Contact:</strong> ${contact}</p>
                <p><strong>Year:</strong> ${year}</p>
                <p><strong>Message:</strong> ${subject}</p>
            `,
            attachments: req.file ? [{
                filename: req.file.originalname,
                content: req.file.buffer
            }] : []
        };

        await transporter.sendMail(mailOptions);

        // Create a new document
        const formData = new FormData({
            name,
            email: req.body.email,
            number: contact,
            selectClass,
            message: subject,
            attachment: req.file ? req.file.originalname : null
        });

        // Save the document (optional, if you want to store data in MongoDB)
        // await formData.save();

        // Redirect to thank you page
        res.redirect('/pages/thank.html');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('An error occurred while sending the email.');
    }
});

// Handle form submission for the original form
app.post('/submit-form', async (req, res) => {
    try {
        const { name, email, number, selectClass, formType } = req.body;

        // Send email
        const mailOptions = {
            from: 'kp3446085@gmail.com',  // Replace with your email
            to: 'kp894855@gmail.com',  // Replace with the recipient email
            subject: 'New Form Submission',
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Number:</strong> ${number}</p>
                <p><strong>Class:</strong> ${selectClass}</p>
                <p><strong>Form Type:</strong> ${formType}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        // Redirect based on formType
        let redirectUrl = '';
        switch (formType) {
            case 'loginPopup':
                redirectUrl = 'https://drive.google.com/file/d/10G4zjuid0f7pe0_jUb1I5TWBrxpjmt-2/view?usp=sharing';
                break;
            case 'loginPopup1':
                redirectUrl = 'https://drive.google.com/file/d/1uelPdX7NY0qjSu31rfSyWLpByb1J0IF7/view?usp=sharing';
                break;
            case 'loginPopup2':
                redirectUrl = 'https://drive.google.com/file/d/1LZha-btOnx361aiduNqxshK-qblqbeNu/view?usp=drive_link';
                break;
            case 'loginPopup3':
                redirectUrl = 'https://drive.google.com/file/d/1ddrhjFJx3gWzt8ZtAqth71qC6WT0_dqO/view?usp=drive_link';
                break;
            case 'loginPopup4':
                redirectUrl = 'https://drive.google.com/file/d/1YEEvu07lSvOa-GvuNx0V-ttMv7h_luTD/view?usp=sharing';
                break;
            case 'loginPopup5':
                redirectUrl = 'https://drive.google.com/file/d/1uelPdX7NY0qjSu31rfSyWLpByb1J0IF7/view?usp=sharing';
                break;
            case 'loginPopup6':
                redirectUrl = 'https://drive.google.com/file/d/1uelPdX7NY0qjSu31rfSyWLpByb1J0IF7/view?usp=sharing';
                break;
            case 'loginPopup7':
                redirectUrl = 'https://drive.google.com/file/d/1uelPdX7NY0qjSu31rfSyWLpByb1J0IF7/view?usp=sharing';
                break;
            default:
                redirectUrl = '/';
        }

        res.redirect(redirectUrl);
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('An error occurred while sending the email.');
    }
});

// Handle alumni registration form submission
app.post('/submit-alumni', async (req, res) => {
    try {
        const { firstName, lastName, mobileNumber, email, class: className, year, current, employer, designation, seftWhat, studentWhat } = req.body;

        // Send email
        const mailOptions = {
            from: 'kp3446085@gmail.com',  // Replace with your email
            to: 'kp894855@gmail.com',  // Replace with the recipient email
            subject: 'New Alumni Registration',
            html: `
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Class:</strong> ${className}</p>
                <p><strong>Year:</strong> ${year}</p>
                <p><strong>Currently Pursuing:</strong> ${current}</p>
                <p><strong>Employer:</strong> ${employer}</p>
                <p><strong>Designation:</strong> ${designation}</p>
                <p><strong>Self Employed What:</strong> ${seftWhat}</p>
                <p><strong>Student What:</strong> ${studentWhat}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        // Redirect to the thank you page
        res.redirect('pages/thank.html');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('An error occurred while sending the email.');
    }
});

// Handle contact form submission
app.post('/submit-contact', async (req, res) => {
    try {
        const { name, email, number, selectClass, subject } = req.body;

        // Send email
        const mailOptions = {
            from: 'kp3446085@gmail.com',  // Replace with your email
            to: 'kp894855@gmail.com',  // Replace with the recipient email
            subject: 'New Contact Form Submission',
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact Number:</strong> ${number}</p>
                <p><strong>Select Class:</strong> ${selectClass}</p>
                <p><strong>Message:</strong> ${subject}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        // Redirect to thank you page or send a success response
        res.redirect('/pages/contact_thank.html');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('An error occurred while sending the email.');
    }
});
app.post('/submit-contact-main', async (req, res) => {
    try {
        const { name, email, number, selectClass, subject } = req.body;

        // Send email
        const mailOptions = {
            from: 'kp3446085@gmail.com',  // Replace with your email
            to: 'kp894855@gmail.com',  // Replace with the recipient email
            subject: 'New Contact Form Submission',
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact Number:</strong> ${number}</p>
                <p><strong>Select Class:</strong> ${selectClass}</p>
                <p><strong>Message:</strong> ${subject}</p>
            `
        };

        await transporter.sendMail(mailOptions);

        // Redirect to thank you page or send a success response
        
        res.redirect('/pages/index_thank.html');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('An error occurred while sending the email.');
    }
});


// Serve the HTML form
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public_html', 'index.html'));
  });
app.get('/pages/index_thank.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'pages','index_thank.html'));
})
app.get('/pages/contact_thank.html',(req,res)=>{
    res.sendFile(path.join(__dirname,'pages','contact_thank.html'));
})

// Serve additional pages
app.get('/pages/thank.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'thank.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//rbpm ywjl vamq jxcd