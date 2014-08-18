var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/leningiron');

var contactSchema = new Schema({
    name   : String
  , email  : String
  , motive   : String
});

var Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact;