function flipcart() {

  // heading element
let heading;
const targetElement = document.getElementsByClassName('css-901oao css-16my406 r-1b43r93 r-1rsjblm')[1];
if (targetElement) {
   heading = targetElement.textContent.trim();
} else {
}


// price and discount
let discount;
let discountedPrice
const discountElement = document.getElementsByClassName('css-901oao r-1rsjblm r-11wrixw')[0];
const originalPriceElement = document.getElementsByClassName('css-901oao r-1rsjblm r-11wrixw')[2];
if (discountElement && originalPriceElement) {
  discount = discountElement.textContent.trim();
  discountedPrice = originalPriceElement.textContent.trim();
} else {
}


// rating
let averageStars;
const ratingsElement = document.querySelector('.css-901oao.css-bfa6kz.r-1kihuf0.r-1enofrn.r-1rsjblm.r-14yzgew.r-1vzi8xi');
if (ratingsElement) {
  averageStars = ratingsElement.textContent.trim();
} else {

}
const ratingElements = document.querySelectorAll('.css-1dbjc4n.r-1awozwy.r-tbmifm.r-1777fci.r-1d4mawv.r-16eto9q');
let avgrating;
if (ratingElements.length > 0) {
  const ratings = Array.from(ratingElements, element => {
    const canvasElement = element.querySelector('canvas');
    return canvasElement ? parseFloat(canvasElement.getAttribute('width')) / 24 : 0;
  });
  const totalRatings = ratings.length;
const sumRating = ratings.reduce((sum, rating) => sum + rating, 0);
 avgrating = totalRatings > 0 ? sumRating / totalRatings : 0;
}



// description
let highlights;
const highlightsElement = document.getElementsByClassName('css-1dbjc4n r-13awgt0')[57];
if (highlightsElement) {
  highlights = highlightsElement.textContent.trim();
}
const productDesc = {
  productDesc: highlights
};


const result = {
  discount: discount,
  discountedMRP: discountedPrice,
  heading: heading,
  avgrating: avgrating,
  totalcount: averageStars,
  prodDesc: productDesc
};
console.log(result);

}
  

