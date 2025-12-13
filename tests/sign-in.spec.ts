import { expect, test } from "@playwright/test";

test("can sign in with valid credentials", async ({ page }) => {
  await page.goto("/sign-in");

  await page.getByLabel("Email").fill("e2e-user@example.com");
  await page.getByLabel("Password").fill("e2e-user-pass");
  await page.getByRole("button", { name: "Sign in" }).click();

  await expect(page.getByText("Welcome to Buttercup")).toBeAttached();
});
