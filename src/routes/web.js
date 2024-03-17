const {getHomepage, getABC, getCreatePage, getHuuThanh, getUpdatePage, postCreateUsers} = require('../controllers/homeController.js');
const express = require('express');
const router = express.Router();
//khai bao route
router.get('/', getHomepage); 
  
router.get('/abc', getABC);

router.get('/create', getCreatePage);

router.get('/HuuThanh', getHuuThanh);

router.get('/update', getUpdatePage);

router.post('/create-users', postCreateUsers);


module.exports = router;