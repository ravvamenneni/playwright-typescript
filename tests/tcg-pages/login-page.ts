import { type Page, expect, type Locator } from "@playwright/test";
const { context } = require('playwright');

export class Login {
    readonly title: Locator;

    constructor(public page: Page) {
       this.title = page.locator('.title');
    }
    
    async loginWithValidUsernamPassword(){
        await this.page.fill('//input[@name="Email"]', "AutoGiftCardUser@auto.com");
        await this.page.fill('//input[@name="Password"]', "P@ssw0rd!");
    }
    async GoToHomepage(username: string, password: string){
        await this.page.goto('');
    }
}

//export default Login;