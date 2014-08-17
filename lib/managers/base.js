function isNull(value){
	if (value === null) {
		return true;
	}
	return false;
}
function empty(value){
	if (value === "") {
		return true;
	}
	return false;
}
function undefined(value){
	if (typeof(value) == "undefined") {
		return true;
	}
	return false;
}

module.exports = {
	undefined : undefined,
	isNull : isNull,
	empty : empty
}