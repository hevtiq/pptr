// bring puppeteer middleware to control Chrome headless
const puppeteer = require('puppeteer');

// bring image-downloader to download image from page
const download = require('image-downloader');

// bring make-dir to make directory
const makeDir = require('make-dir');

// bring cryptoJS to crypto
const cryptoJS = require('crypto-js');

// bring jsonfile to read json file
const jsonFile = require('jsonfile');

// const fs = require('fs');
const path = require('path');

// populate anonymous function
(async () => {
    // launch a browser instance with headless from the puppeteer
    const browser = await puppeteer.launch();

    // log to trace browser launched success or not
    console.log('Browser opened with headless');

    // create a new page instance in the browser instance
    const page = await browser.newPage();

    // make directory for save images
    const pathIMG = await makeDir('./src/img');

    // log to trace paths created success or not
    pathIMG && console.log('Images saved under:\r\n==>', pathIMG);

    // make multi directory
    // const paths = await Promise.all([
    //     makeDir('./src/img'),
    //     makeDir('./src/video')
    // ]);

    // object literal to store page want to download
    // const URLs = {
    //     domain1: [
    //         {
    //             url1: 'https://vietgiaitri.com/bo-suu-tap-gai-xinh-vong-mot-cang-tron-goi-cam-phan-104-20171230i3052736/',
    //             url2: '',
    //         },
    //     ],
    //     domain2: [],
    // };

    const file = path.join(__dirname, '../src/crawl/imageUrls.json');

    const URLs = jsonFile.readFile(file, function (err, data) {
        if (err) console.error(err);
        console.info('Json will be loaded:\r\n', data);
        return data;
    });

    // encrypt data from view
    let cipherData = cryptoJS.AES.encrypt(URLs.domain1[0].url1, 'vnpAce.Dev').toString();

    // log to trace data encrypted success or not
    cipherData && console.log('Data was encrypted to:\r\n==>', cipherData);

    // decrypt data to use
    let bytes = cryptoJS.AES.decrypt(cipherData, 'vnpAce.Dev');
    let originalData = bytes.toString(cryptoJS.enc.Utf8);

    // log to trace data decrypted success or not
    console.log('Data was decrypted to:\r\n==>', originalData);

    // config to download images
    const downloadOptions = {
        url: originalData,
        dest: pathIMG,
    };

    // navigate to page want to download image
    await page.goto(downloadOptions.url);

    // log to trace page navigated success or not
    console.log('Page navigated to:\r\n==>', downloadOptions.url);

    const imgLinks = await page.evaluate(() => {
        let imgElements = document.querySelectorAll('.photo > img');
        imgElements = [...imgElements];
        let imgLinks = imgElements.map(i => i.getAttribute('src'));
        return imgLinks;
    });
    console.log('Image list will be download:\r\n==>', imgLinks);

    // download image to the current folder
    await Promise.all(imgLinks.map(imgUrl => download.image({
        url: imgUrl,
        dest: pathIMG
        // dest: __dirname
    })));

    await browser.close();
})();