abstract class DetailsPage {
    public static selectors = {
        ProductNameInDetails: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Title",
            "id": "*template::ObjectPage::ObjectPageDynamicHeaderTitle"
            }
        },
        Category: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.HBox",
            "bindingContextPath": "/SEPMRA_C_PD_Product*Product='HT-2001'*"
            }
        },
        SubCategory: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.HBox",
            "bindingContextPath": "/SEPMRA_C_PD_Product*Product='HT-2001'*"
            }
        },
        Supplier: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.ui.comp.navpopover.SmartLink",
            "id": "*header::headerEditable::com.sap.vocabularies.UI.v1.FieldGroup::HeaderInformation::Supplier::Field-sl"
            }
        },
        Price: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Text",
            "id": "*header::headerEditable::com.sap.vocabularies.UI.v1.DataPoint::Price::Price::Value-text"
            }
        },
        Currency: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Text",
            "id": "*header::headerEditable::com.sap.vocabularies.UI.v1.DataPoint::Price::Price::Value-sfDisp-text"
            }
        },
        Description: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Text",
            "id": "*header::headerEditable::com.sap.vocabularies.UI.v1.FieldGroup::ProductHeaderText::to_ProductTextInOriginalLang::Description::PlainTextDataField"
            }
        },
        Availability: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.ObjectStatus",
            "id": "*header::headerEditable::to_ProductStock::com.sap.vocabularies.UI.v1.DataPoint::StockAvailability::StockAvailability::Value-objStatus"
            }
        }
    }
}

export { DetailsPage };