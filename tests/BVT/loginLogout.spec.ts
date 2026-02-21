import { test } from '../../src/utils/fixtures';
import { login, logout } from '../../src/utils/helper';

test('@BVT Login Logout Test', async ({ page }) => {

  await login(page);     
  await logout(page);    

});