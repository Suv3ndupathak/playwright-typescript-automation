import { Page, expect } from '@playwright/test';
import { clickElement, fillElement } from '../utils/helper';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async enterUsername(username: string) {
    const usernameField = this.page.getByRole('textbox', { name: 'Username' });
    await fillElement(usernameField, username);
  }

  async enterPassword(password: string) {
    const passwordField = this.page.getByRole('textbox', { name: 'Password' });
    await fillElement(passwordField, password);
  }

  async clickLogin() {
    const loginButton = this.page.getByRole('button', { name: 'Login' });
    await clickElement(loginButton);
    await this.page.waitForLoadState('load', { timeout: 15000 });
  }

  async verifyDashboard() {
    await expect(
      this.page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible({ timeout: 15000 });
    console.log('Login successful');
  }

  /**
   * Logs into the application by navigating to the URL,
   * entering username and password, clicking login, and verifying the dashboard.
   */
  async loginIntoApplication(url: string, username: string, password: string) {
    await this.navigate(url);
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
    await this.verifyDashboard();
  }

  async clickProfile() {
    const profileIcon = this.page
      .getByRole('banner')
      .getByRole('img', { name: 'profile picture' });
    await clickElement(profileIcon);
  }

  async clickLogout() {
    await expect(
      this.page.getByRole('menuitem', { name: 'Logout' })
    ).toBeVisible({ timeout: 5000 });

    const logoutButton = this.page.getByRole('menuitem', { name: 'Logout' });
    await clickElement(logoutButton);
    await this.page.waitForLoadState('load', { timeout: 15000 });
    console.log('Logout button has been clicked');
  }
  async verifyLogout() {
    await expect(
      this.page.getByRole('img', { name: 'company-branding' })
    ).toBeVisible({ timeout: 30000 });
    console.log('Logout successful');
  }

  /**
   * Logs out the user from the application by clicking the
   * profile menu, logout button, and verifying logout.
   */
  async logoutFromApplication() {
    await this.clickProfile();
    await this.clickLogout();
    await this.verifyLogout();
  }
}
