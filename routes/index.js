const express = require("express");
const router = express.Router();
const conn = require("../config/db");
router.get("/", (req, res) => {
  res.send("Welcome to the Home Page..");
});

router.post("/create", (req, res) => {
  const data = {
    firstname: req.body.first,
    lastname: req.body.last,
    email: req.body.email,
    mobile: req.body.mobile,
  };
  conn.query("Insert into user set ?", data, (err, result) => {
    if (err) {
      res.send({
        msg: "error",
        error: err,
      });
    } else {
      res.send({
        msg: "SuccessFully Created User",
        data: result,
      });
    }
  });
});

router.get("/get-details", (req, res) => {
  conn.query("select * from user", (err, result) => {
    if (err) {
      res.send({
        msg: "error",
        error: err,
      });
    } else {
      res.send({
        msg: "SuccessFully Fetch User Data",
        data: result,
      });
    }
  });
});

router.put("/update/:id", (req, res) => {
  const data = {
    firstname: req.body.first,
    lastname: req.body.last,
    email: req.body.email,
    mobile: req.body.mobile,
  };
  conn.query(`update user set ? where id=${req.params.id}`,data,(err, result) => {
      if (err) {
        res.send({
          msg: "error",
          error: err,
        });
      } else {
        res.send({
          msg: "successFully Updated User",
          data: result,
        });
      }
    }
  );
});

router.delete("/delete/:id", (req, res) => {
  conn.query(`delete from user where id=${req.params.id}`,(err, result) => {
      if (err) {
        res.send({
          msg: "error",
          error: err,
        });
      } else {
        res.send({
          msg: "SuccessFully Deleted User",
          data: result,
        });
      }
    }
  );
});

module.exports = router;
