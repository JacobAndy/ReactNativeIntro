const express = require("express");
const app = express();
const cors = require("cors");
const { json } = require("body-parser");
const port = 3001;

app.use(json());
app.use(cors());

app.listen(port, () => {
  console.log(`Listening on port :=> ${port}`);
});
