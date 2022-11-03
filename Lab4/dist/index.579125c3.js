const container = document.getElementById("container");
function renderProduct(title, description, price, imageURL) {
    return `<div class="product">
            <img src="${imageURL}" />
            <span class="title">${title}</span>
            <span class="description">${description}</span>
            <span class="price">${price}</span>
         </div>
    `;
}
var product = document.createElement("div");
product.innerHTML = renderProduct("iPhone 9", "description", 399, "https://thumbs.dreamstime.com/b/apple-iphone-website-paris-france-nov-new-smartphone-store-oled-super-retina-display-103188752.jpg");
// now let's add the product in the DOM hierarchy
container.appendChild(product);
fetch("https://dummyjson.com/products").then((res)=>res.json()).then((json)=>{
    console.log(json);
});
fetch("https://dummyjson.com/products").then((res)=>res.json()).then((json)=>{
    for (const product of json.products){
        let productElement = document.createElement("div");
        productElement.innerHTML = renderProduct(product.title, product.description, product.price, product.thumbnail);
        container.appendChild(productElement);
    }
});
document.getElementById("addProduct").onclick = doFunction;
function addProduct(title, description, price) {
    fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            description: description,
            price: price
        })
    }).then((res)=>res.json()).then((json)=>{
        console.log(json);
    });
}

//# sourceMappingURL=index.579125c3.js.map
