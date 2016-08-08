"use strict";


/**
 * <pre>
 * SCS Requests for engines
 * 
 * Engines module for...
 * SomeThings library for Console App
 * </pre>
 * 
 * @namespace st.consoleApp.engines.scsRequests
 * @memberof st.consoleApp.engines
 * 
 */



/**
 * Get Engines List
 * 
 * @memberof st.consoleApp.engines.scsRequests
 * @public
 * 
 * @param {object} options - Options
 * @param {string} options.ngntype - Engine type. ('sensors', 'actuators')
 * 
 * @param {string} options.consoleApp - Console App reference
 * 
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * 
 * @returns {Promise}
 * 
 */
function get_EnginesList(options) {
	
	let _consoleApp = options.consoleApp;
	let _scsClient = _consoleApp.scsClient;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	
	let _ngntype = options.ngntype;
	
	console.log("<~i~> st.consoleApp.engines.scsRequests.get_EnginesList");	// TODO REMOVE DEBUG LOG

	
	let _promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.get_EnginesList({
			
			"scsClient": _scsClient,
			"ngntype": _ngntype,

			
			"_onComplete": function(data) {
				
				console.log("<~i~> st.consoleApp.engines.scsRequests.get_EnginesList._onComplete");	// TODO REMOVE DEBUG LOG
				console.log(data);	// TODO REMOVE DEBUG LOG

			}
		
		}).then(function(value) {
			
			console.log("<~i~> st.consoleApp.engines.scsRequests.get_EnginesList.then");	// TODO REMOVE DEBUG LOG
			console.log(value);	// TODO REMOVE DEBUG LOG
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.scsRequests.get_EnginesList.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
		});
		
	});
	
	return _promise;
}


/**
 * Get Engine information
 * 
 * @memberof st.consoleApp.engines.scsRequests
 * @public
 * 
 * @param {object} options - Options
 * @param {string} options.ngntype - Engine type. ('sensors', 'actuators')
 * @param {string} options.ngnID - Engine ID
 * 
 * @param {string} options.consoleApp - Console App reference
 * 
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * 
 * @returns {Promise}
 * 
 */
function get_EngineInfo(options) {
	
	let _consoleApp = options.consoleApp;
	let _scsClient = _consoleApp.scsClient;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	
	let _ngntype = options.ngntype;
	let _ngnID = options.ngnID;

	
	console.log("<~i~> st.consoleApp.engines.scsRequests.get_EngineInfo");	// TODO REMOVE DEBUG LOG

	
	let _promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.get_EngineInfo({
			
			"scsClient": _scsClient,
			"ngntype": _ngntype,
			"ngnID": _ngnID,

			
			"_onComplete": function(data) {
				
				console.log("<~i~> st.consoleApp.engines.scsRequests.get_EngineInfo._onComplete");	// TODO REMOVE DEBUG LOG
				console.log(data);	// TODO REMOVE DEBUG LOG

			}
		
		}).then(function(value) {
			
			console.log("<~i~> st.consoleApp.engines.scsRequests.get_EngineInfo.then");	// TODO REMOVE DEBUG LOG
			console.log(value);	// TODO REMOVE DEBUG LOG
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.scsRequests.get_EngineInfo.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
		});
		
	});
	
	return _promise;
}


/**
 * Get Engine options
 * 
 * @memberof st.consoleApp.engines.scsRequests
 * @public
 * 
 * @param {object} options - Options
 * @param {string} options.ngntype - Engine type. ('sensors', 'actuators')
 * @param {string} options.ngnID - Engine ID
 * 
 * @param {string} options.consoleApp - Console App reference
 * 
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * 
 * @returns {Promise}
 * 
 */
function get_EngineOptions(options) {
	
	let _consoleApp = options.consoleApp;
	let _scsClient = _consoleApp.scsClient;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	
	let _ngntype = options.ngntype;
	let _ngnID = options.ngnID;

	
	console.log("<~i~> st.consoleApp.engines.scsRequests.get_EngineOptions");	// TODO REMOVE DEBUG LOG

	
	let _promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.get_EngineOptions({
			
			"scsClient": _scsClient,
			"ngntype": _ngntype,
			"ngnID": _ngnID,

			
			"_onComplete": function(data) {
				
				console.log("<~i~> st.consoleApp.engines.scsRequests.get_EngineOptions._onComplete");	// TODO REMOVE DEBUG LOG
				console.log(data);	// TODO REMOVE DEBUG LOG

			}
		
		}).then(function(value) {
			
			console.log("<~i~> st.consoleApp.engines.scsRequests.get_EngineOptions.then");	// TODO REMOVE DEBUG LOG
			console.log(value);	// TODO REMOVE DEBUG LOG
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.scsRequests.get_EngineInfo.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
		});
		
	});
	
	return _promise;
}


