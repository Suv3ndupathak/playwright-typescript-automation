import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { login } from './helper';

type MyFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await login(page); // using helper
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
