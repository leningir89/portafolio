var express = require('express');
var managers = require('../lib/managers/contact')
var debug = require('debug')('my-aplication');
var transporter = require('../lib/mail')
var contact = require('../lib/contact')
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {

	var object = JSON.parse(req.body.data);
	var name = object.name;
	var email = object.email;
	var motive = object.motive;	

	if(managers.validates_fields(name,email,motive))
	{		
		return res.send(JSON.stringify(managers.REQUIRED_FIELDS));
	}
	if(! managers.valid_email(email))
	{	
		return res.send(JSON.stringify(managers.INVALID_MAIL));	
	}

	//Guardamos en contacto
	var Contact = new contact({ name: name , email:email, motive:motive });	
	Contact.save(function (err, Contact) {
	  	if (err){
	  		return res.send(err);
	  	}

	  	//Enviamos el mail	  	
	  	// setup e-mail data with unicode symbols
		var mailOptions = {
		    from: "'" + name + "<" + email + ">'", // sender address
		    to: 'Lenin Girón, ing.leningir@gmail.com', // list of receivers
		    subject: 'Contacto', // Subject line
		    text: 'Hola', // plaintext body
		    html: '<b>' + motive + '</b>' // html body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(err, info){
		    if(err){
		        return res.send(err);
		    }else{
		        console.log('Message sent: ' + info.response);
		        res.send(JSON.stringify(''));
		    }
		});

	})
	 
});


module.exports = router;