/**
 * Set Engine options
 * 
 * @memberof st.consoleApp.engines.scsRequests
 * @public
 * 
 * @param {object} options - Options
 * @param {string} options.ngntype - Engine type. ('sensors', 'actuators')
 * @param {string} options.ngnID - Engine ID
 * @param {object} options.ngnOptions - engine options
 * 
 * @param {string} options.consoleApp - Console App reference
 * 
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * 
 * @returns {Promise}
 * 
 */
function set_EngineOptions(options) {
	
	let _consoleApp = options.consoleApp;
	let _scsClient = _consoleApp.scsClient;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	
	let _ngntype = options.ngntype;
	let _ngnID = options.ngnID;
	let _ngnOptions = options.ngnOptions;

	
	console.log("<~i~> st.consoleApp.engines.scsRequests.set_EngineOptions");	// TODO REMOVE DEBUG LOG

	
	let _promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.set_EngineOptions({
			
			"scsClient": _scsClient,
			"ngntype": _ngntype,
			"ngnID": _ngnID,
			"ngnOptions": _ngnOptions,
			
			"_onComplete": function(data) {
				
				console.log("<~i~> st.consoleApp.engines.scsRequests.set_EngineOptions._onComplete");	// TODO REMOVE DEBUG LOG
				console.log(data);	// TODO REMOVE DEBUG LOG

			}
		
		}).then(function(value) {
			
			console.log("<~i~> st.consoleApp.engines.scsRequests.set_EngineOptions.then");	// TODO REMOVE DEBUG LOG
			console.log(value);	// TODO REMOVE DEBUG LOG
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.scsRequests.set_EngineOptions.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
		});
		
	});
	
	return _promise;
}



/**
 * Control engine
 * 
 * @memberof st.consoleApp.engines.scsRequests
 * @public
 * 
 * @param {object} options - Options
 * @param {string} options.ngntype - Engine type. ('sensors', 'actuators')
 * @param {string} options.ngnID - Engine ID
 * @param {object} options.ctrlCommand - Control command ('start' or 'stop')
 * 
 * @param {string} options.consoleApp - Console App reference
 * 
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * 
 * @returns {Promise}
 * 
 */
function control_Engine(options) {
	
	let _consoleApp = options.consoleApp;
	let _scsClient = _consoleApp.scsClient;
	let _SCSRequestsForEngines = _consoleApp.engines.SCS_Requests;
	
	let _ngntype = options.ngntype;
	let _ngnID = options.ngnID;
	let _ctrlCommand = options.ctrlCommand;

	
	console.log("<~i~> st.consoleApp.engines.scsRequests.control_Engine");	// TODO REMOVE DEBUG LOG

	
	let _promise = new Promise(function(resolve, reject) {
		
		_SCSRequestsForEngines.control_Engine({
			
			"scsClient": _scsClient,
			"ngntype": _ngntype,
			"ngnID": _ngnID,
			"ctrlCommand": _ctrlCommand,
			
			"_onComplete": function(data) {
				
				console.log("<~i~> st.consoleApp.engines.scsRequests.control_Engine._onComplete");	// TODO REMOVE DEBUG LOG
				console.log(data);	// TODO REMOVE DEBUG LOG

			}
		
		}).then(function(value) {
			
			console.log("<~i~> st.consoleApp.engines.scsRequests.control_Engine.then");	// TODO REMOVE DEBUG LOG
			console.log(value);	// TODO REMOVE DEBUG LOG
			
			resolve(value);
			
		}, function(reason) {
			
			console.log("<~i~> st.consoleApp.engines.scsRequests.control_Engine.error");	// TODO REMOVE DEBUG LOG
			console.log(reason);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
		});
		
	});
	
	return _promise;
}




let _lib = {
	"get_EnginesList": get_EnginesList,
	"get_EngineInfo": get_EngineInfo,
	"get_EngineOptions": get_EngineOptions,
	"set_EngineOptions": set_EngineOptions,
	"control_Engine": control_Engine,
	
	"_public": {
		"get_EnginesList": get_EnginesList,
		"get_EngineInfo": get_EngineInfo,
		"get_EngineOptions": get_EngineOptions,
		"set_EngineOptions": set_EngineOptions,
		"control_Engine": control_Engine

	}
		
};


module.exports = _lib;
