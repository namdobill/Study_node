const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

// MongoDB 연결 옵션 설정
mongoose
  .connect('mongodb+srv://jw90310:wkddnjs12~@jwmongo01.j1iji5u.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
