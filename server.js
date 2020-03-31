//zmienna środowiskowa to zmienna, którą możesz ustawić przed uruchomieniem programu. jest przechowywana w powłoce systemowej
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
// importowanie biblioteki express w stylu es5
const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");

//inicjujemy serwer
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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
