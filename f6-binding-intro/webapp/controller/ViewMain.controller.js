sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("f6bindingintro.controller.ViewMain", {
        onInit() {
            const userModel = new JSONModel({
                name: "",
                email: ""
            });

            this.getView().setModel(userModel);
        },

        onTest() {
            const userData = this.getView().getModel().oData;
            console.log(userData);
        },

        onClear() {
            
        }
    });
});