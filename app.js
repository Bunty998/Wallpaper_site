const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./route/router")
const path = require("path");


app.set("view engine", "ejs");
app.use('/static',express.static('public'));
app.use(express.static('upload'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'))
const port = 2023;
app.use('/', router); 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
