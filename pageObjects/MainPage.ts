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
        tableHeaderToolbar: {    
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ListReport.view.ListReport",
            "metadata": "sap.m.OverflowToolbar",
            "id": "*template::ListReport::TableToolbar"}
        }
    };
}

export { MainPage };