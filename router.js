const router = require("express").Router();
const api = require("./db.js");

module.exports = app => {
  console.log("app router");
  router.post("/:Id", api.selectUser);
  console.log(api.selectUser);

  app.use("/user", router);
};
