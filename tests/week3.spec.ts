import { test, expect } from "@playwright/test";

test.describe("Week3 Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page
    await page.goto("/week3/index.html");
  });

  test("HTML structure test", async ({ page }) => {
    // Check if basic HTML elements exist
    await expect(page.locator("html")).toBeVisible();
    await expect(page.locator("head")).toBeVisible();
    await expect(page.locator("body")).toBeVisible();

    // Check if title exists
    const title = await page.title();
    expect(title).toBeTruthy();
  });

  test("CSS loading test", async ({ page }) => {
    // Check if CSS is loaded
    const styles = await page.evaluate(() => {
      return Array.from(document.styleSheets).map((sheet) => sheet.href);
    });
    expect(styles).toContain(expect.stringContaining("index.css"));
  });

  test("JavaScript loading test", async ({ page }) => {
    // Check if JavaScript is loaded
    const scripts = await page.evaluate(() => {
      return Array.from(document.scripts).map((script) => script.src);
    });
    expect(scripts).toContain(expect.stringContaining("index.js"));
  });
});
