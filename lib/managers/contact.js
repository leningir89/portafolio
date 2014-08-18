var base = require('./base');

function validates_fields(name, email, motive) {
	if(base.empty(name))
	{
		return true;
	}
	if(base.empty(email))
	{
		return true;
	}
	if(base.empty(motive))
	{
		return true;
	}
	return false;
}
function valid_email(email) {
	if (/(\w+)(\.?)(\w*)(\@{1})(\w+)(\.?)(\w*)(\.{1})(\w{2,3})/.test(email))
    {
    	return true;
  	} 
  	else 
  	{
   		return false;
  	}
}

module.exports = {
	validates_fields : validates_fields,
	valid_email : valid_email,
	REQUIRED_FIELDS: base.REQUIRED_FIELDS,
	INVALID_MAIL : base.INVALID_MAIL
}