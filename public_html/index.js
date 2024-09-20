const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const multer = require("multer");

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the directory
app.use(express.static(path.join(__dirname)));

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create a transport instance using Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kp3446085@gmail.com", // Replace with your email
    pass: "rbpm ywjl vamq jxcd", // Replace with your app password
  },
});

// Handle form submission for reviews
app.post("/submit-review", upload.single("attachment"), async (req, res) => {
  try {
    const { name, selectClass, contact, year, subjec } = req.body;

    // Send email
    const mailOptions = {
      from: "kp3446085@gmail.com", // Replace with your email
      to: "kp894855@gmail.com", // Replace with the recipient email
      subject: "New Review Submission",
      html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Class:</strong> ${selectClass}</p>
                <p><strong>Contact:</strong> ${contact}</p>
                <p><strong>Year:</strong> ${year}</p>
                <p><strong>Message:</strong> ${subject}</p>
            `,
      attachments: req.file
        ? [
            {
              filename: req.file.originalname,
              content: req.file.buffer,
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    // Redirect to thank you page
    res.redirect("/pages/thank.html");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("An error occurred while sending the email.");
  }
});

// Handle form submission for the original form
app.post("/submit-form", async (req, res) => {
  try {
    const { name, email, number, selectClass, formType } = req.body;

    // Send email
    const mailOptions = {
      from: "kp3446085@gmail.com", // Replace with your email
      to: "kp894855@gmail.com", // Replace with the recipient email
      subject: "New Form Submission",
      html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Number:</strong> ${number}</p>
                <p><strong>Class:</strong> ${selectClass}</p>
                <p><strong>Form Type:</strong> ${formType}</p>
            `,
    };

    await transporter.sendMail(mailOptions);

    // Redirect based on formType
    let redirectUrl = "";
    switch (formType) {
      case "loginPopup":
        redirectUrl =
          "https://drive.google.com/file/d/10G4zjuid0f7pe0_jUb1I5TWBrxpjmt-2/view?usp=sharing";
        break;
      case "loginPopup1":
        redirectUrl =
          "https://drive.google.com/file/d/1uelPdX7NY0qjSu31rfSyWLpByb1J0IF7/view?usp=sharing";
        break;
      case "loginPopup2":
        redirectUrl =
          "https://drive.google.com/file/d/1LZha-btOnx361aiduNqxshK-qblqbeNu/view?usp=drive_link";
        break;
      case "loginPopup3":
        redirectUrl =
          "https://drive.google.com/file/d/1ddrhjFJx3gWzt8ZtAqth71qC6WT0_dqO/view?usp=drive_link";
        break;
      case "loginPopup4":
        redirectUrl =
          "https://drive.google.com/file/d/1YEEvu07lSvOa-GvuNx0V-ttMv7h_luTD/view?usp=sharing";
        break;
      case "loginPopup5":
        redirectUrl =
          "https://drive.google.com/file/d/1uelPdX7NY0qjSu31rfSyWLpByb1J0IF7/view?usp=sharing";
        break;
      case "loginPopup6":
        redirectUrl =
          "https://drive.google.com/file/d/1uelPdX7NY0qjSu31rfSyWLpByb1J0IF7/view?usp=sharing";
        break;
      case "loginPopup7":
        redirectUrl =
          "https://drive.google.com/file/d/1uelPdX7NY0qjSu31rfSyWLpByb1J0IF7/view?usp=sharing";
        break;
      default:
        redirectUrl = "/";
    }

    res.redirect(redirectUrl);
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("An error occurred while sending the email.");
  }
});

