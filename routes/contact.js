var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {

	var object = JSON.parse(req.body.data);
	var name = object.name;
	var email = object.email;
	var motive = object.motive;
	console.log(email);
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
	
  	res.send(req.body.data);

});


module.exports = router;
