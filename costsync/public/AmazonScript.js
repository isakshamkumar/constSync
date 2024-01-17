// this is the output example we will get from amazon
// {
//     "discount": "-50%",
//     "discountedMRP": "449",
//     "heading": "Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black",
//     "avgrating": 4,
//     "totalcount": "70,809 global ratings",
//     "prodDesc": {
//         "productDesc": "Reliable Wireless Connection : Enjoy a wireless connection up to 10m away thanks to a plug-and-forget USB mini-receiver  Optical Tracking : The advanced optical tracking features enable ultra precise moves on almost any surface. Required: available USB port, Windows 7, 8, 10 or later, macOS 10.5 or later, Chrome OS, Linux Kernel 2.6+  12-Month Battery Life : Don’t worry about constant battery changes as this wired Logitech mouse has a 12-month battery life.           Quality Assured : Logitech are experts you can trust, and for more than 30 years we have created high-quality corded, cordless and Bluetooth products that help you get the most out of your Windows computer, laptop, Mac or Macbook  Note : In case of Wireless mouse, the USB receiver will be provided inside or along with the mouse"
//     }
// }

function Amazon() {

  // heading
  const HeadingElement = document.getElementById("title");
  const Heading = HeadingElement ? HeadingElement.textContent.trim() : null;


  // pice and discount
  const PriceElement = document.getElementById(
    "corePriceDisplay_mobile_feature_div"
  );
  const discountElement = PriceElement.querySelector(".savingsPercentage");
  const discountedMRPElement = PriceElement.querySelector(".priceToPay");
  const discount = discountElement ? discountElement.textContent.trim() : null;
  let discountedMRP = null;
  if (discountedMRPElement) {
    const discountedMRPText = discountedMRPElement.querySelector(
      ".a-price-whole"
    );
    discountedMRP = discountedMRPText
      ? discountedMRPText.textContent.trim()
      : null;
  }


  // product description
  const productDesc = document.getElementById("productDesc");
  let productInfo;
  if (productDesc) {
    const productDescContent = productDesc
      .querySelector(".a-expander-content")
      .textContent.trim();
    const systemRequirements = productDescContent.match(
      /System Requirements:(.*?)Technical Specifications:/s
    );
    const systemRequirementsText = systemRequirements
      ? systemRequirements[1].trim()
      : null;

    const technicalSpecifications = productDescContent.match(
      /Technical Specifications:(.*)/s
    );
    const technicalSpecificationsText = technicalSpecifications
      ? technicalSpecifications[1].trim()
      : null;
    productInfo = {
      productDesc: productDescContent,
      systemRequirements: systemRequirementsText,
      technicalSpecifications: technicalSpecificationsText,
    };
  } else {
    const featureBullets = document.getElementById("feature-bullets");
    if (featureBullets) {
      const featureBulletsContent = featureBullets
        .querySelector(".a-unordered-list")
        .textContent.trim();

      productInfo = {
        productDesc: featureBulletsContent,
      };

      console.log(productInfo);
    } else {
      console.log('Element with id "feature-bullets" also not found.');
    }
  }



  // reviews
  const Reviews = document.getElementById("cm_cr_dp_mb_rating_histogram");
  let averageStars = null;
  let totalRatingCount = null;
  if (Reviews) {
    const averageStarsElement = Reviews.querySelector(
      '[data-hook="average-stars-rating-anywhere"]'
    );
    averageStars = averageStarsElement
      ? parseFloat(
          averageStarsElement
            .getAttribute("class")
            .match(/a-star-(\d+(?:-\d+)*)/)[1]
        )
      : null;

    const totalRatingCountElement = Reviews.querySelector(
      '[data-hook="total-rating-count"]'
    );
    totalRatingCount = totalRatingCountElement
      ? totalRatingCountElement.textContent.trim()
      : null;
  }


  
  // final result
  const result = {
    discount: discount,
    discountedMRP: discountedMRP,
    heading: Heading,
    avgrating: averageStars,
    totalcount: totalRatingCount,
    prodDesc: productInfo,
  };

  console.log(result);
}
//   const apiUrl = 'https://apiurl.com/api'; 

//   fetch(apiUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(result),
//   })
//     .then(response => response.json())
//     .then(responseData => {
//       console.log('API Response:', responseData);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }
Amazon();