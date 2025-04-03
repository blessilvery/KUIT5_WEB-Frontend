import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

// Get all subdirectories in week3 directory
const week3Path = path.join(process.cwd(), "week3");
const subdirectories = fs
  .readdirSync(week3Path, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

// Test each subdirectory
subdirectories.forEach((subdir) => {
  test.describe(`Week3 Tests - ${subdir}`, () => {
    test.beforeEach(async ({ page }) => {
      // Navigate to the page
      await page.goto(`/week3/${subdir}/index.html`);
    });

    test("HTML structure test", async ({ page }) => {
      // Check if index.html exists
      const htmlPath = path.join(week3Path, subdir, "index.html");
      expect(fs.existsSync(htmlPath)).toBeTruthy();

      // Check if basic HTML elements exist
      await expect(page.locator("html")).toBeVisible();
      await expect(page.locator("body")).toBeVisible();

      // Check if title exists
      const title = await page.title();
      expect(title).toBeTruthy();
    });

    test("CSS loading test", async ({ page }) => {
      // Check if index.css exists
      const cssPath = path.join(week3Path, subdir, "index.css");
      expect(fs.existsSync(cssPath)).toBeTruthy();

      // Check if CSS is loaded
      const styles = await page.evaluate(() => {
        return Array.from(document.styleSheets).map((sheet) => sheet.href);
      });
      expect(styles.some((href) => href?.includes("index.css"))).toBeTruthy();
    });

    test("JavaScript loading test", async ({ page }) => {
      // Check if index.js exists
      const jsPath = path.join(week3Path, subdir, "index.js");
      expect(fs.existsSync(jsPath)).toBeTruthy();

      // Check if JavaScript is loaded
      const scripts = await page.evaluate(() => {
        return Array.from(document.scripts).map((script) => script.src);
      });
      expect(scripts.some((src) => src?.includes("index.js"))).toBeTruthy();
    });
  });
});
