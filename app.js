var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var posts = require("./routes/api/posts");
var works = require("./routes/api/works");
var work = require("./routes/api/work");
var userInfo = require("./routes/api/userInfo");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.set("json spaces", 40);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//static
app.use("/files", express.static("./assets/files"));
app.use("/img", express.static("./assets/img"));

//cors
app.use(cors());

// app.use('/', indexRouter);
//routes
app.use("/api/user", userInfo);
app.use("/api/posts", posts);
app.use("/api/works", works);
app.use("/api/work", work);
app.use("/", userInfo);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
