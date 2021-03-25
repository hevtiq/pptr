// PUPPETEER - Currency Exchange Page
// https://github.com/puppeteer/puppeteer/blob/main/docs/api.md
//=====================================================================

// bring puppeteer from node module as middleware
const { expect } = require('chai');
const puppeteer = require('puppeteer');

// bring envConfig from exporter module as middleware
const envConfig = require('../../config/envConfig');

// Currency Exchange Page TestSuit
describe('Currency Exchange Page', function(){
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
    it('Display Currency Exchange Form', async function(){
        // wait for DOM rendered
        await page.waitForSelector('.nav-tabs');

        // click on tab
        await page.click('#pay_bills_tab');

        // wait for sub-tab opened
        await page.waitForSelector('#tabs > ul > li:nth-child(3) > a');

        // click on sub-tab
        await page.click('#tabs > ul > li:nth-child(3) > a');

        // wait for content in tab opened
        await page.waitForSelector('.board');
    });

    // TC-XXX
    it('Exchange Currency', async function(){
        // select a option
        await page.select('#pc_currency', 'GBP');

        // type money
        await page.type('#pc_amount', '800');

        // click radio button
        await page.click('#pc_inDollars_true');

        // click button
        await page.click('#purchase_cash');

        // await to verify submit status
        await page.waitForSelector('#alert_content');
    });
});