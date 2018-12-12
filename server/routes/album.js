'use strict'

var express = require('express');
var AlbumController = require('../controllers/album');
var api = express.Router();
var md_auth = require('../middleware/authentication');
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/albums'});

api.get('/album/:id', md_auth.authentication, AlbumController.getAlbum);
api.post('/saveAlbum', md_auth.authentication, AlbumController.saveAlbum);
api.get('/getAllAlbums/:artist?', md_auth.authentication, AlbumController.getAllAlbums);
api.put('/updateAlbum/:id', md_auth.authentication, AlbumController.updateAlbum);
api.delete('/album/:id', md_auth.authentication, AlbumController.deleteAlbum);
api.post('/upload-image-album/:id', [md_auth.authentication, md_upload], AlbumController.uploadImage);
api.get('/get-image-album/:imageFile', AlbumController.getImageFile);

module.exports = api;