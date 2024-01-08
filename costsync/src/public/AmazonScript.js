
function extractValues() {

    const headingElement = document.getElementById("corePriceDisplay_mobile_feature_div");
    const discountElement = headingElement.querySelector('.savingsPercentage');
    const discountedMRPElement = headingElement.querySelector('.priceToPay');
    const discount = discountElement ? discountElement.textContent.trim() : null;

    let discountedMRP = null;
    if (discountedMRPElement) {
        const discountedMRPText = discountedMRPElement.querySelector('.a-price-whole');
        discountedMRP = discountedMRPText ? discountedMRPText.textContent.trim() : null;
    }

    const result = {
        discount: discount,
        discountedMRP: discountedMRP
    };

    console.log(result); 
}
extractValues(); 
