sap.ui.controller("pinkus.shell", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf pinkus.shell
*/
	onInit: function() {
		this.oViewBuffer = {};
		this.oViewBuffer.niClient = sap.ui.jsview("pinkus.client");
		
		var oShell = sap.ui.getCore().byId('pinkus.shell');	
			
		oShell.setContent(this.oViewBuffer.niClient);
	},
	
/**
 * 
 * @param oEvent
 * @memberOf pinkus.shell
 */	
	onworksetItemSelected: function(oEvent) {
		var oShell = sap.ui.getCore().byId('pinkus.shell');
		var key = oEvent.getParameter('key');
		oShell.setContent(this.oViewBuffer[key]);		
	},

	/**
	 *  
 	* @param oEvent
 	* @memberOf pinkus.shell
	 */
	onLogout: function(oEvent) {
		
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf oscar-web.shell
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf oscar-web.shell
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf oscar-web.shell
*/
//	onExit: function() {
//
//	}

});