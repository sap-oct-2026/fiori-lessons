sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("f7lists.controller.Main", {
        onInit() {
            
            const model = new JSONModel();
            model.loadData("/model/productData.json");
            
            this.getView().setModel(model);

        },
        onButton1() {
            // console.log(this.getView().getModel().oData.products[1].name);
            // const x = this.getView().getModel().getProperty("/products")[2].name;
            const x = this.getView().getModel().getProperty("/products/0/name");
            console.log(x);
        }
    });
});