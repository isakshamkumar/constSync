function mesho() {

  // heading element
  let heading;
  const headingElement = document.getElementsByClassName(
    "sc-bcXHqe fctQgp ShippingInfoMobilestyles__TitleShareWishlistCard-sc-b8wrmp-11 byAkST ShippingInfoMobilestyles__TitleShareWishlistCard-sc-b8wrmp-11 byAkST"
  )[0];
  console.log(headingElement);
  if (headingElement) {
    heading = headingElement.textContent.trim();
    console.log(heading);
  }


  // description element
  let description;
  const descriptionElement = document.getElementsByClassName(
    "sc-bcXHqe kCsIuH ProductDescription__DetailsCardStyled-sc-1l1jg0i-0 cgIMmu ProductDescription__DetailsCardStyled-sc-1l1jg0i-0 cgIMmu"
  )[0];
  if (descriptionElement) {
    description = descriptionElement.textContent.trim();
    console.log(description);
  }


  // price element
  let price;
  const priceElement = document.getElementsByClassName(
    "sc-dkrFOg igKKTf"
  )[0];
  if (priceElement) {
    price = priceElement.textContent.trim();
    console.log(price);
  }


  // rating element
  let Rating;
  const RatingElement = document.getElementsByClassName(
    "sc-bcXHqe fctQgp CountWrapper__LeftSection-sc-fa0m6i-1 halpYD CountWrapper__LeftSection-sc-fa0m6i-1 halpYD"
  )[0];
  if (RatingElement) {
    Rating = RatingElement.textContent.trim();
  }

  // discount element
  let discount;
  const discountElement = document.getElementsByClassName(
    "sc-dkrFOg izkHpW"
  )[0];
    if (discountElement) {
        discount = discountElement.textContent.trim();
    }

    
  const result = {
    discount: discount,
    discountedMRP: price,
    heading: heading,
    avgrating: Rating,
    prodDesc: description,
  };
  console.log(result);
}
