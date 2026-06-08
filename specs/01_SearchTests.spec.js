import { MainPage as mainPage } from "../pageObjects/MainPage.ts";
import AVANTELitems from "../data/AVANTEL-items.json" with { type: 'json' };

describe("Show Items according to entered criteria", function () {
  beforeEach(async () => {
    await ui5.navigation.navigateToApplication("masterDetail-display");
  });

  it("Show All Items", async function () {
      await ui5.userInteraction.click(mainPage.selectors.goButton);
      await ui5.element.waitForAll(mainPage.selectors.tableHeaderToolbar);
      const elem = await ui5.element.getDisplayed(mainPage.selectors.tableHeaderToolbar);
      if (!elem) throw new Error('tableHeaderToolbar element not found');
      const myText = String(await elem.getText());
      expect(myText).toMatch(/^Products \(\d+\)$/);
  });

  it("Search for 'Audio'", async function () {
    await ui5.userInteraction.fill(mainPage.selectors.searchField, "Audio");
    await ui5.userInteraction.click(mainPage.selectors.goButton);
    await ui5.element.waitForAll(mainPage.selectors.tableHeaderToolbar);
    const elem = await ui5.element.getDisplayed(mainPage.selectors.tableHeaderToolbar);
    if (!elem) throw new Error('tableHeaderToolbar element not found');
    const myText = String(await elem.getText());
    expect(myText).toMatch(/^Products \(\d+\)$/);
  });

  it("Search for Supplier", async function () {
    await ui5.userInteraction.click(mainPage.selectors.SupplierFieldIcon);
    await ui5.element.waitForAll(mainPage.selectors.SupplierFirstCheckBox);
    await ui5.userInteraction.check(mainPage.selectors.SupplierFirstCheckBox);
    await ui5.userInteraction.click(mainPage.selectors.SupplierSelectButton);
    await ui5.userInteraction.click(mainPage.selectors.goButton);
    await ui5.element.waitForAll(mainPage.selectors.tableHeaderToolbar);
    await ui5.userInteraction.click(mainPage.selectors.ShowMorePerRowOption);
    // Проверка хедера таблицы на не пустой результат
    const elem = await ui5.element.getDisplayed(mainPage.selectors.tableHeaderToolbar);
    if (!elem) throw new Error('tableHeaderToolbar element not found');
    const headerText = String(await elem.getText());
    expect(headerText).toMatch(/^Products \(\d+\)$/)
    // Проверка, что все отображаемые элементы принадлежат поставщику AVANTEL
    const FirstProduct = await ui5.element.getDisplayed(mainPage.selectors.SupplierSearchFirstProductInTableName);
    const FirstProductText = String(await FirstProduct.getText());
    expect(FirstProductText).toMatch(AVANTELitems.Product1.Name)
    const FirstProductSupplier = await ui5.element.getDisplayed(mainPage.selectors.SupplierSearchFirstProductInTableSupplier);
    const FirstProductSupplierText = String(await FirstProductSupplier.getText());
    expect(FirstProductSupplierText).toMatch(AVANTELitems.Supplier)
    const SecondProduct = await ui5.element.getDisplayed(mainPage.selectors.SupplierSearchSecondProductInTableName);
    const SecondProductText = String(await SecondProduct.getText());
    expect(SecondProductText).toMatch(AVANTELitems.Product2.Name)
    const SecondProductSupplier = await ui5.element.getDisplayed(mainPage.selectors.SupplierSearchSecondProductInTableSupplier);
    const SecondProductSupplierText = String(await SecondProductSupplier.getText());
    expect(SecondProductSupplierText).toMatch(AVANTELitems.Supplier)
    const ThirdProduct = await ui5.element.getDisplayed(mainPage.selectors.SupplierSearchThirdProductInTableName);
    const ThirdProductText = String(await ThirdProduct.getText());
    expect(ThirdProductText).toMatch(AVANTELitems.Product3.Name)
    const ThirdProductSupplier = await ui5.element.getDisplayed(mainPage.selectors.SupplierSearchThirdProductInTableSupplier);
    const ThirdProductSupplierText = String(await ThirdProductSupplier.getText());
    expect(ThirdProductSupplierText).toMatch(AVANTELitems.Supplier)
    ;

  });

  it("Search by Category", async function () {
    await ui5.userInteraction.click(mainPage.selectors.CategoryFieldIcon);
    await ui5.element.waitForAll(mainPage.selectors.CategoryTextContainer);
    await ui5.userInteraction.fill(mainPage.selectors.CategoryTextContainer, "TV");
    await ui5.userInteraction.click(mainPage.selectors.CategoryOkButton);
    await ui5.userInteraction.click(mainPage.selectors.goButton);
    await ui5.element.waitForAll(mainPage.selectors.tableHeaderToolbar);
    const elem = await ui5.element.getDisplayed(mainPage.selectors.tableHeaderToolbar);
    if (!elem) throw new Error('tableHeaderToolbar element not found');
    const myText = String(await elem.getText());
    expect(myText).toMatch(/^Products \(\d+\)$/);
  });
});