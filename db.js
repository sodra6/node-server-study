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

module.exports = {
  pg,
};
