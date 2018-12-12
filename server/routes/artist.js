'use strict'

var express = require('express');
var ArtistController = require('../controllers/artist');
var api = express.Router();
var md_auth = require('../middleware/authentication');
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/artists'})

api.get('/artist/:id', md_auth.authentication, ArtistController.getArtist);
api.post('/saveArtist', md_auth.authentication, ArtistController.saveArtist);
api.get('/allArtists/:page?', md_auth.authentication, ArtistController.getAllArtists);
api.put('/artist/:id', md_auth.authentication, ArtistController.updateArtist);
api.delete('/artist/:id', md_auth.authentication, ArtistController.deleteArtist);
api.post('/upload-image-artist/:id', [md_auth.authentication, md_upload], ArtistController.uploadImage);
api.get('/get-image-artist/:imageFile', ArtistController.getImageFile);

module.exports = api;

