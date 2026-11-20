sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("f5simpleform.controller.ViewMain", {
        onInit() {

        },
        onCheckEmployee() {
            const employeeNameInput = this.byId("employeeNameInput");
            const departmentSelect = this.byId("departmentSelect");
            const checkStatusObject = this.byId("checkStatus");
            
            const employeeName = employeeNameInput.getValue().trim();
            const selectedDepartment = departmentSelect.getSelectedKey();

            // if (employeeName.length === 0) {
            if (!employeeName) {
                
                employeeNameInput.setValueState("Error");
                employeeNameInput.setValueStateText("OH NO!");
                employeeNameInput.focus();

                checkStatusObject.setText("Name required");
                checkStatusObject.setState("Error");
                
                return;
            }

            employeeNameInput.setValueState("None");
            
            checkStatusObject.setText("Details valid");
            checkStatusObject.setState("Success");

            MessageToast.show(`${employeeName} from ${selectedDepartment}`);
        },
        onClearEmployee() {
            this.byId("employeeNameInput").setValue("").setValueState("None");
            this.byId("departmentSelect").setSelectedKey("IT");
            this.byId("checkStatus").setText("Not checked").setState("Information");
            this.byId("employeeNameInput").focus();
        }
    });
});