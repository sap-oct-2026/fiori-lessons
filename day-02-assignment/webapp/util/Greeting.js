sap.ui.define([], () => {
    "use strict";

    return {
        buildGreeting(name) {
            const username = name.trim();

            let greeting = "Hello, Developer!";
            if (username.length !== 0) {
                greeting = `Hello, ${username}!`;
            }

            return greeting;
        }
    };
});