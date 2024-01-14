// src/content/content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'PRODUCT_DATA') {
        console.log('Received Product Data:', message.data);
        // You can process the received product data here
    }
});