// Handle alumni registration form submission
app.post("/submit-alumni", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      mobileNumber,
      email,
      class: className,
      year,
      current,
      employer,
      designation,
      seftWhat,
      studentWhat,
    } = req.body;

    // Send email
    const mailOptions = {
      from: "kp3446085@gmail.com", // Replace with your email
      to: "kp894855@gmail.com", // Replace with the recipient email
      subject: "New Alumni Registration",
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
            `,
    };

    await transporter.sendMail(mailOptions);

    // Redirect to the thank you page
    res.redirect("pages/thank.html");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("An error occurred while sending the email.");
  }
});

// Handle contact form submission
app.post("/submit-contact", async (req, res) => {
  try {
    const { name, email, number, selectClass, subject } = req.body;

    // Send email
    const mailOptions = {
      from: "kp3446085@gmail.com", // Replace with your email
      to: "kp894855@gmail.com", // Replace with the recipient email
      subject: "New Contact Form Submission",
      html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact Number:</strong> ${number}</p>
                <p><strong>Select Class:</strong> ${selectClass}</p>
                <p><strong>Message:</strong> ${subject}</p>
            `,
    };

    await transporter.sendMail(mailOptions);

    // Redirect to thank you page or send a success response
    res.redirect("/pages/contact_thank.html");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("An error occurred while sending the email.");
  }
});
app.post("/submit-contact-main", async (req, res) => {
  try {
    const { name, email, number, selectClass, subject } = req.body;

    // Send email
    const mailOptions = {
      from: "kp3446085@gmail.com", // Replace with your email
      to: "kp894855@gmail.com", // Replace with the recipient email
      subject: "New Contact Form Submission",
      html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact Number:</strong> ${number}</p>
                <p><strong>Select Class:</strong> ${selectClass}</p>
                <p><strong>Message:</strong> ${subject}</p>
            `,
    };

    await transporter.sendMail(mailOptions);

    // Redirect to thank you page or send a success response

    res.redirect("/pages/index_thank.html");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("An error occurred while sending the email.");
  }
});

// Handle POST request for form submission
app.post("/submit-career", upload.none(), async (req, res) => {
  try {
    const {
      app1,ddlDesignation,txtLastName,txtFirstName,txtFatherName,rdoGender,txtBirthDate,ddlCategory,txtVillage,txtTaluka,txtDistrict,txtState,txtAddress,txtMobileNo,txtWhatsAppNo,txtEmailId,chkAgreeMentYes,ddlSection,ddlMedium,ddlTeaching,txtSubject1,txtSubject2,txtSubject3,txtExpectedSalary,txtCurrentSalary,txtWhyYouWantToJoin} = req.body;

    // Create email options
    const mailOptions = {
      from: "your-email@gmail.com", // Replace with your email
      to: "recipient-email@gmail.com", // Replace with the recipient email
      subject: "New Form Submission",
      html: `
                    
                <h2><strong>Designation:</strong> ${app1}</h2>
                <p><strong>Designation:</strong> ${ddlDesignation}</p>
                <p><strong>Surname:</strong> ${txtLastName}</p>
                <p><strong>First Name:</strong> ${txtFirstName}</p>
                <p><strong>Father/Husband Name:</strong> ${txtFatherName}</p>
                <p><strong>Gender:</strong> ${rdoGender}</p>
                <p><strong>Date of Birth:</strong> ${txtBirthDate}</p>
                <p><strong>Category:</strong> ${ddlCategory}</p>
                <p><strong>Area/Village:</strong> ${txtVillage}</p>
                <p><strong>Taluka:</strong> ${txtTaluka}</p>
                <p><strong>District:</strong> ${txtDistrict}</p>
                <p><strong>State:</strong> ${txtState}</p>
                <p><strong>Full Address:</strong> ${txtAddress}</p>
                <p><strong>Mobile No:</strong> ${txtMobileNo}</p>
                <p><strong>WhatsApp No:</strong> ${txtWhatsAppNo}</p>
                <p><strong>Email Id:</strong> ${txtEmailId}</p>
                <p><strong>Agree to Declaration:</strong> ${
                  chkAgreeMentYes ? "Yes" : "No"
                }</p>
                <h2>New Form Submission</h2>
                
                <!-- Section Details -->
                <h3>Section Details</h3>
                <p><strong>Section:</strong> ${ddlSection}</p>
                <p><strong>Medium (selected):</strong> ${ddlMedium ? ddlMedium.join(', ') : 'None'}</p>
                <p><strong>Teaching (selected):</strong> ${ddlTeaching ? ddlTeaching.join(', ') : 'None'}</p>
                
                <!-- Subject to Teach -->
                <h3>Subjects to Teach</h3>
                <p><strong>Subject 1:</strong> ${txtSubject1}</p>
                <p><strong>Subject 2:</strong> ${txtSubject2}</p>
                <p><strong>Subject 3:</strong> ${txtSubject3}</p>
                
                <!-- Salary and Additional Information -->
                <h3>Salary and Additional Information</h3>
                <p><strong>Expected Salary:</strong> ${txtExpectedSalary} Per Month</p>
                <p><strong>Current Salary:</strong> ${txtCurrentSalary ? txtCurrentSalary + ' Per Month' : 'Not Provided'}</p>
                <p><strong>Why you want to join our Institute?</strong> ${txtWhyYouWantToJoin}</p>
            `,
      attachments: [], // Add attachments if any are present
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Redirect to thank you page
    res.redirect("/pages/thank.html");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("An error occurred while sending the email.");
  }
});

// Serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/pages/index_thank.html", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index_thank.html"));
});
app.get("/pages/contact_thank.html", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "contact_thank.html"));
});

// Serve additional pages
app.get("/pages/thank.html", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "thank.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//rbpm ywjl vamq jxcd
