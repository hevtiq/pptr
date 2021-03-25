// PUPPETEER - Feedback Page
// https://github.com/puppeteer/puppeteer/blob/main/docs/api.md
//=====================================================================

// bring puppeteer from node module as middleware
const { expect } = require('chai');
const puppeteer = require('puppeteer');

// bring envConfig from exporter module as middleware
const envConfig = require('../../config/envConfig');

// Feedback Page TestSuit
describe('Feedback Page', function(){
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
    it('Display Feedback Form', async function(){
        await page.goto(envConfig.url.test.zeroWeb);
        await page.waitForSelector('#feedback');
        await page.click('#feedback');
    });

    // TC-XXX
    it('Submit Feedback Form', async function(){
        await page.waitForSelector('form');
        await page.type('#name', 'Name');
        await page.type('#email', 'test.dev');
        await page.type('#subject', 'Subject');
        await page.type('#comment', 'Comment Something');
        await page.click('input[type="submit"]');
    });

    // TC-XXX
    it('Display Results Page', async function(){
        await await page.waitForSelector('#feedback-title');
        const url = await page.url();
        expect(url).to.include('/sendFeedback.html');
    });

});