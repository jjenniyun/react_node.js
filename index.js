const express = require("express");
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://hjkjj1847:abcd1234@ac-rbrkiq0-shard-00-00.eunh4te.mongodb.net:27017,ac-rbrkiq0-shard-00-01.eunh4te.mongodb.net:27017,ac-rbrkiq0-shard-00-02.eunh4te.mongodb.net:27017/?ssl=true&replicaSet=atlas-gtl8c7-shard-0&authSource=admin&retryWrites=true&w=majority',
    {}).then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! 안녕하세요:)");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
