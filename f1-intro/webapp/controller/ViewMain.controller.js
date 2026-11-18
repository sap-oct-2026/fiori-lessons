sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("f1intro.controller.ViewMain", {
      onInit() {},

      onSayHello() {
        MessageToast.show("HELLO!");
      },

      onSayGoodbye() {
        MessageToast.show("GOODBYE!");
      },
    });
  },
);
