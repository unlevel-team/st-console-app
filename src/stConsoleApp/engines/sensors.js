"use strict";


/**
 * <pre>
 * Sensors
 * 
 * Engines module for...
 * SomeThings library for Console App
 * </pre>
 * 
 * @namespace st.consoleApp.engines.sensors
 * @memberof st.consoleApp.engines
 * 
 */


/**
 * Get Sensors List
 * 
 * @memberof st.consoleApp.engines.sensors
 * @public
 * 
 * @param {object} options - Options
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * 
 * @returns {Promise}
 * 
 */
function get_SensorsList(options) {
	
	let _consoleApp = options.consoleApp;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	
	console.log("<~i~> st.consoleApp.engines.sensors.get_SensorsList");	// TODO REMOVE DEBUG LOG
	console.log(_consoleApp);	// TODO REMOVE DEBUG LOG

	
	let promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.get_SensorsList({
			
			"scsClient": _consoleApp.scsClient,
			
			"_onComplete": function(data) {
				
				console.log("<~i~> st.consoleApp.engines.sensors.get_SensorsList._onComplete");	// TODO REMOVE DEBUG LOG
				console.log(data);	// TODO REMOVE DEBUG LOG

			}
		
		}).then(function(value) {
			
			console.log("<~i~> st.consoleApp.engines.sensors.get_SensorsList.then");	// TODO REMOVE DEBUG LOG
			console.log(value);	// TODO REMOVE DEBUG LOG
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.sensors.get_SensorsList.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
		});
		
	});
	
	return promise;
}






let _lib = {
	"get_SensorsList": get_SensorsList,
	
	"_public": {
		"get_SensorsList": get_SensorsList
	}
		
};


module.exports = _lib;
