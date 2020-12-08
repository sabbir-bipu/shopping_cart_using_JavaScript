// Define UI Elements

let addToCartBtn = document.querySelectorAll('.addToCartBtn');
let removeCartItemButton = document.querySelectorAll('.rmvbtn');
let emptyCartButton = document.querySelectorAll('.empty-cart')[0];
let cartItems = document.querySelectorAll('#cart-items')[0];


// Define Event Listeners

// Add To Cart
for (let i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener('click', addToCart)
}

// Remove From Cart

for (let i = 0; i < removeCartItemButton.length; i++) {
    removeCartItemButton[i].addEventListener('click', removeItemFromCart)
}

//Empty Cart
emptyCartButton.addEventListener('click', emptyCart);



// Define Functions

//Add To Cart Function

function addToCart(event) {
    let clickedButton = event.target
    let product = clickedButton.parentElement.parentElement;
    let title = product.querySelectorAll('.product-name')[0].innerText;
    let price = product.querySelectorAll('.product-price')[0].innerText;
    addProductToCart(title, price);
}

function addProductToCart(title, price) {
    let cartRow = document.createElement('tr');
    // cartRow.classList.add('cart-row')
    // cartItems = document.querySelectorAll('#cart-items')[0];
    let cartRowContents = `
        <td class="product-name">${title}</td>
        <td class="product-price">${price}</td>
        <td>
            <button class="btn btn-danger rmvbtn">
                Remove From Cart
            </button>
        </td>`;
    cartRow.innerHTML = cartRowContents;
    cartItems.appendChild(cartRow);
    cartRow.querySelectorAll('.rmvbtn')[0].addEventListener('click', removeItemFromCart);
}

//Remove From Cart Function

function removeItemFromCart(event) {
    currentItem = event.target;
    if (confirm('Are You Sure?')) {
        currentItem.parentElement.parentElement.remove();
    }
}

//Empty Cart Function

function emptyCart(event) {
    if (confirm('Are You Sure?')) {
        cartItems.innerHTML = '';
    }
}