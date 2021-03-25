// PUPPETEER - Feedback Page
// https://github.com/puppeteer/puppeteer/blob/main/docs/api.md
//=====================================================================

// bring puppeteer from node module as middleware
const { expect } = require('chai');
const puppeteer = require('puppeteer');

// bring envConfig from exporter module as middleware
const envConfig = require('../../config/envConfig');

// Payment Page TestSuit
describe('Payment Page', function(){
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

        // FRE-CONDITION: login before start payment steps
        await page.goto(`${envConfig.url.test.zeroWeb}/login.html`);
        await page.waitForSelector('#login_form');
        await page.type('#user_login', 'username');
        await page.type('#user_password', 'password');
        await page.click('#user_remember_me');
        await page.click('input[type="submit"');
    });

    // HOOK which run once after all scripts was started
    after(async function(){
        // close browser instance
        await browser.close();
    });

    // TC-XXX
    it('Display Payment Form', async function(){
        await page.waitForSelector('.nav-tabs');
        await page.click('#pay_bills_tab');
        await page.waitForSelector('.board');
    });

    // TC-XXX
    it('Make Payment', async function(){
        // select a option
        await page.select('#sp_payee', 'Apple');

        // select a option
        await page.select('#sp_account', 'Credit Card');

        // type value
        await page.type('#sp_amount', '500');

        // type date value and enter for datepicker
        await page.type('#sp_date', '2020-04-12');
        await page.keyboard.press('Enter');

        // type value
        await page.type('#sp_description', 'Payment for rent');

        // click to submit form
        await page.click('#pay_saved_payees');

        // await to verify submit status
        await page.waitForSelector('#alert_content');
    });
});