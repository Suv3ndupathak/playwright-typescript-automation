import { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { TEST } from '../../environments/env';

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
