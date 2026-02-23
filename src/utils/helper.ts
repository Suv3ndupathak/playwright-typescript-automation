import { Page, Locator } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { TEST } from '../../environments/env';

// 🔹 Click Element
export async function clickElement(
  locator: Locator,
  timeout: number = 30000
): Promise<void> {
  await locator.click({ timeout });
}

// 🔹 Fill Element (Text Input)
export async function fillElement(
  locator: Locator,
  value: string,
  timeout: number = 15000
): Promise<void> {
  await locator.fill(value, { timeout });
  console.log(`Element filled with value: ${value}`);
}

// 🔹 Select Element (Dropdown)
export async function selectElement(
  page: Page,
  selectLocator: Locator,
  optionName: string,
  timeout: number = 15000
): Promise<void> {
  await selectLocator.click({ timeout });
  await page.getByRole('option', { name: optionName }).click({ timeout });
  console.log(`Selected option: ${optionName}`);
}

// 🔹 Reusable Login
export async function login(page: Page) {
  const loginPage = new LoginPage(page);

  await loginPage.loginIntoApplication(TEST.URL, TEST.USERNAME, TEST.PASSWORD);

  return loginPage;
}

// 🔹 Reusable Logout
export async function logout(page: Page) {
  const loginPage = new LoginPage(page);
  await loginPage.logoutFromApplication();
}
