//=====================================================================
// PUPPETEER - Device Emulations for responsive testing
// https://github.com/puppeteer/puppeteer/blob/main/docs/api.md
// https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts
//=====================================================================

// bring puppeteer from node module as middleware
const puppeteer = require('puppeteer');

// bring envConfig from exporter module as middleware
const envConfig = require('../config/envConfig');

// Device Emulation TestSuit
describe('Device Emulation', () => {
    // declare local variables for next process in scope
    let browser = null;
    let page = null;

    // HOOK which run once before all scripts will be start
    // mostly used for setup and configuration
    before(async function(){
        // create and populate a new browser instance
        browser = await puppeteer.launch(envConfig.headless.false);

        // launch browser with incognito mode
        const context = await browser.createIncognitoBrowserContext();
        page = await context.newPage();

        // create and populate a new page instance
        // page = await browser.newPage();

        // set default timeout when run scripts
        await page.setDefaultTimeout(envConfig.timeout.step);
        await page.setDefaultNavigationTimeout(envConfig.timeout.navigation);
    });

    // HOOK which run once after all scripts was started
    after(async function(){
        // close browser instance
        await browser.close();
    });

    it('Desktop Device Test', async function(){
        await page.setViewport({ width: 1650, height: 1050 });
        await page.goto(envConfig.url.test.google);
        await page.waitForTimeout(1000);
    });

    it('Tablet Device Test', async function(){
        const tablet = puppeteer.devices['iPad landscape'];
        await page.emulate(tablet);
        await page.goto(envConfig.url.test.google);
        await page.waitForTimeout(1000);
    });

    it('Mobile Device Test', async function(){
        const mobile = puppeteer.devices['iPhone X'];
        await page.emulate(mobile);
        await page.goto(envConfig.url.test.google);
        await page.waitForTimeout(1000);
    });
});