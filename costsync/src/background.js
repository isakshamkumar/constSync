// src/background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension Installed');

    // Set up a listener for web navigation events
    chrome.webNavigation.onCompleted.addListener(async (details) => {
        // Check if the URL is from an e-commerce website (modify as needed)
        if (details.url.includes('ecommerce-site.com')) {
            // Use Puppeteer to scrape product data
            const productData = await scrapeProductData(details.url);

            // Send the scraped data to content script
            chrome.tabs.sendMessage(details.tabId, { type: 'PRODUCT_DATA', data: productData });
        }
    }, { url: [{ schemes: ['http', 'https'] }] });
});

const scrapeProductData = async (url) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Extract relevant product data (modify according to your needs)
    const productData = await page.evaluate(() => {
        return {
            title: document.title,
            price: document.querySelector('.product-price').textContent.trim(),
            // Add more properties as needed
        };
    });

    await browser.close();
    return productData;
};
