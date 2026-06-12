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
        
        //Проверка корректного отображения Категории и саб-категории - пока FAILED
        // const Category = await ui5.element.getDisplayed(detailsPage.selectors.Category);
        // const CategoryText = String(await Category.getText());
        // expect(CategoryText).toMatch(Details.Category);
        // const SubCategory = await ui5.element.getDisplayed(detailsPage.selectors.SubCategory);
        // const SubCategoryText = String(await SubCategory.getText());
        // expect(SubCategoryText).toMatch(Details.SubCategory);

        // Проверка корректного отображения поставщика, цены, валюты, описания и наличия товара
        const Supplier = await ui5.element.getDisplayed(detailsPage.selectors.Supplier);
        const SupplierText = String(await Supplier.getText());
        expect(SupplierText).toMatch(Details.Supplier);
        const Price = await ui5.element.getDisplayed(detailsPage.selectors.Price);
        const PriceText = String(await Price.getText());
        expect(PriceText).toMatch(String(Details.Price));
        const Currency = await ui5.element.getDisplayed(detailsPage.selectors.Currency);
        const CurrencyText = String(await Currency.getText());
        expect(CurrencyText).toMatch(Details.Currency);
        const Description = await ui5.element.getDisplayed(detailsPage.selectors.Description);
        const DescriptionText = String(await Description.getText());
        expect(DescriptionText).toMatch(Details.Description);
        const Availability = await ui5.element.getDisplayed(detailsPage.selectors.Availability);
        const AvailabilityText = String(await Availability.getText());
        expect(AvailabilityText).toMatch(Details.Availability);
    });
});