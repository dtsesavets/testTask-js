import { MainPage as mainPage } from "../pageObjects/MainPage.ts";
import { DetailsPage as detailsPage } from "../pageObjects/DetailsPage.ts";
import Details from "../data/Details.json" with { type: 'json' };
import References from "../data/references.json" with { type: 'json' };


describe("Check all visible fields at the Details page", function () {
    it("Check All Visible Fields", async function () {
        await ui5.navigation.navigateToApplication(References.appName);
        await ui5.userInteraction.click(mainPage.selectors.goButton);
        await ui5.element.waitForAll(mainPage.selectors.tableHeaderToolbar);
        await ui5.userInteraction.click(mainPage.selectors.firstProductInTable);
        // Проверка, что при открытии страницы деталей отображается правильный продукт
        const ProductName = await ui5.element.getDisplayed(detailsPage.selectors.ProductNameInDetails);
        const ProductNameText = String(await ProductName.getText());
        expect(ProductNameText).toMatch(Details.Name);
    });
});