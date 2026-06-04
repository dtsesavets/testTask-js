import { MainPage as mainPage } from "../pageObjects/MainPage.ts";

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
    const elem = await ui5.element.getDisplayed(mainPage.selectors.tableHeaderToolbar);
    if (!elem) throw new Error('tableHeaderToolbar element not found');
    const myText = String(await elem.getText());
    expect(myText).toMatch(/^Products \(\d+\)$/);
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