sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "f3modules/util/TextUtils"
], ( Controller, MessageToast, TextUtils ) => {
    "use strict";

    return Controller.extend("f3modules.controller.ViewMain", {
        onInit() {
        },

        onSubmit() {
            const name = this.byId("inputName").getValue();

            const dashedName = TextUtils.dashify(name);

            const greeting = "Hi " + dashedName;
            this.byId("textResult").setText(greeting);

            // MessageToast.show("Hi " + name);
        }
    });
});