const {getHomepage, getABC, getHuuThanh, postCreateUsers} = require('../controllers/homeController.js');
const express = require('express');
const router = express.Router();
//khai bao route
router.get('/', getHomepage); 
  
router.get('/abc', getABC);


router.get('/HuuThanh', getHuuThanh);

router.post('/create-users', postCreateUsers);


module.exports = router;