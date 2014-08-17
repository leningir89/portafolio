var mongoose = require('mongoose');
var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://localhost/leningiron');

var contactSchema = new Schema({
    id     : ObjectId
  , name   : String
  , email  : String
  , motive   : Date
});