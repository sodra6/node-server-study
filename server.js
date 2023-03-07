//api통신 순서 :  server.js(미들웨어) -> db.js
const express = require("express");
const cors = require("cors");
const app = express();
const api = require("./db.js");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static("build"));
app.use(express.json());

app.listen(3000, () => {
  console.log("Listening at 3000");
});

app
  .route("/api/projectList")
  .get((req, res) => {
    console.log("get method");
    api.pg.query("select t1.prjct_nm, t2.* from project_list t1, project_info t2 where t1.prjct_id = t2.prjct_id", (err, result) => {
      if (err) {
        console.log("query err");
        res.sendStatus(500);
      } else res.status(200).json(result.rows);
    });
  })
  .post((req, res) => {
    console.log("post method");
    api.pg.query("select t1.prjct_nm, t2.* from project_list t1, project_info t2 where t1.prjct_id = t2.prjct_id", (err, result) => {
      if (err) {
        console.log("query err");
        res.sendStatus(500);
      } else res.status(200).json(result.rows);
    });
  });
