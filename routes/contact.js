var express = require('express');
var managers = require('../lib/managers')
var debug = require('debug')('my-aplication');
var transporter = require('../lib/mail')
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {

	var object = JSON.parse(req.body.data);
	var name = object.name;
	var email = object.email;
	var motive = object.motive;	

	if(managers.contact.validates_fields(name,email,motive))
	{		
		res.send(JSON.stringify('Todos los campos son obligatorios'));
	}
	if(! managers.contact.valid_email(email))
	{	
		res.send(JSON.stringify('El email no es valido'));	
	}

	// // setup e-mail data with unicode symbols
	// var mailOptions = {
	//     from: "'" + name + "<" + email + ">'", // sender address
	//     to: 'Lenin Girón, ing.leningir@gmail.com', // list of receivers
	//     subject: 'Contacto', // Subject line
	//     text: 'Hola', // plaintext body
	//     html: '<b>' + motive + '</b>' // html body
	// };

	// // send mail with defined transport object
	// /*transporter.sendMail(mailOptions, function(error, info){
	//     if(error){
	//         console.log(error);
	//     }else{
	//         console.log('Message sent: ' + info.response);
	//     }
	// });*/
	
  	res.send(JSON.stringify('<strong>Bien hecho!</strong> tu mensaje fue enviado exitosamente.'));

});


module.exports = router;
