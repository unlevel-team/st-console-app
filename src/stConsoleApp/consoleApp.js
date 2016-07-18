"use strict";

/**
 * Console App main class
 * 
 * SomeThings library for Console App
 * 
 * 
 * 
 */



/**
 * Configuration for the Console Application
 * 
 * @typedef {Object} ConsoleApp_Config
 * @memberof st.consoleApp
 * @type Object
 * @protected
 * 
 * @property {object} dom_Document - Document for DOM
 * @property {object} dom_Event - Event for DOM
 * @property {object} st_forBrowser - library ST for Browser
 * @property {object} scs - Server Control Service
 * @property {string} scs.netLocation - Netlocation
 * @property {Number} scs.controlPort - Control port
 */





/**
 * ConsoleApp
 * 
 * @class
 * @memberof st.consoleApp
 * @protected
 * 
 * @property {st.consoleApp.ConsoleApp_Config} config - Configuration
 * @property {st.forbrowser.services.SCS_Client} scsClient - SCS Client
 * @property {object} domEvents - Object for emit DOM events
 * @property {object} nodes - Nodes data
 * @property {object} engines - Engines data
 * @property {object} network - Network data
 * 
 */
class ConsoleApp {
	
	/**
	 * @constructs ConsoleApp
	 * 
	 * @param {object} options - options
	 * @param {st.consoleApp.ConsoleApp_Config} options.config - Configuration
	 * 
	 * @throws Exception
	 */
	constructor(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		let consoleApp = this;
		consoleApp.config = null;
		consoleApp.scsClient = null;
		consoleApp.domEvents = null;
		
		if (options.config === undefined) {
			throw "config option is required";
		}
		consoleApp.config = options.config;
		
		try {
			consoleApp._init_SCS_Client();
		} catch (e) {
			// TODO: handle exception
			throw "Cannot initialize SCS Client. " + e;
		}
		
		try {
			consoleApp._init_Nodes();
		} catch (e) {
			// TODO: handle exception
			throw "Cannot initialize Nodes. " + e;
		}
		
		
		try {
			consoleApp._init_Engines();
		} catch (e) {
			// TODO: handle exception
			throw "Cannot initialize Engines. " + e;
		}
		
		try {
			consoleApp._init_Network();
		} catch (e) {
			// TODO: handle exception
			throw "Cannot initialize Network. " + e;
		}
		
		try {
			consoleApp._init_domEvents();
		} catch (e) {
			// TODO: handle exception
			throw "Cannot initialize DOM events. " + e;
		}
		
	}
	
	
	/**
	 * Initialize SCS Client
	 * 
	 * @private
	 * 
	 */
	_init_SCS_Client() {
		
		let _consoleApp = this;
		let _config = _consoleApp.config;
		let _st_services = _config.st_forBrowser.services;
		
//		console.log("<~i~> ConsoleApp._init_SCS_Client");	// TODO REMOVE DEBUG LOG
//		console.log(_config);	// TODO REMOVE DEBUG LOG
		
		_consoleApp.scsClient = _st_services.get_SCS_Client({
			"scs": {
				"netLocation": _config.scs.netLocation,
				"controlPort": _config.scs.controlPort
			}
		});
		
	}
	
	
	/**
	 * Initialize nodes
	 * 
	 * @private
	 */
	_init_Nodes() {
		
		let consoleApp = this;
		let _config = consoleApp.config;
		let _ST_forBrowser = _config.st_forBrowser;

		consoleApp.nodes = {};
		consoleApp.nodes.SCS_Requests = _ST_forBrowser.nodes.get_SCS_Requests();
	}
	
	
	/**
	 * Initialize engines
	 * 
	 * @private
	 */
	_init_Engines() {
		
		let consoleApp = this;
		let _config = consoleApp.config;
		let _ST_forBrowser = _config.st_forBrowser;

		consoleApp.engines = {};
		consoleApp.engines.SCS_Requests = _ST_forBrowser.engines.get_SCS_Requests();
		
	}
	

	/**
	 * Initialize network
	 * 
	 * @private
	 */
	_init_Network() {
		
		let consoleApp = this;
		let _config = consoleApp.config;
		let _ST_forBrowser = _config.st_forBrowser;

		consoleApp.network = {};
		consoleApp.network.SCS_Requests = _ST_forBrowser.network.get_SCS_Requests();
		
	}
	
	
	/**
	 * Initialize DOM events
	 * 
	 * @private
	 */
	_init_domEvents() {
		
		let _consoleApp = this;
		let _config = _consoleApp.config;
		let _document = _config.dom_Document;

		_consoleApp.domEvents = _document.createElement("div");
	}
	
	
	/**
	 * Change configuration
	 * 
	 * @param {object} options
	 * 
	 * @fires configChanged
	 * 
	 * @throws {Exception}
	 */
	changeConfig(options) {
		
		if (options === undefined ||
				options === null) {
			options = {};
		}
		
		let _consoleApp = this;
		if (options.consoleApp !== undefined) {
			_consoleApp = options.consoleApp;
		}
		
		let _config = _consoleApp.config;
		let DOM_Event = _config.dom_Event;
		
		
		console.log("<~i~> ConsoleApp.changeConfig");	// TODO REMOVE DEBUG LOG
		console.log(options);	// TODO REMOVE DEBUG LOG
		
		
		if (options.scs !== undefined) {
			_config.scs.netLocation = options.scs.netLocation;
			_config.scs.controlPort = options.scs.controlPort;
		}
		
		try {
			_consoleApp._init_SCS_Client();
		} catch (e) {
			// TODO: handle exception
			throw "Error in SCS Client. " + e;
		}
		
		// emit event configChanged.
		let event = new DOM_Event('configChanged', {"detail": 
			{"consoleApp": _consoleApp}
		});
		_consoleApp.domEvents.dispatchEvent(event);
		
	}
}


		
/**
 * Console application instance
 * 
 * @type {st.consoleApp.ConsoleApp}
 * @memberof st.consoleApp
 * @protected
 */
let consoleApp_Instance= null;
	 



/**
 * Returns the console application instance
 * 
 * @function
 * @memberof st.consoleApp
 * 
 * @param {object} options - Options object
 * @param {st.consoleApp.ConsoleApp_Config} options.config - Configuration
 * 
 * @returns {st.consoleApp.ConsoleApp}
 * 
 * @throws Exception
 * 
 */
function get_ConsoleApp (options) {

	if (consoleApp_Instance === null) {
		try {
			consoleApp_Instance = new ConsoleApp(options);
		} catch (e) {
			// TODO: handle exception
			throw "Cannot create ConsoleApp. " + e;
		}
	}

	return consoleApp_Instance;
}





let _lib = {
	"ConsoleApp": ConsoleApp,
	"get_ConsoleApp": get_ConsoleApp,
	
	"_public": {
		"get_ConsoleApp": get_ConsoleApp,
	}

};

module.exports = _lib;