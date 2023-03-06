//api통신 순서 :  server.js(미들웨어) -> db.js
const express = require("express");
const cors = require("cors");
const app = express();
const api = require("./db.js");

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Listening at 3000");
});

app
  .route("/projectList")
  .get((req, res) => {
    console.log("getProjectList");
    api.pg.query("select t1.prjct_nm, t2.* from project_list t1, project_info t2 where t1.prjct_id = t2.prjct_id", (err, result) => {
      if (err) res.sendStatus(500);
      else res.status(200).json(result.rows);
    });
  })
  .post((req, res) => {
    res.send("add project");
  });
