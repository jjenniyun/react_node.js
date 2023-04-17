const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const {User} = require('./models/User');

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://hjkjj1847:abcd1234@ac-rbrkiq0-shard-00-00.eunh4te.mongodb.net:27017,ac-rbrkiq0-shard-00-01.eunh4te.mongodb.net:27017,ac-rbrkiq0-shard-00-02.eunh4te.mongodb.net:27017/?ssl=true&replicaSet=atlas-gtl8c7-shard-0&authSource=admin&retryWrites=true&w=majority',
    {}).then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! 안녕하세요:)");
});

app.post('/register', (req, res)=>{
  // 회원가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다
  const user = new User(req.body)

  user.save((err, userInfo)=>{
    if(err) return res.json({success:false, err})
    // 성공하게되면 success : true 띄게 하기!
    return res.status(200).json({
      success:true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
