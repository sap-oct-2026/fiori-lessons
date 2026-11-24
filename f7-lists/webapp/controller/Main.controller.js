sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("f7lists.controller.Main", {
        onInit() {
            const data = {
                products: [
                    {
                        name: "iPhone Duo",
                        price: 2000
                    },
                    {
                        name: "Gameboy",
                        price: 100
                    },
                    {
                        name: "SNES",
                        price: 100
                    },
                    {
                        name: "PS5",
                        price: 100
                    },
                ]
            };
            const model = new JSONModel(data);
            
            this.getView().setModel(model);

            // console.log(this.getView().getModel().oData.products[1].name);
            // const x = this.getView().getModel().getProperty("/products")[2].name;
            const x = this.getView().getModel().getProperty("/products/0/name");
            console.log(x);

        }
    });
});