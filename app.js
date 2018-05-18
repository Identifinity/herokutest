const http = require('http');
const express = require('express');
const ejs = require('ejs');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("mainsite", {id: 0})
})

app.get("/:id", (req, res) => {
  res.render("mainsite", {id: req.params.id})
});

app.listen(port);
