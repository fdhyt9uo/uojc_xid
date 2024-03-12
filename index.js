const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('TMkgxSVKCq', uuidlib.v4());
	}

module.exports = generateId
