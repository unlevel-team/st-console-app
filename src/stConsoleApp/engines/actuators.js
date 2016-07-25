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
	
//	console.log("<~i~> st.consoleApp.engines.actuators.get_ActuatorsList");	// TODO REMOVE DEBUG LOG
//	console.log(_consoleApp);	// TODO REMOVE DEBUG LOG

	
	let promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.get_ActuatorsList({
			
			"scsClient": _consoleApp.scsClient,
			
			"_onComplete": function(data) {
				

			}
		
		}).then(function(value) {
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.actuators.get_ActuatorsList.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
		});
		
	});
	
	return promise;
}


/**
 * Get Actuator Info
 * 
 * @memberof st.consoleApp.engines.actuators
 * @public
 * 
 * @param {object} options - Options
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * @param {string} options.actuatorID - Actuator ID
 * 
 * @returns {Promise}
 * 
 */
function get_ActuatorInfo(options) {
	
	let _consoleApp = options.consoleApp;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	

	let promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.get_ActuatorInfo({
			
			"scsClient": _consoleApp.scsClient,
			"actuatorID": options.actuatorID,
			
			"_onComplete": function(data) {

			}
		
		}).then(function(value) {
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.actuators.get_ActuatorInfo.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
		});
		
	});
	
	return promise;
}


/**
 * Get Actuator Options
 * 
 * @memberof st.consoleApp.engines.actuators
 * @public
 * 
 * @param {object} options - Options
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * @param {string} options.actuatorID - Actuator ID
 * 
 * @returns {Promise}
 * 
 */
function get_ActuatorOptions(options) {
	
	let _consoleApp = options.consoleApp;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	
	
	let promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.get_ActuatorOptions({
			
			"scsClient": _consoleApp.scsClient,
			"actuatorID": options.actuatorID,
			
			"_onComplete": function(data) {
				
			}
		
		}).then(function(value) {
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.actuators.get_ActuatorOptions.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
		});
		
	});
	
	return promise;
}


/**
 * Start Actuator
 * 
 * @memberof st.consoleApp.engines.actuators
 * @public
 * 
 * @param {object} options - Options
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * @param {string} options.actuatorID - Actuator ID
 * 
 * @returns {Promise}
 * 
 */
function start_Actuator(options) {
	
	let _consoleApp = options.consoleApp;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	
	
	let promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.start_Actuator({
			
			"scsClient": _consoleApp.scsClient,
			"actuatorID": options.actuatorID,
			
			"_onComplete": function(data) {
				
			}
		
		}).then(function(value) {
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.actuators.start_Actuator.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
		});
		
	});
	
	return promise;
}


/**
 * Stop Actuator
 * 
 * @memberof st.consoleApp.engines.actuators
 * @public
 * 
 * @param {object} options - Options
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * @param {string} options.actuatorID - Actuator ID
 * 
 * @returns {Promise}
 * 
 */
function stop_Actuator(options) {
	
	let _consoleApp = options.consoleApp;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	
	
	let promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.stop_Actuator({
			
			"scsClient": _consoleApp.scsClient,
			"actuatorID": options.actuatorID,
			
			"_onComplete": function(data) {
				
			}
		
		}).then(function(value) {
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.actuators.stop_Actuator.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
		});
		
	});
	
	return promise;
}


let _lib = {
	"get_ActuatorsList": get_ActuatorsList,
	"get_ActuatorInfo": get_ActuatorInfo,
	"get_ActuatorOptions": get_ActuatorOptions,
	"start_Actuator": start_Actuator,
	"stop_Actuator": stop_Actuator,
	
	"_public": {
		"get_ActuatorsList": get_ActuatorsList,
		"get_ActuatorInfo": get_ActuatorInfo,
		"get_ActuatorOptions": get_ActuatorOptions,
		"start_Actuator": start_Actuator,
		"stop_Actuator": stop_Actuator
	}
		
};






module.exports = _lib;