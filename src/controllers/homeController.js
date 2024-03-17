const connection = require('../config/database.js');
const {getAllUsers} = require('../services/CRUDService.js');
const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', {listUsers: results});

    
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

const getUpdatePage = (req, res) => {
    res.render('edit.ejs');
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
    res.render('createNew.ejs');
}

module.exports = {
    getHomepage, getABC, getHuuThanh, postCreateUsers, getCreatePage, getUpdatePage
}