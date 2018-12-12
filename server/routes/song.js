'use strict'

var express = require('express');
var SongController = require('../controllers/song');
var api = express.Router();
var md_auth = require('../middleware/authentication');
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir: './uploads/songs'});

api.get('/song/:id', md_auth.authentication, SongController.getSong);
api.post('/saveSong', md_auth.authentication, SongController.saveSong);
api.get('/getAllSongs/:album?', md_auth.authentication, SongController.getAllSongs);
api.put('/updateSong/:id', md_auth.authentication, SongController.updateSong);
api.delete('/deleteSong/:id', md_auth.authentication, SongController.deleteSong);
api.post('/upload-file-song/:id', [md_auth.authentication, md_upload], SongController.uploadFile);
api.get('/get-song-album/:songFile', SongController.getSongFile);

module.exports = api;