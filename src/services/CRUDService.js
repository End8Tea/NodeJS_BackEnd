const connection = require("../config/database.js");
const db = require("../models/models/index.js");


const createNewUser = async (email, name, city) => {
    try{
      await db.User.save({
        Email: email,
        Name: name,
        City: city
      })
    } catch(error){
      console.log(">>> check error: ", error);
    }
};

const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users");
  return results;
};

const getUserById = async (userId) => {
  let [results, fields] = await connection.query(
    "select * from Users u where ID = ?",
    userId
  );

  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const updateUserById = async (email, name, city, userId) => {
  let [results, fields] = await connection.query(
    `UPDATE Users 
        SET email = ?, name = ?, city = ?
        WHERE ID = ?
        `,
    [email, name, city, userId]
  );

  return results;
};

const deleteUserById = async (userId) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Users 
        WHERE ID = ?`,
    [userId]
  );
};

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
