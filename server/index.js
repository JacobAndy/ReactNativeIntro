const express = require("express");
const app = express();
const cors = require("cors");
const { json } = require("body-parser");
const port = 3001;

const { userLogin, createUser } = require("./components/UserController");

app.use(json());
app.use(cors());

// **********USER LOG IN*************
app.get(`/api/user/login`, userLogin);

//********USER CREATE ACCOUNT********
app.post("/api/user/create", createUser);

app.listen(port, () => {
  console.log(`Listening on port :=> ${port}`);
});
