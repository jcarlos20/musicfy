'use strict'

var express = require('express');
var UserController = require('../controllers/user');
var md_auth = require('../middleware/authentication');
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/users'});
var api = express.Router();


api.get('/probando-controllador', md_auth.authentication, UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.loginUser);
api.put('/update-user/:id', md_auth.authentication, UserController.updateUser);
api.post('/upload-image-user/:id', [md_auth.authentication, md_upload], UserController.uploadImage);
api.get('/get-image-user/:imageFile', UserController.getImageFile);

module.exports = api;