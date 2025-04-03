import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

const getPathOf = (dir: string) => {
  return path.join(process.cwd(), dir);
};

const getAllSubdirectories = (dir: string): string[] => {
  const results: string[] = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(fullPath);
      results.push(...getAllSubdirectories(fullPath));
    }
  }
  return results;
};

const getDirectoriesWithIndexHtml = (dirs: string[]): string[] => {
  return dirs.filter((dir) => fs.existsSync(path.join(dir, "index.html")));
};

const week3Path = getPathOf("week3");
const allDirs = getAllSubdirectories(week3Path);
const dirsWithIndexHtml = getDirectoriesWithIndexHtml(allDirs);

dirsWithIndexHtml.forEach((dir) => {
  const relativePath = path.relative(week3Path, dir);

  test.describe(`Week3 Tests - ${relativePath}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`/week3/${relativePath}/index.html`);
    });

    test("should create, read, update, delete todo", async ({ page }) => {
      // 1. Add new todo
      await page
        .getByRole("textbox", { name: /to be done|할 일/i })
        .fill("쿠잇 3주차 미션하기");

      // 2. Click add button
      await page.getByRole("button", { name: /add|할 일/i }).click();

      // 3. Get the todo item containing "쿠잇 3주차 미션하기"
      const todoItem = page
        .getByRole("listitem")
        .filter({ hasText: /쿠잇 3주차 미션하기/i });

      // 4. Click edit button (pencil icon or text)
      await expect(todoItem.getByText(/✏️|수정|edit/i)).toBeVisible();
      await todoItem.getByText(/✏️|수정|edit/i).click();

      // 5. Wait for textbox to appear
      const changedTodoItem = page
        .getByRole("listitem")
        .filter({ has: page.getByRole("textbox") });
      await expect(changedTodoItem.getByRole("textbox")).toBeVisible();

      // 6. Update todo text
      await changedTodoItem
        .getByRole("textbox")
        .fill("쿠잇 4주차 미션 완료하기");

      // 7. Press Enter to save
      await changedTodoItem.getByRole("textbox").press("Enter");

      // 8. Get the updated todo item containing "쿠잇 3주차 미션 완료하기"
      const updatedTodoItem = page
        .getByRole("listitem")
        .filter({ hasText: "쿠잇 4주차 미션 완료하기" });

      // 9. Click delete button (trash icon or text)
      await updatedTodoItem.getByText(/🗑️|삭제|remove|delete/i).click();

      // 10. Verify that the todo item is deleted
      await expect(updatedTodoItem).toBeHidden();
    });
  });
});
