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

const postCreateUsers = (req, res) =>{
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    

    connection.query (
        `INSERT INTO Users (email, name, city)
        VALUES(?, ?, ?)`,
        [email, name, city],
        function(err, results){
            console.log(results);
            res.send('Created user succeed !');
        }
    );

}

module.exports = {
    getHomepage, getABC, getHuuThanh, postCreateUsers
}