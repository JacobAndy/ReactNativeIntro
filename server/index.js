require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");
const port = 3001;

const { userLogin, createUser } = require("./controller/UserController");

app.use(json());
app.use(cors());

massive(process.env.DATA_BASE_KEY)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => {
    console.log(`ERROR IN MASSIVE DATABASE KEY :=> ${err}`);
  });

// **********USER LOG IN*************
app.get(`/api/user/login`, userLogin);

//********USER CREATE ACCOUNT********
app.post("/api/user/create", createUser);

app.listen(port, () => {
  console.log(`Listening on port :=> ${port}`);
});
