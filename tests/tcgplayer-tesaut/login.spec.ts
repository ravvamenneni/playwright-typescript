import { test, type Page, expect } from "@playwright/test";
import  {Login} from '../tcg-pages/login-page';

let _loginPage: Login;

test.beforeEach(async ({page})=>{
    _loginPage = new Login(page);
})

test.describe('This is a group of login tests', ()=>{

    test('Valid username and password', async ({ page }) => {
        await page.goto('https://www.tcgplayer-qa.com/login?returnUrl=https://www.tcgplayer-qa.com/');
        await _loginPage.loginWithValidUsernamPassword();
        await page.getByRole('button', { name: 'Sign In' }).click();
        //await page.pause();
        await expect(page.getByRole('link', { name: 'Change your email' })).toBeVisible();
    })

    test('Empty username and password', async ({ page }) => {
        await page.goto('https://www.tcgplayer-qa.com/login?returnUrl=https://www.tcgplayer-qa.com/');
        await page.getByRole('button', { name: 'Sign In' }).click();
        await expect(page.getByText('Please enter a valid email')).toBeVisible();
        await expect(page.getByText('Please enter a valid password.')).toBeVisible();

    })

})



