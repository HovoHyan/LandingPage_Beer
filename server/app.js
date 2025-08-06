const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const LocationsServices = require("./services/LocationServices");

const indexRouter = require("./routes/index");
const adminRouter = require("./routes/admin");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.locals.services = {
  locations : new LocationsServices()
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Статические файлы
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../client/build")));

// Роуты API и админки
app.use("/", indexRouter);
app.use("/admin", adminRouter);

// Обработка 404 ошибки — если не найден маршрут
app.use(function (req, res, next) {
  next(createError(404));
});

// React SPA fallback — должен идти ПОСЛЕ 404,
// чтобы отдавать index.html для всех "не API" путей
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Обработчик ошибок
app.use(function (err, req, res, next) {
  // Параметры для отображения ошибки в режиме разработки
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Рендерим страницу ошибки через EJS
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
