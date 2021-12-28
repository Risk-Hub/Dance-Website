const express = require("express");
const path = require("path");
const { name } = require("pug/lib");
const app = express();
const fs = require("fs");
const port = 8000;

app.use("/static", express.static("static"));
app.use(express.urlencoded());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  const params = {};
  res.status(200).render("home.pug", params);
});
app.get("/contact", (req, res) => {
  const params = {};
  res.status(200).render("contact.pug", params);
});
app.post("/contact", (req, res) => {
  mane = req.body.name;
  email = req.body.email;
  phone = req.body.phone;
  gender = req.body.gender;
  address = req.body.address;

  let outputToWrite = `The name of the client is ${mane}. His/Her email-is is ${email}. His/Her conatct no. is ${phone}. His/Her Gender is ${gender}. He/She has given a message "${address}".`;
  fs.writeFileSync("output.txt", outputToWrite);
});
app.listen(port, () => {
  console.log(`Your application started successfully on port ${port}`);
});
