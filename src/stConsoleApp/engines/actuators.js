"use strict";


/**
 * <pre>
 * Actuators
 * 
 * Engines module for...
 * SomeThings library for Console App
 * </pre>
 * 
 * @namespace st.consoleApp.engines.actuators
 * @memberof st.consoleApp.engines
 * 
 */



/**
 * Get Actuators List
 * 
 * @memberof st.consoleApp.engines.actuators
 * @public
 * 
 * @param {object} options - Options
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * 
 * @returns {Promise}
 * 
 */
function get_ActuatorsList(options) {
	
	let _consoleApp = options.consoleApp;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	
	console.log("<~i~> st.consoleApp.engines.actuators.get_ActuatorsList");	// TODO REMOVE DEBUG LOG
	console.log(_consoleApp);	// TODO REMOVE DEBUG LOG

	
	let promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.get_ActuatorsList({
			
			"scsClient": _consoleApp.scsClient,
			
			"_onComplete": function(data) {
				
				console.log("<~i~> st.consoleApp.engines.actuators.get_ActuatorsList._onComplete");	// TODO REMOVE DEBUG LOG
				console.log(data);	// TODO REMOVE DEBUG LOG

			}
		
		}).then(function(value) {
			
			console.log("<~i~> st.consoleApp.engines.actuators.get_ActuatorsList.then");	// TODO REMOVE DEBUG LOG
			console.log(value);	// TODO REMOVE DEBUG LOG
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.actuators.get_ActuatorsList.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
		});
		
	});
	
	return promise;
}


let _lib = {
	"get_ActuatorsList": get_ActuatorsList,
	
	"_public": {
		"get_ActuatorsList": get_ActuatorsList
	}
		
};


module.exports = _lib;