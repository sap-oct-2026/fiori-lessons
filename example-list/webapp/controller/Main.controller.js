sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("examplelist.controller.Main", {
        onInit() {

            const oModel = new JSONModel();

            oModel.loadData("/model/requests.json");

            this.getView().setModel(oModel);

        }
    });
});