sap.ui.controller("pinkus.client", {

		/**
		 * Called when a controller is instantiated and its View
		 * controls (if available) are already created. Can be used
		 * to modify the View before it is displayed, to bind event
		 * handlers and do other one-time initialization.
		 * 
		 * @memberOf pinkus.order
		 */
		sOrigin : window.location.protocol + "//" + window.location.hostname
			+ (window.location.port ? ":"
			+ window.location.port : ""),
				
		onInit : function() {

			var oShell = sap.ui.getCore().byId('pinkus.shell');
			this.getView().setModel(oShell.odataModel);
//			
		},
		
		addNewPerson : function(sFirstName, sLastName, oTable) {
			var me = {
				successMsg : function() {
					sap.ui.commons.MessageBox
							.alert("Person entity has been successfully created");
				},
	
				errorMsg : function() {
					sap.ui.commons.MessageBox
							.alert("Error occured when creating person entity");
				}
			};
	
			var persons = {};
			persons.FirstName = sFirstName;
			persons.LastName = sLastName;
	
			this.getView().getModel().create("/Persons", persons, null, me.successMsg, me.errorMsg);
		},
	
		syncORDSuccess : function(responseObject) {
			// the parameter is an object of the type declared for
			// the
			// method.
			var messageOut = 0;
			var me = {
					successMsg : function() {
						if (messageOut == 0) {
							sap.ui.commons.MessageBox
								.alert("ORDER entity(s) has been successfully created");
							messageOut = 1;
						}},
		
					errorMsg : function() {
						if (messageOut == 0) {
							sap.ui.commons.MessageBox
							.alert("Error occured when creating ORDER entity(s)");
							messageOut = 1;
						}}				
				};
					
			var oShell = sap.ui.getCore().byId('pinkus.shell');

			var ls_order = {};
			
			for (var i = 0; i < responseObject._ORD_SRES._item.length; i++) {
				// Mapping der Felder
				//ls_order.AUART = responseObject._ORD_SRES._item[i]._AUART;
				//ls_order.AUART_OPSLTXT = responseObject._ORD_SRES._item[i]._AUART_OPSLTXT;
				ls_order.ShortText = responseObject._ORD_SRES._item[i]._SHORT_TEXT;
				
				//ls_order.PRIOK = responseObject._ORD_SRES._item[i]._PRIOK;
				ls_order.PrioText = responseObject._ORD_SRES._item[i]._PRIOK 
				                  + ' - ' + responseObject._ORD_SRES._item[i]._PRIOK_OPSLTXT;
	
				ls_order.Status = responseObject._ORD_SRES._item[i]._USER_STATUS;
				ls_order.EndDate = responseObject._ORD_SRES._item[i]._GLTRP;
				ls_order.StartDate = responseObject._ORD_SRES._item[i]._GSTRP;
				//ls_order.CREATED_ON = responseObject._ORD_SRES._item[i]._CREATED_ON;

				ls_order.GroupText = responseObject._ORD_SRES._item[i]._MATKL
				  					+ ' - ' + responseObject._ORD_SRES._item[i]._MATKL_OPSLTXT;
				
				
				//ls_order.AG_NAME_LIST = responseObject._ORD_SRES._item[i]._AG_NAME_LIST;
				//ls_order.Ext_id = 1;
				
				ls_order.ObjId = responseObject._ORD_SRES._item[i]._STRNO;
				ls_order.ObjText = responseObject._ORD_SRES._item[i]._PLTXT;
				ls_order.ObjCity = responseObject._ORD_SRES._item[i]._CITY1;
				ls_order.ObjPostCode = responseObject._ORD_SRES._item[i]._POST_CODE1;
				ls_order.ObjStreet = responseObject._ORD_SRES._item[i]._STREET;
				
				//ls_order.VM_NAME1 = responseObject._ORD_SRES._item[i]._VM_NAME1
				//  + ' ' + responseObject._ORD_SRES._item[i]._VM_NAME2;
				//ls_order.VM_NAME2 = responseObject._ORD_SRES._item[i]._VM_NAME3
				//  + ' ' + responseObject._ORD_SRES._item[i]._VM_NAME4;
				//ls_order.VM_TEL_NUMBER = responseObject._ORD_SRES._item[i]._VM_TEL_NUMBER;
				//ls_order.VM_FAX_NUMBER = responseObject._ORD_SRES._item[i]._VM_FAX_NUMBER;
				
				ls_order.ClientOrderId = responseObject._ORD_SRES._item[i]._PO_NUMBER
				                      + responseObject._ORD_SRES._item[i]._PO_ITEM;
				
				ls_order.NetValue = responseObject._ORD_SRES._item[i]._NET_VALUE;
				
				//this.getView().getModel().create("/Orders", ls_order, null,
				oShell.odataModel.create("/Kunden", ls_order, null,
						null, null);
				//		me.successMsg, me.errorMsg);						
				
			}
			
	
		},
		
		syncCONSuccess : function(responseObject) {
			// the parameter is an object of the type declared for
			// the
			// method.
			var messageOut = 0;
			var me = {
					successMsg : function() {
						if (messageOut == 0) {
							sap.ui.commons.MessageBox
								.alert("CONTRACT entity(s) has been successfully created");
							messageOut = 1;
						}},
		
					errorMsg : function() {
						if (messageOut == 0) {
							sap.ui.commons.MessageBox
							.alert("Error occured when creating CONTRACT entity(s)");
							messageOut = 1;
						}}				
				};
			var oShell = sap.ui.getCore().byId('pinkus.shell');
			
			var ls_order = {};
			
			for (var i = 0; i < responseObject._CON_SRES._item.length; i++) {
				// Mapping der Felder
				//ls_order.AUART = responseObject._CON_SRES._item[i]._AUART;
				//ls_order.AUART_OPSLTXT = responseObject._CON_SRES._item[i]._AUART_OPSLTXT;
				ls_order.ShortText = responseObject._CON_SRES._item[i]._SHORT_TEXT;
				
				//ls_order.PRIOK = responseObject._CON_SRES._item[i]._PRIOK;
				ls_order.PrioText = responseObject._CON_SRES._item[i]._PRIOK 
				                  + ' - ' + responseObject._CON_SRES._item[i]._PRIOK_OPSLTXT;
	
				ls_order.Status = responseObject._CON_SRES._item[i]._USER_STATUS;
				ls_order.EndDate = responseObject._CON_SRES._item[i]._VPER_END;
				ls_order.StartDate = responseObject._CON_SRES._item[i]._VPER_START;
				ls_order.CreateDate = responseObject._CON_SRES._item[i]._CREATED_ON;
				
				ls_order.GroupText = responseObject._CON_SRES._item[i]._GEWRK
				 				  + ' - ' + responseObject._CON_SRES._item[i]._GEWRK_OPSLTXT;
				
				//ls_order.AG_NAME_LIST = responseObject._CON_SRES._item[i]._AG_NAME_LIST;
				//ls_order.Ext_id = 1;
				
				ls_order.ObjId = responseObject._CON_SRES._item[i]._STRNO;
				ls_order.ObjText = responseObject._CON_SRES._item[i]._PLTXT;
				ls_order.ObjCity = responseObject._CON_SRES._item[i]._CITY1;
				ls_order.ObjPostCode = responseObject._CON_SRES._item[i]._POST_CODE1;
				ls_order.ObjStreet = responseObject._CON_SRES._item[i]._STREET;
				
				//ls_order.VM_NAME1 = responseObject._CON_SRES._item[i]._VM_NAME1
				//  + ' ' + responseObject._CON_SRES._item[i]._VM_NAME2;
				//ls_order.VM_NAME2 = responseObject._CON_SRES._item[i]._VM_NAME3
				//  + ' ' + responseObject._CON_SRES._item[i]._VM_NAME4;
				//ls_order.VM_TEL_NUMBER = responseObject._CON_SRES._item[i]._VM_TEL_NUMBER;
				//ls_order.VM_FAX_NUMBER = responseObject._CON_SRES._item[i]._VM_FAX_NUMBER;
				
				ls_order.ClientOrderId = responseObject._CON_SRES._item[i]._PO_NUMBER
				                      + responseObject._CON_SRES._item[i]._PO_ITEM;
				
				ls_order.NetValue = responseObject._CON_SRES._item[i]._NET_VALUE;
				
				//this.getView().getModel().create("/Orders", ls_order, null,
				oShell.odataModel.create("/Kunden", ls_order, null,
						me.successMsg, me.errorMsg);						
				
			}
			
	
		},

	

	
	/**
	 * Similar to onAfterRendering, but this hook is invoked before
	 * the controller's View is re-rendered (NOT before the first
	 * rendering! onInit() is used for that one!).
	 * 
	 * @memberOf oscar-web.order
	 */
	// onBeforeRendering: function() {
	//
	// },
	/**
	 * Called when the View has been rendered (so its HTML is part
	 * of the document). Post-rendering manipulations of the HTML
	 * could be done here. This hook is the same one that SAPUI5
	 * controls get after being rendered.
	 * 
	 * @memberOf oscar-web.order
	 */
	// onAfterRendering: function() {
	//
	// },
	/**
	 * Called when the Controller is destroyed. Use this one to free
	 * resources and finalize activities.
	 * 
	 * @memberOf oscar-web.order
	 */
	// onExit: function() {
	//
	// }
});