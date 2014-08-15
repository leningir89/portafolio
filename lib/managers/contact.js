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

module.exports = {
	validates_fields : validates_fields
}