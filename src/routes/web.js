const {
  getHomepage,
  getABC,
  getUsers,
  getCreatePage,
  getHuuThanh,
  getUpdatePage,
  getDeletePage,
  postCreateUsers,
  postUpdateUsers,
  postDeleteUsers,
} = require("../controllers/homeController.js");
const express = require("express");
const router = express.Router();
//khai bao route
router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/users", getUsers);

router.get("/create", getCreatePage);

router.get("/HuuThanh", getHuuThanh);

router.get("/update/:id", getUpdatePage);

router.get("/delete/:id", getDeletePage);

router.post("/create-users", postCreateUsers);

router.post("/update-users", postUpdateUsers);

router.post("/delete-users", postDeleteUsers);

module.exports = router;
