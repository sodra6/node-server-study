const { Pool } = require("pg");

//Cloudtype 외부 서버 연결 DB
const pg = new Pool({
  user: "wam_dba",
  host: "svc.sel3.cloudtype.app",
  database: "ygcho",
  password: "mindone",
  port: 30479,
});

pg.connect(err => {
  if (err) console.log(err);
  else console.log("Database connect success!");
});

//쿼리 사용시
const selectUser = (req, res) => {
  //res.send("Success Here");
  pg.query("select * from PG_SHADOW", (err, dbRes) => {
    console.log(err, dbRes.rows);
    if (err != null) console.log(err);
    res.send({ data: dbRes.rows });
  });
};

module.exports = {
  selectUser,
};
