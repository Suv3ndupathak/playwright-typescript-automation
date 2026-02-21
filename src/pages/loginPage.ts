import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async enterUsername(username: string) {
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
  }

  async enterPassword(password: string) {
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  }

  async clickLogin() {
    await this.page.getByRole('button', { name: 'Login' }).click();
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
    await this.page
      .getByRole('banner')
      .getByRole('img', { name: 'profile picture' })
      .click();
  }

  async clickLogout() {
    await expect(
      this.page.getByRole('menuitem', { name: 'Logout' })
    ).toBeVisible({ timeout: 5000 });

    await this.page.getByRole('menuitem', { name: 'Logout' }).click();
    console.log('Logout button has been clicked');
  }
  async verifyLogout() {
    // Wait for navigation to complete after logout
    await this.page.waitForLoadState('networkidle');

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
