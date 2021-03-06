var path = require('path');
var express = require('express');
var router = require('express').Router();

//Allows acces to files in the /assets folder as if they were in the webroot
//Eg: /assets/app.js is accessed as /app.js
router.use(express.static(__dirname+'/../assets'));

//Serve templates
//Access templates folder content directly from the root not /templates/foo.html
router.use(express.static(__dirname+'/../templates'));

router.get('/', function (request, response) {
	var abs_path = path.resolve(__dirname+'/../layouts/app.html');
	response.sendFile(abs_path);
})

module.exports = router;