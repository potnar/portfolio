//zmienna środowiskowa to zmienna, którą możesz ustawić przed uruchomieniem programu. jest przechowywana w powłoce systemowej
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
// importowanie biblioteki express w stylu es5
const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
const loggerMiddleware = (req, res, next) => {
  console.log(req.protocol + "://" + req.get("host") + req.originalUrl);
  next();
};
app.use(loggerMiddleware);
app.use(express.static(path.join(__dirname, "build")));

// od ścieżki apiRouter serwer ma rozpoznawać endpointy tak jak są zdefiniowane w routerze

app.use(loggerMiddleware);

// ^
// api.get("/ideas") => app.get("/api/ideas")

// tak samo jak w routerze "api" powyżej, definiujemy co serwer ma zwracać w odpowiedzi
// na zapytanie typu "GET". "*" oznacza, że dla każdej możliwej ścieżki ma zwracać naszą stronę.
// ponieważ nasz app.get znajduje się poniżej api, działa to podobnie jak w React routerze,
// tzn. najpierw są rozwiązywane ścieżki opisane wcześniej, a dopiero na końcu ta tutaj
// (czyli de facto wszystkie inne niż powyżej)

const transport = {
  host: "smtp.gmail.com", // Don’t forget to replace with the SMTP host of your provider
  port: 587,
  auth: {
    user: dotenv.USER,
    pass: dotenv.PASS,
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `name: ${name} \n email: ${email} \n message: ${message} `;

  const mail = {
    from: name,
    to: "cholewamikolaj@gmail.com", // Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
