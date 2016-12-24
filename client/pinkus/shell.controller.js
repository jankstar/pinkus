sap.ui.controller("pinkus.shell", {
    /**
    * Called when a controller is instantiated and its View controls (if available) are already created.
    * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
    * @memberOf pinkus.shell
    */
    onInit: function () {
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
    onworksetItemSelected: function (oEvent) {
        var oShell = sap.ui.getCore().byId('pinkus.shell');
        var key = oEvent.getParameter('key');
        oShell.setContent(this.oViewBuffer[key]);
    },
    /**
     *
    * @param oEvent
    * @memberOf pinkus.shell
     */
    onLogout: function (oEvent) {
    }
});
