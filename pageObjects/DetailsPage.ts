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
        },
        SupplierInformationTab: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.IconTabFilter",
            "id": "*objectPage-anchBar-sap.ui.demoapps.rta.fiorielements::sap.suite.ui.generic.template.ObjectPage.view.Details::SEPMRA_C_PD_Product--BeforeFacet::SEPMRA_C_PD_Product::ProductCollectionFacetID::Section-anchor"
            }
        },
        SupplierInformation: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.OverflowToolbar",
            "id": "*BeforeFacet::SEPMRA_C_PD_Product::ProductCollectionFacetID::SubSection-_headerToolbar"
            }
        },
        SupplierInformationBlock:{
        "elementProperties": {
            "viewName": "sap.ui.demoapps.rta.fiorielements.ext.view.SupplierInformation",
            "metadata": "sap.ui.layout.Grid",
            "id": "*supplierForm--Form--Grid"
            }
        },
        ProductInformationTab: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.IconTabFilter",
            "id": "*objectPage-anchBar-sap.ui.demoapps.rta.fiorielements::sap.suite.ui.generic.template.ObjectPage.view.Details::SEPMRA_C_PD_Product--ProductCollectionFacetID::Section-anchor"
            }
        },
        ProductInformation: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Title",
            "id": "*ProductCollectionFacetID::SubSection-headerTitle",
            "text": "Product Information"
            }
        },
        ProductInformationBlock: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.ui.comp.smartform.Group",
            "id": "*com.sap.vocabularies.UI.v1.FieldGroup::TechnicalData::FormGroup"
            }
        },
        ReviewsTab: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.IconTabFilter",
            "id": "*objectPage-anchBar-sap.ui.demoapps.rta.fiorielements::sap.suite.ui.generic.template.ObjectPage.view.Details::SEPMRA_C_PD_Product--ProductReviewFacetID::Section-anchor"
            }   
        },
        Reviews: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.Title",
            "id": "*ProductReviewFacetID::SubSection-headerTitle",
            "text": "Reviews"
            }
        },
        ReviewsBlock: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.uxap.ObjectPageSubSection",
            "id": "*ProductReviewFacetID::SubSection",
            "title": "Reviews"
            }            
        },
        InventoryInformationTab: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.IconTabFilter",
            "id": "*objectPage-anchBar-sap.ui.demoapps.rta.fiorielements::sap.suite.ui.generic.template.ObjectPage.view.Details::SEPMRA_C_PD_Product--AfterFacet::SEPMRA_C_PD_Product::ProductReviewFacetID::Section-anchor"
            }
        },
        InventoryInformation: {
        "elementProperties": {
            "viewName": "sap.suite.ui.generic.template.ObjectPage.view.Details",
            "metadata": "sap.m.OverflowToolbar",
            "id": "*AfterFacet::SEPMRA_C_PD_Product::ProductReviewFacetID::SubSection-_headerToolbar"
            }
        },
        InventoryInformationBlock: {
        "elementProperties": {
            "viewName": "sap.ui.demoapps.rta.fiorielements.ext.view.Default",
            "metadata": "sap.ui.core.mvc.XMLView"
            }
        }
    }   
}

export { DetailsPage };