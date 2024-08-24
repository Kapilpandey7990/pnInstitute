const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'mainpn' directory
app.use(express.static(path.join(__dirname, '_public_html (13)')));

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/formDataDB';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Define Mongoose schema and model
const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    selectClass: String,
    formType: String
}); 

const FormData = mongoose.model('FormData', formSchema);

// Handle form submission
app.post('/submit-form', async (req, res) => {
    try {
        const { name, email, number, selectClass, formType } = req.body;

        // Create a new document
        const formData = new FormData({
            name,
            email,
            number,
            selectClass,
            formType
        });

        // Save the document
        await formData.save();

        // Handle redirection based on formType
        switch (formType) {
            case 'loginPopup':
                res.redirect('https://drive.google.com/file/d/10G4zjuid0f7pe0_jUb1I5TWBrxpjmt-2/view?usp=sharing');
                break;
            case 'loginPopup1':
                res.redirect('https://drive.google.com/file/d/1uelPdX7NY0qjSu31rfSyWLpByb1J0IF7/view?usp=sharing');
                break;
            case 'loginPopup2':
                res.redirect('https://drive.google.com/file/d/1LZha-btOnx361aiduNqxshK-qblqbeNu/view?usp=drive_link');
                break;
            case 'loginPopup3':
                res.redirect('https://drive.google.com/file/d/1ddrhjFJx3gWzt8ZtAqth71qC6WT0_dqO/view?usp=drive_link');
                break;
            case 'loginPopup4':
                res.redirect('https://drive.google.com/file/d/1YEEvu07lSvOa-GvuNx0V-ttMv7h_luTD/view?usp=sharing');
                break;
            case 'loginPopup5':
                res.redirect('https://drive.google.com/file/d/1uelPdX7NY0qjSu31rfSyWLpByb1J0IF7/view?usp=sharing');
                break;
            case 'loginPopup6':
                res.redirect('https://drive.google.com/file/d/1uelPdX7NY0qjSu31rfSyWLpByb1J0IF7/view?usp=sharing');
                break;
            case 'loginPopup7':
                res.redirect('https://drive.google.com/file/d/1uelPdX7NY0qjSu31rfSyWLpByb1J0IF7/view?usp=sharing');
                break;
            default:
                res.redirect('/');
                break;
        }

    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).send('An error occurred while saving the form data.');
    }
});

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '_public_html (13)', 'index.html'));
});

// Serve student.html from /pages
app.get('/pages/student.html', (req, res) => {
    res.sendFile(path.join(__dirname, '_public_html (13)', 'pages/student.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
