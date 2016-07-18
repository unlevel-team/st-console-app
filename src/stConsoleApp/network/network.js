"use strict";



/**
 * <pre>
 * Network module for...
 * SomeThings library for Console App
 * </pre>
 * 
 * @namespace st.consoleApp.network
 * @memberof st.consoleApp
 * 
 * 
 */



/**
 * Get Data channel List
 * 
 * @memberof st.consoleApp.network
 * @public
 * 
 * @param {object} options - Options
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * @param {string} options.netContext - Should be "server" or "nodes"
 * 
 *  
 * @returns {Promise}
 * 
 */
function get_DCList(options) {
	
	let _consoleApp = options.consoleApp;
	let _SCSRequestsForNet = _consoleApp.network.SCS_Requests;
	let _netContext = options.netContext;
	
	
	let promise = new Promise(function(resolve, reject) {
		
		
		_SCSRequestsForNet.get_DCList({
			
			"scsClient": _consoleApp.scsClient,
			
			"netContext": _netContext,
			
			"_onComplete": function(data) {
				
				console.log("<~i~> st.consoleApp.network.get_DCList._onComplete");	// TODO REMOVE DEBUG LOG
				console.log(data);	// TODO REMOVE DEBUG LOG

			}
			
			
		}).then(function(data){
			
			console.log("<~i~> st.consoleApp.network.get_DCList.then");	// TODO REMOVE DEBUG LOG
			console.log(data);	// TODO REMOVE DEBUG LOG
			
			resolve(data);
			
		},function (error){
			
			console.log("<~i~> st.consoleApp.network.get_DCList.error");	// TODO REMOVE DEBUG LOG
			console.log(error);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
			
		});
		
		
		
		
	});
	
	
	return promise;
	
}




let _lib = {
	"get_DCList": get_DCList,
	
	"_public": {
		"get_DCList": get_DCList
	}
		
};


module.exports = _lib;