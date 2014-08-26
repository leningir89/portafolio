var express = require('express');
var validator = require('validator');
var managers = require('../lib/managers/contact')
var debug = require('debug')('my-aplication');
var mail = require('../lib/mail')
var contact = require('../lib/contact')
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {

	var object = JSON.parse(req.body.data);
	var name = validator.escape(object.name);
	var email = object.email;
	var motive = validator.escape(object.motive);	

	if(managers.validates_fields(name,email,motive))
	{		
		return res.send(JSON.stringify(managers.REQUIRED_FIELDS));
	}
	if(! validator.isEmail(email))
	{	
		return res.send(JSON.stringify(managers.INVALID_MAIL));	
	}
	
	var Contact = new contact({ name: name , email:email, motive:motive });	
	Contact.save(function (err, Contact)  // Guardamos el contacto
	{
	  	if (err){
	  		return res.send(err);
	  	}
		  
		var mailOptions = mail.mail_options(name,email,motive);
		mail.transporter.sendMail(mailOptions, function(err, info) 	// Enviamos el mail
		{
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
