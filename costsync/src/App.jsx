// src/Popup.js
import React, { useState, useEffect } from "react";

const Popup = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    console.log("Popup component loaded");

    // Example of listening for messages from the background script
    const onMessage = (message) => {
      if (message.type === "PRODUCT_DATA") {
        setProductData(message.data);
      }
    };

    chrome.runtime.onMessage.addListener(onMessage);

    // Clean up: remove event listener when component unmounts
    return () => {
      chrome.runtime.onMessage.removeListener(onMessage);
    };
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      {productData ? (
        <div>
          <h2>Product Information</h2>
          {productData.map((product, index) => (
            <div key={index}>
              <p>Title: {product.title}</p>
              <p>Price: {product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No product data available.</p>
      )}
    </div>
  );
};

export default Popup;
