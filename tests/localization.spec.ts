import { expect, test } from "@playwright/test";

test.describe("when browser locale is set to en-GB", () => {
  test.use({ locale: "en-GB" });

  test("page is displayed in English", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toHaveText("Home");
  });
});

test.describe("when browser locale is set to fr-FR", () => {
  test.use({ locale: "fr-FR" });

  test("page is displayed in French", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toHaveText("Accueil");
  });
});
