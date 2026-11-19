sap.ui.define([], () => {
    "use strict";
    
    return {
        dashify(text) {
            // Let's add dashes to the name for example:
            // banana
            // becomes: b-a-n-a-n-a

            let dashedText = "";
            for (let i = 0; i < text.length; i++) {
                if (i > 0) {
                    dashedText += "-";
                }
                dashedText += text[i];
                
            }
            
            return dashedText;
        }
    };
});