sap.ui.jsview("pinkus.shell", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf pinkus.shell
	*/ 
	getControllerName : function() {
		return "pinkus.shell";
	},

	/** Is initially called once after the Controller has been instantiated. 
    * It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf pinkus.shell
	*/ 
	createContent : function(oController) {
		var oShell = new sap.ui.ux3.Shell('pinkus.shell', {
			appIcon : "http://www.sap.com/global/images/SAPLogo.gif",
			appTitle: "pinkus - Testing for a looback-App and SAPUI5/OpenUI5 via OData",
			worksetItems: [
			   new sap.ui.ux3.NavigationItem("niClient",{key:"niClient",text:"Kunden"})
			   ],
			worksetItemSelected: [oController.onworksetItemSelected, oController]
			});
		
		oShell.sOrigin = window.location.protocol + "//" + window.location.hostname
		+ (window.location.port ? ":"
		+ window.location.port : "");
	
		var myOdataServiceUrl = oShell.sOrigin
			+ "/odata";
	
		oShell.odataModel = new sap.ui.model.odata.ODataModel(myOdataServiceUrl, true);	
		
		return oShell;

	}

});