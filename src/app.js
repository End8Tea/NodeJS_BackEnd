require("dotenv").config();
const express = require("express"); //import express

const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web.js");
const connection = require("./config/database.js");
const app = express(); //a pp express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;
const connectionSequelize = require("./config/connectDB.js");

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//config template engine
configViewEngine(app);
app.use("/", webRoutes);

//test connection
connectionSequelize();

// connection.query(
//     'select * from Users u',
//     function(err, results, fields) {
//       console.log(">>> results = ",results);
//     }
// );

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
