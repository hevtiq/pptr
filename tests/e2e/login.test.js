//=====================================================================
// PUPPETEER - Login screen
// https://github.com/puppeteer/puppeteer/blob/main/docs/api.md
//=====================================================================

// bring puppeteer from node module as middleware
const puppeteer = require('puppeteer');

// bring envConfig from exporter module as middleware
const envConfig = require('../../config/envConfig');

// Login Page TestSuit
describe('Login Page', function(){
    // declare local variables for next process in scope
    let browser = null;
    let page = null;

    // HOOK which run once before all scripts will be start
    // mostly used for setup and configuration
    before(async function(){
        // create and populate a new browser instance
        browser = await puppeteer.launch(envConfig.headless.test);

        // create and populate a new page instance
        page = await browser.newPage();

        // set default timeout when run scripts
        await page.setDefaultTimeout(envConfig.timeout.step);
        await page.setDefaultNavigationTimeout(envConfig.timeout.navigation);
    });

    // HOOK which run once after all scripts was started
    after(async function(){
        // close browser instance
        await browser.close();
    });

    // TC-XXX
    it('Login Test - Invalid Credentials', async function(){
        await page.goto(envConfig.url.test.zeroWeb);
        await page.waitForSelector('#signin_button');
        await page.click('#signin_button');
        await page.waitForSelector('#login_form');
        await page.type('#user_login', 'invalid user');
        await page.type('#user_password', 'invalid password');
        await page.click('#user_remember_me');
        await page.click('input[type="submit"');
        await page.waitForSelector('.alert-error');
    });

    // TC-XXX
    it('Login Test - Valid Credentials', async function(){
        await page.goto(envConfig.url.test.zeroWeb);
        await page.waitForSelector('#signin_button');
        await page.click('#signin_button');
        await page.waitForSelector('#login_form');
        await page.type('#user_login', 'username');
        await page.type('#user_password', 'password');
        await page.click('#user_remember_me');
        await page.click('input[type="submit"');
        await page.waitForSelector('#settingsBox');
    });

});