// Viewport
// https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts

const envConfig = {
    headless: {
        true: {
            headless: true,
            slowMo: 1000,
            devtools: true,
        },
        false: {
            headless: false,
            slowMo: 10,
            devtools: false,
        },
        test: {
            headless: true,
            slowMo: 0,
            devtools: false,
            ignoreHTTPSErrors: true,
            timeout: 0,
        }
    },
    delay: {
        default: 0,
        human: 250,
    },
    timeout: {
        default: 3000,
        step: 10000,
        navigation: 20000,
    },
    device: [
        {
            name: 'iPhone 6',
            userAgent:
                'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
            viewport: {
                width: 375,
                height: 667,
                deviceScaleFactor: 2,
                isMobile: true,
                hasTouch: true,
                isLandscape: false,
            },
        },
        {
            name: 'iPhone 6 landscape',
            userAgent:
                'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
            viewport: {
                width: 667,
                height: 375,
                deviceScaleFactor: 2,
                isMobile: true,
                hasTouch: true,
                isLandscape: true,
            },
        },
    ],
    browser: {},
    os: {},
    url: {
        test: {
            google: 'https://www.google.com',
            devTo: 'https://dev.to',
            example: 'https://www.example.com',
            zeroWeb: 'http://zero.webappsecurity.com',
        }
    },
    viewport: {
        default: {},
        iPhone6: 'iPhone 6',  // 375 x 667
        iPhoneX: 'iPhone X',  // 375 x 812
        iphone11: 'iPhone 11',  // 414 x 896
        iPhone12: 'iPhone 12',  // 390 x 844
        iPadMini: 'iPad Mini',  // 768 x 1024
        iPadPro: 'iPad Pro',  // 1024 x 1366
        Nexus5X: 'Nexus 5X',  // 411 x 731
        GalaxyS7: 'Samsung Galaxy S7',  // 360 x 640,
        GalaxyS9: 'Samsung Galaxy S9',  // 360 x 740
    },
    msg: {},
    debug: {},
    img: {},
    file: {},
    index: {},
    element: {
        heading: {},
        button: {},
        checkbox: {},
        dropdown: {},
        pagination: {},
        link: {},
        toast: {},
        modal: {},
        image: {},
    },
    event: {
        enter: {},
        click: {},
        select: {},

    },
    css: {},
    cookie: {},
    session: {},
    auth: {},
    // hasHeadless: {
    //     headless: true,
    //     slowMo: 1000,
    //     devtools: true,
    // },
    // nonHeadless: {
    //     headless: false,
    //     slowMo: 10,
    //     devtools: false,
    // },
    // delayTimeDefault: {
    //     delay: 0,
    // },
    // delayTimeHuman: {
    //     delay: 250,
    // },
    blog: {
        name: 'Just Developer',
        author: 'Viet Hoang',
    }
};

module.exports = envConfig;