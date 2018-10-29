const express = require("express");
const app = express();
const path= require("path");
app.use(express.static("public"));
const PORT = process.env.PORT || 3000;
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgersController.js");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
});