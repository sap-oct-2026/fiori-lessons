sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("f6bindingintro.controller.ViewMain", {
        onInit() {
            const userData = {
                name: "",
                email: ""
            };

            const userModel = new JSONModel(userData);
            this.getView().setModel(userModel);
        },

        onTest() {
            // const name = this.getView().getModel().oData.name;
            // const email = this.getView().getModel().oData.email;
            // const { name, email } = this.getView().getModel().oData;

            const userModel = this.getView().getModel();
            
            const name = userModel.getProperty("/name");
            const email = userModel.getProperty("/email");
            
            const greeting = `Hello ${name} your email is ${email}`;
            this.byId("textPreview").setText(greeting);
        },

        onClear() {
            const userModel = this.getView().getModel();
            userModel.setProperty("/name", "");
            userModel.setProperty("/email", "");
        }
    });
});