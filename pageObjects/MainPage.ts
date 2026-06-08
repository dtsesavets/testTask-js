abstract class MainPage {
    public static selectors = {
        goButton: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.m.Button",
            "id": "*listReportFilter-btnGo"
            }
        },
        searchField: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.ui.comp.smartfilterbar.SFBSearchField",
            "id": "*listReportFilter-btnBasicSearch"
            }
        },
        SupplierFieldIcon: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.ui.core.Icon",
            "id": "*Supplier-multiinput-vhi"
            }
        },
        SupplierFirstCheckBox: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.m.CheckBox",
            "bindingContextPath": "/SEPMRA_C_PD_Supplier*'100000008')"
            }
        },
        SupplierSelectButton: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.m.Button",
            "text": "Select"
            }
        },
        ShowMorePerRowOption:{
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.ui.core.Icon",
            "src": "sap-icon://detail-more"
     }
        },
        SupplierSearchFirstProductInTableName: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.ui.comp.navpopover.SmartLink",
            "bindingContextPath": "/SEPMRA_C_PD_Product*Product='HT-1601'*"
            }
        },
        SupplierSearchFirstProductInTableSupplier: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.m.Text",
            "bindingContextPath": "/SEPMRA_C_PD_Product*Product='HT-1601'*",
            "text": [
                {
                    "path": "to_Supplier/CompanyName"
                }
            ]
             }
        },
        SupplierSearchSecondProductInTableName: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.ui.comp.navpopover.SmartLink",
            "bindingContextPath": "/SEPMRA_C_PD_Product*Product='HT-1021'*"
            }
        },
        SupplierSearchSecondProductInTableSupplier: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.m.Text",
            "bindingContextPath": "/SEPMRA_C_PD_Product*Product='HT-1021'*",
            "text": [
                {
                    "path": "to_Supplier/CompanyName"
                }
            ]
            }
        },
        SupplierSearchThirdProductInTableName: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.ui.comp.navpopover.SmartLink",
            "bindingContextPath": "/SEPMRA_C_PD_Product*Product='HT-1106'*"
            }
        },
        SupplierSearchThirdProductInTableSupplier: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.m.Text",
            "bindingContextPath": "/SEPMRA_C_PD_Product*Product='HT-1106'*",
            "text": [
                {
                    "path": "to_Supplier/CompanyName"
                }
            ]
            }
        },
        CategoryFieldIcon: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.ui.core.Icon",
            "id": "*listReportFilter-filterItemControl_BASIC-MainProductCategory-vhi"
            }
        },
        CategoryTextContainer: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.m.Input"
            }
        },
        CategoryOkButton: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.m.Button",
            "id": "*listReportFilter-filterItemControl_BASIC-MainProductCategory-valueHelpDialog-ok"
            }
        },
        tableHeaderToolbar: {    
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.m.Title",
            "id": "*listReport-header"
            }
        },
        firstProductInTable: {    
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.m.ColumnListItem",
            "bindingContextPath": "/SEPMRA_C_PD_Product*Product='HT-2001'*"
            }
        },
    };
}

export { MainPage };