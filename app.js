const express = require("express");
const app = express();
const port = 3000;

// app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/home", (req, res) => {
  //   res.send("Home page");
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
  //   res.send("Abouts");
});
app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
  //   res.send("works");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
