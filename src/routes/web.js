const {getHomepage, getABC, getCreatePage, getHuuThanh, getUpdatePage, postCreateUsers, postUpdateUsers} = require('../controllers/homeController.js');
const express = require('express');
const router = express.Router();
//khai bao route
router.get('/', getHomepage); 
  
router.get('/abc', getABC);

router.get('/create', getCreatePage);

router.get('/HuuThanh', getHuuThanh);

router.get('/update/:id', getUpdatePage);

router.post('/create-users', postCreateUsers);

router.post('/update-users', postUpdateUsers);

module.exports = router;