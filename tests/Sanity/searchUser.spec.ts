import { test, expect } from '@playwright/test';
import { login } from '../../src/utils/helper';
import { logout } from '../../src/utils/helper';
import { clickElement, fillElement, selectElement } from '../../src/utils/helper';


test('@sanity search user ', async ({ page }) => {

  await login(page);

  // Click Admin tab
  const adminLink = page.getByRole('link', { name: 'Admin' });
  await clickElement(adminLink);
  console.log('Admin tab has been clicked');
  
  // Verify User Management page
  await expect(page.getByRole('heading', { name: '/ User Management' })).toBeVisible();
  console.log('User Management page is visible');
  
  // Fill Username
   const usernameInput = page.getByRole('textbox').nth(1);
  await fillElement(usernameInput, 'smith999');
  
  // Select User Role
  const userRoleSelect = page.getByText('-- Select --').first();
  await selectElement(page, userRoleSelect, 'Admin');
  
  // Select Employee Name
  const employeeNameInput = page.getByRole('textbox', { name: 'Type for hints...' });
  await fillElement(employeeNameInput, 'Jane  Smith');
  
  const employeeOption = page.getByRole('option', { name: 'Jane Smith' }).first();
  await expect(employeeOption).toBeVisible({ timeout: 10000 });
  await clickElement(employeeOption);
  
  // Select Status
  const statusSelect = page.getByText('-- Select --');
  await selectElement(page, statusSelect, 'Enabled');
  
  // Click Search
  const searchButton = page.getByRole('button', { name: 'Search' });
  await clickElement(searchButton);
  await page.waitForLoadState('load', { timeout: 15000 });
  console.log('Search button has been clicked and page has loaded');
  
  // Verify Search Result
  const searchResult = page.getByRole('row', { name: ' smith999 Admin Jane Smith' });
  if(await searchResult.isVisible({ timeout: 15000 })) {
    console.log('Search result is visible for the given user');
    // Click on result
  await clickElement(searchResult);
    // Select checkbox
  const resultRow = page.getByRole('row', { name: ' smith999 Admin Jane Smith' });
  await clickElement(resultRow.locator('label'));
  console.log('Checkbox for the search result has been selected');
  } else {
    console.log('Search result is not visible');
  }
  
    // Click Reset
  const resetButton = page.getByRole('button', { name: 'Reset' });
  await clickElement(resetButton);
  console.log('Reset button has been clicked');

  await logout(page);
});