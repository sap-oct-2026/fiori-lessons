sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("f7lists.controller.Main", {
        onInit() {
            const data = {
                books: [
                    {
                        title: "Momo",
                        author: "Michael Ende",
                        
                    },
                    {
                        title: "Ronja the Robber's Daughter",
                        author: "Astrid Lindgren",
                        
                    },
                    {
                        title: "The Mysterious Island",
                        author: "Jules Verne",
                        
                    },
                    
                ]
            };
            const model = new JSONModel(data);
            
            this.getView().setModel(model);

            // console.log(this.getView().getModel().oData.products[1].name);
            // const x = this.getView().getModel().getProperty("/products")[2].name;
           

        }
    });
});