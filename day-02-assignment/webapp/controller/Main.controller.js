sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "day02assignment/util/Greeting",
    "sap/m/MessageToast",
], (Controller, Greeting, MessageToast) => {
    "use strict";

    return Controller.extend("day02assignment.controller.Main", {
        onInit() {
            console.log(Greeting.buildGreeting("SAPUI5 Developer"));
            console.log(Greeting.buildGreeting(" Maria Silva "));
            console.log(Greeting.buildGreeting(""));
            console.log(Greeting.buildGreeting(" "));
        },
        onSayHello() {
            const greeting = Greeting.buildGreeting("SAPUI5 Developer");
            MessageToast.show(greeting);
        },
        onPreviewName() {
            const greeting = Greeting.buildGreeting("       Maria Silva      ");
            MessageToast.show(greeting);
        },
        onPreviewFallback() {
            const greeting = Greeting.buildGreeting("      ");
            MessageToast.show(greeting);
        },
    });
});