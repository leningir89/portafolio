var express = require('express');
var router = express.Router();
var debug = require('debug')('my-aplication');
var transporter = require('../lib/mail')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});


router.post('/mail', function(req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var motive = req.body.motive;
	debug("name");	
	
	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: "'" + name + "<" + email + ">'", // sender address
	    to: 'Lenin Girón, ing.leningir@gmail.com', // list of receivers
	    subject: 'Contacto', // Subject line
	    text: 'Hola', // plaintext body
	    html: '<b>' + motive + '</b>' // html body
	};

	// send mail with defined transport object
	/*transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	    }else{
	        console.log('Message sent: ' + info.response);
	    }
	});*/
	
  	res.render('index',{mensaje: "Correcto"});
});


module.exports = router;
