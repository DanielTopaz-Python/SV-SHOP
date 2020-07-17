let itemsList = [{
            picture: "./monitor_settings_2.png",
            name: "Computer",
            price: 100,
            id: 1
        },
        {
            picture: "./desktop_analytics_2.png",
            name: "Monitor",
            price: 70,
            id: 2
        },
        {
            picture: "./monitor_coding_2.png",
            name: "Premium Monitor",
            price: 80,
            id: 3
        },
        {
            picture: "./server_2_2.png",
            name: "Servers",
            price: 500,
            id: 4
        },];

let shoppingCart = [];

function moveToShoppingCart (e) {
    e.target.parentNode.remove();
    const found = itemsList.find(element => element.id == e.target.id);
    shoppingCart.push(found)
};
 
// <div class="box zone">
//      <img src="./img/files_2.png">
//      <p class = "item">Cimputer</p>
//      <p class = "price">Price: $100</p>
//      <p class = "buy-now">Buy Now/p>
// </div>

function displyItem (listItem) {    
    let itemsContainer = document.getElementById("items-list");
    let div = document.createElement("div");
    div.classList.add("box");
    div.classList.add("zone");
    let img = document.createElement("img");
    img.setAttribute("src", listItem.picture);
    let item = document.createElement("p");
    item.classList.add("item");
    item.innerText = listItem.name;
    let price = document.createElement("p");
    price.classList.add("price");
    price.innerText = `$${listItem.price}`;
    let buy = document.createElement("p");
    buy.classList.add("buy-now");
    buy.innerText = 'Buy Now'
    buy.setAttribute("id", listItem.id)
    buy.addEventListener("click", moveToShoppingCart);
    div.appendChild(img);
    div.appendChild(item);
    div.appendChild(price);
    div.appendChild(buy);
    itemsContainer.appendChild(div);
};

function displayItemsList () {
    const numberOfItems = itemsList.length;
    for (let i = 0; i < numberOfItems; i++) {
        displyItem(itemsList[i]);
    }
};

function calculateCart() {
    const numberOfItems = shoppingCart.length;
    let sumToPay = 0;
    for (let i = 0; i < numberOfItems; i++) {
        sumToPay += shoppingCart[i].price;
    }
    return sumToPay;
};

function displayCartItem(item) {
    let itemInfo = document.createElement("p");
    itemInfo.classList.add("item");
    itemInfo.innerText = `${item.name}   $${item.price}`;
    return itemInfo;
}

function clearContainer() {
    let itemsContainer = document.getElementById("items-list");
    itemsContainer.innerHTML = '';
};

function bought() {
    clearContainer();
    let itemsContainer = document.getElementById("items-list");
    itemsContainer.innerHTML = 'Purchase Was Successful';
};

function displayCart() {
    let itemsContainer = document.getElementById("items-list");
    itemsContainer.classList.add("cart-conatainer");
    let div = document.createElement("div");
    div.classList.add("box");
    div.classList.add("zone");
    div.classList.add("cart-zone");
    const numberOfItems = shoppingCart.length;
    for (let i = 0; i < numberOfItems; i++) {
        div.appendChild(displayCartItem(shoppingCart[i]));
    };
    itemsContainer.appendChild(div);
    let sumToPay = calculateCart();
    let total = document.createElement("p");
    total.innerText = `Total: $${sumToPay}`;
    div.appendChild(total);
    let buyButton = document.createElement("button");
    buyButton.innerText = 'Buy';
    buyButton.addEventListener("click", bought);
    div.appendChild(buyButton);
};

function goToCArt () {
    let footer = document.querySelector("footer");
    footer.remove();
    clearContainer();
    displayCart();
};

displayItemsList();

