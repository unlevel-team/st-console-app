"use strict";



/**
 * <pre>
 * Nodes module for...
 * SomeThings library for Console App
 * </pre>
 * 
 * @namespace st.consoleApp.nodes
 * @memberof st.consoleApp
 * 
 * 
 */

		

/**
 * Get Node List
 * 
 * @memberof st.consoleApp.nodes
 * @public
 * 
 * @param {object} options - Options
 * @param {st.consoleApp.ConsoleApp} options.consoleApp - Console App reference
 * 
 * @returns {Promise}
 * 
 */
function get_NodesList(options) {
	
	let _consoleApp = options.consoleApp;
	let _SCSRequestsForNodes = _consoleApp.nodes.SCS_Requests;
	
	let promise = new Promise(function(resolve, reject) {
		
		
		_SCSRequestsForNodes.get_NodesList({
			
			"scsClient": _consoleApp.scsClient,
			
			"_onComplete": function(data) {

			}
			
			
		}).then(function(data){
			
			resolve(data);
			
		},function (error){
			
			console.log("<~i~> st.consoleApp.nodes.get_NodeList.error");	// TODO REMOVE DEBUG LOG
			console.log(error);	// TODO REMOVE DEBUG LOG
			
			reject(Error("It broke"));
			
		});
		
		
		
		
	});
	
	
	return promise;
	
}




let _lib = {
	"get_NodesList": get_NodesList,
	
	"_public": {
		"get_NodesList": get_NodesList
	}
		
};


module.exports = _lib;
