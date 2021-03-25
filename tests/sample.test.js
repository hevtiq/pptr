//=====================================================================
// PUPPETEER
// https://github.com/puppeteer/puppeteer/blob/main/docs/api.md
//=====================================================================

// bring puppeteer from node module as middleware
const puppeteer = require('puppeteer');

// bring chai expect from node module as middleware
const expect = require('chai').expect;

// bring helpers from exported module as middleware
const { click, getText, getCount, shouldNotExist } = require('../lib/helpers');

// bring envConfig from exported module as middleware
const envConfig = require('../config/envConfig');

// Sample TestSuit
describe('My Fist Puppeteer Test', () => {
    // declare local variables for next process in scope
    let browser = null;
    let page = null;

    // HOOK which run once before all scripts will be start
    // mostly used for setup and configuration
    before(async function(){
        // create and populate a new browser instance
        browser = await puppeteer.launch(envConfig.headless.false);

        // create and populate a new page instance
        page = await browser.newPage();

        // set default timeout when run scripts
        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(20000);
    });

    // HOOK which run once after all scripts was started
    after(async function(){
        // pause 3s to view last result
        await page.waitForTimeout(3000);

        // close browser instance
        await browser.close();
    });

    // HOOK which run before each script/test step (it(){}) will be start
    beforeEach(async function(){

    });

    // HOOK which run after each script/test step (it(){}) was started
    afterEach(async function(){

    });

    it('should launch the browser', async function () {
        // create and populate a new browser instance
        // const browser = await puppeteer.launch(envConfig.nonHeadless);
        // const browser = await puppeteer.launch(envConfig.hasHeadless);

        // create and populate a new page instance
        // const page = await browser.newPage();

        // V1
        // ============================================================
        // navigate to a page
        // await page.goto('http://example.com');

        // pause 3s before next process
        // await page.waitForTimeout(3000);

        // wait for DOM rendered completely
        // await page.waitForSelector('h1');

        // reload page
        // await page.reload();

        // navigate to a page
        // await page.goto('https://dev.to/');

        // pause 3s before next process
        // await page.waitForTimeout(3000);

        // wait for DOM rendered completely
        // await page.waitForSelector('.site-logo');

        // pause 3s before next process
        // await page.waitForTimeout(3000);

        // go back page
        // await page.goBack();

        // wait for DOM rendered completely
        // await page.waitForSelector('h1');

        // go forward page
        // await page.goForward();

        // wait for DOM rendered completely
        // await page.waitForSelector('.site-logo');

        // V2
        //================================================================
        // navigate to a page
        // await page.goto('https://devexpress.github.io/testcafe/example/');

        // type name in input name field, delay 200ms each char inputted
        // await page.type('#developer-name', 'vnPace', envConfig.delayTimeDefault);

        // wait 1s to for next process
        // await page.waitForTimeout(1000);

        // click on checkbox with 0ms delay and 1 click
        // await page.click('#tried-test-cafe', { del ay: 0, clickCount: 1 });

        // select an option dropdown
        // await page.select('#preferred-interface', 'JavaScript API');

        // type comments in textarea
        // await page.type('#comments', envConfig.blog.name, envConfig.delayTimeDefault);

        // click button submit
        // await page.click('#submit-button');

        // wait for DOM rendered
        // await page.waitForSelector('.result-content');

        // V3
        //===============================================================
        // set default timeout when run scripts
        // await page.setDefaultTimeout(10000);
        // await page.setDefaultNavigationTimeout(20000);

        // navigation to page
        await page.goto('http://example.com/');

        // wait for DOM rendered with Xpath for more advanced
        await page.waitForXPath('//h1');

        // create a empty object literal
        let pageProp = {};
        let pageDom = {};
        let pageInfo = {};

        // grab and populate title, url property
        const title = await page.title();
        const url = await page.url();

        // grab and populate h1 element ($eval = document.querySelector(selector))
        // const h1Text = await page.$eval('h1', el => el.textContent);
        const h1Text = await getText(page, 'h1');

        // count and populate p element ($eval = document.querySelectorAll(selector))
        // const pCount = await page.$$eval('p', el => el.length);
        const pCount = await getCount(page, 'p');

        // assertions grabbed data with chai expect
        expect(title).to.be.a('string', 'Example Domain');
        expect(url).to.include('example.com');
        expect(h1Text).to.be.a('string', 'Example Domain');
        expect(pCount).to.equal(2);

        // add title, url to pageInfo object
        pageProp.title = title;
        pageProp.url = url;
        pageDom.h1Text = h1Text;
        pageDom.numberOfPTag = pCount;
        pageInfo.prop = pageProp;
        pageInfo.dom = pageDom;

        // log to trace result
        console.log('pageInfo', pageInfo);

        // navigate to page
        await page.goto('http://zero.webappsecurity.com/index.html');

        // wait for DOM rendered
        // await page.waitForSelector('#searchTerm');

        // type keyword to search input filed
        // await page.type('#searchTerm', 'Hello World');

        // press ENTER to start search (simulation), with a delay between the keystrokes
        // await page.keyboard.press('Enter', { delay: 10 });

        // navigate to page
        await page.goto('http://zero.webappsecurity.com/index.html');

        // wait for DOM rendered
        // check element existing
        // await page.waitForSelector('#signin_button');

        // click on sign in button
        // await page.click('#signin_button');
        await click(page, '#signin_button');

        // wait for sign button disappear
        // await page.waitForTimeout(() => !document.querySelector('#signin_button'))

        // wait for sign button disappear with hidden, and override 30000ms => 3000ms
        // check element not existing
        // await page.waitForSelector('#signin_button', { hidden: true, timeout: 3000 });
        await page.waitForTimeout(2000);
        await shouldNotExist(page, '#signin_button');

        // END
        //===============================================================
        // pause 3s to view last result
        // await page.waitForTimeout(3000);

        // close browser instance
        // await browser.close();
    });
});