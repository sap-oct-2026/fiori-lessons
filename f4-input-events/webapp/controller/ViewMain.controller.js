sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("f4inputevents.controller.ViewMain", {
        onInit() {
            const x = this.byId("page").getContent();
            console.log(x);
        },
        onInputNameChange() {
            const name = this.byId("inputName").getValue();
            this.byId("textResult").setText(name.toUpperCase());
        },
        onSelectColor() {
            const color = this.byId("selectColor").getSelectedKey();
            // MessageToast.show(color);
            const message = `You chose ${color}`;
            this.byId("textResult").setText(message);
        }
    });
});