// src/background/background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension Installed');
});
console.log('bakgrounddddddddddddd');

chrome.webNavigation.onCompleted.addListener(async (details) => {
    const url = details.url;
    console.log(url, 'urlllll');
    const productData = await scrapeProductData(url);
    console.log(productData, 'productsdata from back');

    chrome.tabs.sendMessage(details.tabId, { type: 'PRODUCT_DATA', data: productData });
}, { url: [{ schemes: ['http', 'https'] }] });

const scrapeProductData = async (url) => {
    console.log('scrapeProductData');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const websiteConfig = await getWebsiteConfig(url);
    if (!websiteConfig) {
        console.error('Website not supported');
        return null;
    }

    const productData = await page.evaluate((config) => {
        // const products = document.querySelectorAll(config.selectors.product);
        // console.log(products, 'productssssssssss');
        const data = [];

        // products.forEach((product) => {
        // const title = product.querySelector(config.selectors.title).textContent.trim();
        const title = document.querySelector(config.selectors.title).textContent.trim();
        // const price = product.querySelector(config.selectors.price).textContent.trim();
        const price = document.querySelector(config.selectors.price).textContent.trim();

        data.push({ title, price });
        // });
        console.log(data, 'dataa');
        return data;
    }, websiteConfig);

    await browser.close();
    return productData;
};

const getWebsiteConfig = async (url) => {
    const response = await fetch(chrome.runtime.getURL('config.json'));
    const config = await response.json();
    console.log('config.json', config);

    const matchingWebsite = Object.entries(config.websites).find(([key, value]) => url.includes(value.url));
    console.log(matchingWebsite, 'matchingwebsite');
    return matchingWebsite ? matchingWebsite[1] : null;
};
