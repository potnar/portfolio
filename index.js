//zmienna środowiskowa to zmienna, którą możesz ustawić przed uruchomieniem programu. jest przechowywana w powłoce systemowej
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const { PORT } = process.env || 5001;
const { MAIL_USER } = process.env;
const { MAIL_PASS } = process.env;
const { BUILD_PATH } = process.env;

const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(express.json());
app.use(express.static(BUILD_PATH));

let transport = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
};

let transporter = nodemailer.createTransport(transport);

transporter.verify((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let content = `name: ${name} \n email: ${email} \n message: ${message} `;

  let mail = {
    from: email,
    to: "potnar66@gmail.com",
    subject: "New Message from Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: err,
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

app.use("/", router);
app.get("/", (req, res) => {
  res.sendFile(path.join(BUILD_PATH, "index.html"));
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
