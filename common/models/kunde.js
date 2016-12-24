'use strict';

module.exports = function(Kunde) {
	Kunde.me = function(cb) {

	    var response;

	    response = Kunde.name;

	    cb(null, response);
	  };
//	  Kunde.remoteMethod(
//	    'status',
//	    {
//	      http: {path: '/me', verb: 'get'},
//	      returns: {arg: 'me', type: 'string'}
//	    }
//	  );
};
