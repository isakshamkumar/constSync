function olx() {
    // heading
  console.log("hello");
  const headingElement = document.querySelector("._37JMy");
  const heading = headingElement ? headingElement.textContent.trim() : null;

    // price
    const priceElement = document.querySelector("._2FxzA");
    const price = priceElement ? priceElement.textContent.trim() : null;

 // description
const descriptionElement = document.querySelector("[data-aut-id='itemDescriptionContent']");
const desc = descriptionElement ? descriptionElement.textContent.trim() : null;


const result = {
    heading: heading,
    price: price,
    desc: desc
};
console.log(result);
}
