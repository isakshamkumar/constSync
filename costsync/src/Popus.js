// src/Popup.js
import React, { useState, useEffect } from 'react';

const Popup = () => {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        // Set up a listener for messages from background script
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message.type === 'PRODUCT_DATA') {
                setProductData(message.data);
            }
        });
    }, []);

    return (
        <div>
            {productData ? (
                <div>
                    <h2>Product Information</h2>
                    <p>Title: {productData.title}</p>
                    <p>Price: {productData.price}</p>
                    {/* Add more properties as needed */}
                </div>
            ) : (
                <p>No product data available.</p>
            )}
        </div>
    );
};

export default Popup;
