sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("f2counter.controller.ViewMain", {
        counter: 0,
        onInit() {
            // const x = this.byId("labelCounter").getText();
            // console.log(x);
            // MessageToast.show(`Counter: ${counter}`);
        },
        onAdd() {
            this.counter += 1;
            this.updateLabel();
            // MessageToast.show(`Counter: ${counter}`);
        },
        onSubtract() {
            if (this.counter <= 0) {
                return;
            }
            this.counter -= 1;
            this.updateLabel();
            // MessageToast.show(`Counter: ${counter}`);
        },
        updateLabel() {
            this.byId("labelCounter").setText(`Counter: ${this.counter}`);
        }
    });
});