const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.listen(3000, () => {
  console.log("Listening at 3000");
});

app.get("/", (req, res) => {
  res.send("기본페이지");
});

//파라미터를 받을 떈 :(콜론) 을 쓰고 변수작성
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  console.log({ userId: id });
  res.json({ userId: id });
});

//axios or fetch를 사용해 body에 담겨져 오는 것
app.post("/user/:id", (req, res) => {
  const q = req.params;
  console.log(q);
  res.json({ userId: q.id });
});
