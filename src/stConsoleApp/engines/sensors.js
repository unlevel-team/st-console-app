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


/**
 * Get Sensor Info
 * 
 * @memberof st.consoleApp.engines.sensors
 * @public
 * 
 * @param {object} options - Options
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * @param {string} options.sensorID - Sensor ID
 * 
 * @returns {Promise}
 * 
 */
function get_SensorInfo(options) {
	
	let _consoleApp = options.consoleApp;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	
//	console.log("<~i~> st.consoleApp.engines.sensors.get_SensorInfo");	// TODO REMOVE DEBUG LOG
//	console.log(_consoleApp);	// TODO REMOVE DEBUG LOG
	
	
	let promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.get_SensorInfo({
			
			"scsClient": _consoleApp.scsClient,
			"sensorID": options.sensorID,
			
			"_onComplete": function(data) {
				

			}
		
		}).then(function(value) {
			
			
			resolve(value);
			
		}, function(reason) {
			console.log("<~i~> st.consoleApp.engines.sensors.get_SensorInfo.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			reject(Error("It broke"));
		});
		
	});
	
	return promise;
}


/**
 * Get Sensor Options
 * 
 * @memberof st.consoleApp.engines.sensors
 * @public
 * 
 * @param {object} options - Options
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * @param {string} options.sensorID - Sensor ID
 * 
 * @returns {Promise}
 * 
 */
function get_SensorOptions(options) {
	
	let _consoleApp = options.consoleApp;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	
	
	let promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.get_SensorOptions({
			
			"scsClient": _consoleApp.scsClient,
			"sensorID": options.sensorID,
			
			"_onComplete": function(data) {
				

			}
		
		}).then(function(value) {
			
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.sensors.get_SensorOptions.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			reject(Error("It broke"));
		});
		
	});
	
	return promise;
}


/**
 * Set Sensor Options
 * 
 * @memberof st.consoleApp.engines.sensors
 * @public
 * 
 * @param {object} options - Options
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * @param {string} options.sensorID - Sensor ID
 * @param {object} options.sensorOptions - Sensor options
 * 
 * @returns {Promise}
 * 
 */
function set_SensorOptions(options) {
	
	let _consoleApp = options.consoleApp;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	
	
	let promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.set_SensorOptions({
			
			"scsClient": _consoleApp.scsClient,
			"sensorID": options.sensorID,
			"sensorOptions": options.sensorOptions,

			
			"_onComplete": function(data) {
				

			}
		
		}).then(function(value) {
			
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.sensors.set_SensorOptions.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			reject(Error("It broke"));
		});
		
	});
	
	return promise;
}


/**
 * Start Sensor
 * 
 * @memberof st.consoleApp.engines.sensors
 * @public
 * 
 * @param {object} options - Options
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * @param {string} options.sensorID - Sensor ID
 * 
 * @returns {Promise}
 * 
 */
function start_Sensor(options) {
	
	let _consoleApp = options.consoleApp;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	
	
	let promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.start_Sensor({
			
			"scsClient": _consoleApp.scsClient,
			"sensorID": options.sensorID,
			
			"_onComplete": function(data) {
				

			}
		
		}).then(function(value) {
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.sensors.start_Sensor.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
		});
		
	});
	
	return promise;
}


/**
 * Stop Sensor
 * 
 * @memberof st.consoleApp.engines.sensors
 * @public
 * 
 * @param {object} options - Options
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * @param {string} options.sensorID - Sensor ID
 * 
 * @returns {Promise}
 * 
 */
function stop_Sensor(options) {
	
	let _consoleApp = options.consoleApp;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	
	
	let promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.stop_Sensor({
			
			"scsClient": _consoleApp.scsClient,
			"sensorID": options.sensorID,
			
			"_onComplete": function(data) {
				
			}
		
		}).then(function(value) {
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.sensors.stop_Sensor.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
		});
		
	});
	
	return promise;
}



let _lib = {
	"get_SensorsList": get_SensorsList,
	"get_SensorInfo": get_SensorInfo,
	"get_SensorOptions": get_SensorOptions,
	"set_SensorOptions": set_SensorOptions,
	"start_Sensor": start_Sensor,
	"stop_Sensor": stop_Sensor,
	
	"_public": {
		"get_SensorsList": get_SensorsList,
		"get_SensorInfo": get_SensorInfo,
		"get_SensorOptions": get_SensorOptions,
		"set_SensorOptions": set_SensorOptions,
		"start_Sensor": start_Sensor,
		"stop_Sensor": stop_Sensor
	}
		
};


module.exports = _lib;
