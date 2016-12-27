jQuery.sap.require("sap.ui.core.IconPool");
sap.ui.jsview("pinkus.client", {
    /**
     * Specifies the Controller belonging to this View. In the case that it is
     * not implemented, or that "null" is returned, this View does not have a
     * Controller.
     *
     * @memberOf pinkus.client
     */
    getControllerName: function () {
        return "pinkus.client";
    },
    /**
     * Is initially called once after the Controller has been instantiated. It
     * is the place where the UI is constructed. Since the Controller is given
     * to this method, its event handlers can be attached right away.
     *
     * @memberOf pinkus.client
     */
    createContent: function (oController) {
        // -------------------------------------------------//
        // Create an instance of the table control
        var oTable = new sap.ui.table.Table({
            id: "pinkus.client.view",
            title: "Kundenliste",
            visibleRowCount: 7,
            firstVisibleRow: 3,
            selectionMode: sap.ui.table.SelectionMode.Single,
            enableGrouping: true
        });
        // -------------------------------------------------//
        // toolbar
        var oTableToolbar = new sap.ui.commons.Toolbar();
        // Status field
        var oStatusLabel = new sap.ui.commons.Label({
            text: 'Status'
        });
        var oStatusListbox = new sap.ui.commons.ListBox("stautsListbox", {
            displaySecondaryValues: true,
            displayIcons: true,
            tooltip: "Status zur Selektion",
            items: [
                new sap.ui.core.ListItem({ text: "", additionalText: "Alle" }),
                new sap.ui.core.ListItem({ text: "NEU", additionalText: "neue Aufträge",
                    icon: sap.ui.core.IconPool.getIconURI("cause") }),
                new sap.ui.core.ListItem({ text: "ANGE", additionalText: "Angenommenen",
                    icon: sap.ui.core.IconPool.getIconURI("complete") }),
                new sap.ui.core.ListItem({ text: "AUEF", additionalText: "Annahme überfällig",
                    icon: sap.ui.core.IconPool.getIconURI("alert") }),
                new sap.ui.core.ListItem({ text: "LERB", additionalText: "Leistung erbracht",
                    icon: sap.ui.core.IconPool.getIconURI("approvals") }),
                new sap.ui.core.ListItem({ text: "LUEF", additionalText: "Leistung überfällig",
                    icon: sap.ui.core.IconPool.getIconURI("quality-issue") }),
                new sap.ui.core.ListItem({ text: "TABG", additionalText: "Teilabgeschlossen",
                    icon: sap.ui.core.IconPool.getIconURI("switch-classes") }),
                new sap.ui.core.ListItem({ text: "STOR", additionalText: "Storniert vom AG",
                    icon: sap.ui.core.IconPool.getIconURI("x-ray") })
            ]
        });
        var oStatusCombobox = new sap.ui.commons.ComboBox("statusCombobox", {
            displaySecondaryValues: true,
            displayIcons: true,
            tooltip: "Status zur Selektion",
            value: "",
            "association:listBox": oStatusListbox,
            change: function (oEvent) {
                var oTable = sap.ui.getCore().byId("pinkus.client.view");
                var oColumn = sap.ui.getCore().byId("pinkus.client.view.table.column.status");
                oTable.filter(oColumn, oEvent.mParameters.newValue);
            }
        });
        //		var oStatusField = new sap.ui.commons.TextField({
        //			id : 'statusFieldId',
        //			value : '',
        //			width : '10em',
        //		});
        oStatusLabel.setLabelFor(oStatusCombobox);
        oTableToolbar.addItem(oStatusLabel);
        oTableToolbar.addItem(oStatusCombobox);
        // Sync button
        var oSyncButton = new sap.ui.commons.Button({
            icon: sap.ui.core.IconPool.getIconURI("synchronize"),
            id: 'syncButtonId',
            text: "Sync Aufträge",
            press: function () {
                //				oController.syncButton();
            }
        });
        oTableToolbar.addItem(oSyncButton);
        oTable.setToolbar(oTableToolbar);
        // -------------------------------------------------//
        // define the columns and the control templates to be used
        oTable.addColumn(new sap.ui.table.Column({
            id: "client.view.table.column.status",
            label: new sap.ui.commons.Label({
                text: "Status"
            }),
            template: new sap.ui.commons.TextField().bindProperty("value", "status"),
            sortProperty: "status",
            filterProperty: "status",
            width: "15px"
        }));
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({
                text: "ID"
            }),
            template: new sap.ui.commons.TextField().bindProperty("value", "id"),
            sortProperty: "id",
            filterProperty: "id",
            width: "15px"
        }));
        oTable.addColumn(new sap.ui.table.Column({
            label: new sap.ui.commons.Label({
                text: "Name"
            }),
            template: new sap.ui.commons.TextField().bindProperty("value", "name"),
            sortProperty: "name",
            filterProperty: "name",
            width: "15px"
        }));
        // bind table rows to /Kunden based on the model defined in the init
        // method of the controller
        oTable.bindRows("/Kunden");
        return oTable;
    }
});
