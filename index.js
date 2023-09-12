const express = require('express');
const mongoose = require('mongoose');
const { User } = require("./models/User");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;
const config = require("./config/key");
//개발 모드에 따라서 다른 경우의 수로 비밀정보 가져올 수 있도록 `key.js` 를 가져오는거다!

// MongoDB 연결 옵션 설정
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error(err));

//bodyParser에 옵션주기
//application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true })); //옵션을 주기 위해 app.use 를 이용해 인코드.... extended 트루로 해주고
//application/json
app.use(bodyParser.json());

app.post("/register", (req, res) => {
  //여기서 작성해줘야 할 코드는 ..
  //client에서 보내주는 username, email, password 등 회원가입때 필요한 정보들을 client에서 가져오면,
  //이것들(정보들)을 데이터 베이스에 넣어주는 것을 작업을 야기서 해주는거다! ✨
  //(위 작업을 해주기 위해, 내가 방금전에 만들어줬던 usermodel을 가져와야한다. <-- models 폴더안에 들어있는 User.js)

  //가져온 User 를 이용해서 인스턴스를 만들어준다.
  const user = new User(req.body); //정보들을 database에 넣어주기 위해서는 request의 body를 넣어준다.

  user.save()
    .then(() => {
      return res.status(200).json({
        success: true,
      });
    })
    .catch(err => {
      return res.json({ success: false, err }); // 에러 발생 시 에러를 클라이언트에게 전달
    });
});

app.get('/', (req, res) => {
  res.send('Hello World!-nodemon version');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
