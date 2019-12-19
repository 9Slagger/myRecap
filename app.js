const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;
const db1 = require("./lib/db1");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/user", (req, res) => {
  db1.User((error, data) => {
    if (error) {
      console.log("❌ ", error);
      res.status(400).json({ message: error });
    } else {
      res.status(200).json({ result: data });
      console.log("✅ ", data);
    }
  });
});

app.listen(port, () => console.log(`server listening on port ${port}!`));
