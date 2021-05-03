const express = require("express");
const router = express.Router();
const {connection} = require("../config/db");
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
  connection.query("Insert into user set ?", data, (err, result) => {
    if (err) {
      res.json({
        msg: "error",
        error: err,
      });
    } else {
      res.json({
        msg: "SuccessFully Created User",
        data: result,
      });
    }
  });
});

router.get("/get-details", (req, res) => {
  connection.query("select * from user", (err, result) => {
    if (err) {
      res.json({
        msg: "error",
        error: err,
      });
    } else {
      res.json({
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
  connection.query(
    `update user set ? where id=${req.params.id}`,
    data,
    (err, result) => {
      if (err) {
        res.json({
          msg: "error",
          error: err,
        });
      } else {
        res.json({
          msg: "successFully Updated User",
          data: result,
        });
      }
    }
  );
});

router.delete("/delete/:id", (req, res) => {
  connection.query(
    `delete from user where id=${req.params.id}`,
    (err, result) => {
      if (err) {
        res.json({
          msg: "error",
          error: err,
        });
      } else {
        res.json({
          msg: "SuccessFully Deleted User",
          data: result,
        });
      }
    }
  );
});

module.exports = router;
