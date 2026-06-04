import { MainPage as mainPage } from "../pageObjects/MainPage.ts";

describe("Show All Items", function () {

  it("Step 01: Navigate to application", async function () {
    await ui5.navigation.navigateToApplication("masterDetail-display");
    //await util.browser.sleep(25000);
  });

  it("Step 02: Enter 'Audio' in the search field", async function () {
    await ui5.userInteraction.fill(mainPage.selectors.searchField, "Audio");
  });
    it("Step 03: Click 'Go' on ListReport", async function () {
    await ui5.userInteraction.click(mainPage.selectors.goButton);
    await ui5.element.waitForAll(mainPage.selectors.tableHeaderToolbar);
  });
});