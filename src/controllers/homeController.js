const connection = require("../config/database.js");
// const bcrypt = require("bcryptjs");
// const salt = bcrypt.genSaltSync(10);
const {
  createNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService.js");
const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("Check ABC");
};

const getHuuThanh = (req, res) => {
  res.render("sample.ejs");
};

const getUsers = (req, res) => {
  res.render("user.ejs");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.ID;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user });
};

const getDeletePage = async (req, res) => {
  const userId = req.params.ID;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userDelete: user });
};

const postCreateUsers = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  // connection.query (
  //     `INSERT INTO Users (email, name, city)
  //     VALUES(?, ?, ?)`,
  //     [email, name, city],
  //     function(err, results){
  //         console.log(results);
  //         res.send('Created user succeed !');
  //     }
  // );
  // const [results, fields] = await connection.query('select * from Users u');

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES(?, ?, ?)`,
    [email, name, city]
  );
  res.redirect("/");
};

const postUpdateUsers = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let userId = req.body.userId;

  await updateUserById(email, name, city, userId);

  res.redirect("/");
};

const postDeleteUsers = async (req, res) => {
  const deleteId = req.body.userId;
  await deleteUserById(deleteId);

  res.redirect("/");
};

module.exports = {
  getHomepage,
  getABC,
  getUsers,
  getHuuThanh,
  postCreateUsers,
  getCreatePage,
  getUpdatePage,
  getDeletePage,
  postUpdateUsers,
  postDeleteUsers,
};
