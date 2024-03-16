const connection = require('../config/database.js');

const getHomepage = (req, res) => {

    return res.render('home.ejs');

    
}

const getABC = (req, res) => {
    res.send('Check ABC');
}

const getHuuThanh = (req, res) => {
    res.render('sample.ejs');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

const postCreateUsers = async (req, res) =>{
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log('email = ', email, ' name = ', name, ' city = ', city);
    

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
        `INSERT INTO Users (email, name, city) VALUES(?, ?, ?)`, [email, name, city]
    );
    console.log('>>>Check results', results);
    res.send("Suceed !");
}

module.exports = {
    getHomepage, getABC, getHuuThanh, postCreateUsers, getCreatePage
}