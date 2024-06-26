import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';
describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('roma@roma.com');
        LoginPage.setPassword('Romaroma11');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});