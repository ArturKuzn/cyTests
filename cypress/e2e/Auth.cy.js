import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";

import user from '../fixtures/user.json'

it('Authorization', () => {
  homePage.visit('/index.php?rt=account/login');
  homePage.getLoginOrRegisterButton().click();
  loginPage.submitLoginForm(user.username, user.password);
})