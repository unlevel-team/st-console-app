"use strict";


/**
 * <pre>
 * Engines module for...
 * SomeThings library for Console App
 * </pre>
 * 
 * @namespace st.consoleApp.engines
 * @memberof st.consoleApp
 * 
 * 
 */

let _scsRequests = require('./scsRequests.js');


let _lib = {
		
	"scsRequests": _scsRequests,
	
	"_public": {
		"scsRequests": _scsRequests._public
	}
		
};


module.exports = _lib;