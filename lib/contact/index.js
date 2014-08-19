var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//mongoose.connect('mongodb://localhost/leningiron');
mongoose.connect('mongodb://nodejitsu:6866d04b5c7cd39c6c079aae195fa133@troup.mongohq.com:10012/nodejitsudb3096970878');

var contactSchema = new Schema({
    name   : String
  , email  : String
  , motive   : String
});

var Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact;