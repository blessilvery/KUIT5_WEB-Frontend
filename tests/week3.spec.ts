import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

// Get all subdirectories in week3 directory

const getPathOf = (dir: string) => path.join(process.cwd(), dir);
const getSubdirectoriesOf = (dir: string) => {
  const week3Path = getPathOf(dir);
  return fs
    .readdirSync(week3Path, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

const week3Path = getPathOf("week3");
const subdirectories = getSubdirectoriesOf("week3");

// Test suite for each subdirectory
const createTestSuite = (subdir: string) => {
  const testPath = path.join(week3Path, subdir);

  test.describe(`Week3 Tests - ${subdir}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`/week3/${subdir}/index.html`);
    });

    test("should create, read, update, delete todo", async ({ page }) => {
      // 1. Add new todo
      await page
        .getByRole("textbox", { name: /to be done|할 일/i })
        .fill("쿠잇 3주차 미션하기");

      // 2. Click add button
      await page.getByRole("button", { name: /add|할 일/i }).click();

      // 3. Click edit button (pencil icon or text)
      await page
        .locator("#todo-1743689779538")
        .getByText(/✏️|수정|edit/i)
        .click();

      // 4. Update todo text
      await page
        .locator("#todo-1743689779538")
        .getByRole("textbox")
        .fill("쿠잇 4주차 미션하기");

      // 5. Press Enter to save
      await page
        .locator("#todo-1743689779538")
        .getByRole("textbox")
        .press("Enter");

      // 6. Click delete button (trash icon or text)
      await page
        .locator("#todo-1743689779538")
        .getByText(/🗑️|삭제|remove|delete/i)
        .click();
    });

    test("should load index.html", async ({ page }) => {
      const htmlPath = path.join(testPath, "index.html");
      expect(fs.existsSync(htmlPath)).toBeTruthy();

      await expect(page.locator("html")).toBeVisible();
      await expect(page.locator("body")).toBeVisible();

      const title = await page.title();
      expect(title).toBeTruthy();
    });

    test("should load index.css", async ({ page }) => {
      const cssPath = path.join(testPath, "index.css");
      expect(fs.existsSync(cssPath)).toBeTruthy();

      const styles = await page.evaluate(() => {
        return Array.from(document.styleSheets).map((sheet) => sheet.href);
      });
      expect(styles.some((href) => href?.includes("index.css"))).toBeTruthy();
    });

    test("should load index.js", async ({ page }) => {
      const jsPath = path.join(testPath, "index.js");
      expect(fs.existsSync(jsPath)).toBeTruthy();

      const scripts = await page.evaluate(() => {
        return Array.from(document.scripts).map((script) => script.src);
      });
      expect(scripts.some((src) => src?.includes("index.js"))).toBeTruthy();
    });
  });
};

// Create test suites for all subdirectories
subdirectories.map(createTestSuite);
