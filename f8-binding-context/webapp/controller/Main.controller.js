sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], (Controller, JSONModel, MessageToast) => {
    "use strict";

    // Let's create a small app
    // that just displays a list of names

    // Exercise:
    // Create a Text Box on top of the List
    // show the full user address
    // when you click a user
    return Controller.extend("f8bindingcontext.controller.Main", {
        onInit() {

            const oModel = new JSONModel();
            oModel.loadData("/model/users.json");

            this.getView().setModel(oModel);

            const oAddressPanelModel = new JSONModel({
                visibility: false,
                address: {}
            });

            this.getView().setModel(oAddressPanelModel, "ap");
        },
        onNamePress(oEvent) {

            const context = oEvent.getSource().getBindingContext();
            const user = context.getObject();

            MessageToast.show("Hi " + user.name);

            // const adressText = `Street: ${user.address.street}, City: ${user.address.city}`;
            // this.byId("textMessage").setText(adressText);

            this.getView().getModel("ap").setProperty("/visibility", true);
            this.getView().getModel("ap").setProperty("/address", user.address);
        },
        onClosePanel() {
            this.getView().getModel("ap").setProperty("/visibility", false);
        }
    });
});