
const cart = [];
const cartElement = document.getElementsByClassName("theCart");
const templateElement = document.getElementById("product-template");
const totalPriceElement = document.getElementById("total");




//the functions for shopping cart page

function onload(){

    var cartItemsString = localStorage.getItem("savedCart")
   // check if value exists in local storage
    if (cartItemsString !== null) {
    var Added = JSON.parse(cartItemsString) // converting stored string to object
    for (var i=0;i<Added.length;i++){
        addProductHTML(Added[i].name, Added[i].price, Added[i].quantity, Added[i].glazing,i, Added[i]);
    }
    var removeCartItemButtons = document.getElementsByClassName('btn-remove-item')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', function(event){
            const parent = event.target.parentNode.parentNode.parentNode;
            const productName = parent.querySelector('.product-name').innerText;
            removeItem(productName,Added);
            const parentHTML=event.target.parentElement.parentElement.parentElement;
            parentHTML.remove();
            });
        }
        document.getElementById("total-quantity").textContent=Added.length;
    }
}
function removeItem(name,cartItems) {
    
    console.log(cartItems);
      // find the index of the input object in the list
      var ind = cartItems.findIndex(function (item) {
        return item.name === name;
      })
      if (ind !== -1) {
        // remove item from the list
        cartItems.splice(ind, 1)
        // update the stored value
        localStorage.setItem("savedCart", JSON.stringify(cartItems))
        // re-render the page to reflect changes
       
        onload();
      }
    }
  

function addProductHTML(productName, productPrice, productQt, productGlazing,i, cartItem) {

    const productElement = templateElement.cloneNode(true);
    
    productElement.id = "";


    //console.log(productElement);
    const imageElement = productElement.getElementsByClassName("product-img")[0];
    //console.log(imageElement);
    imageElement.setAttribute('src', 'asset/' + productName + '.png');

    const nameElement = productElement.getElementsByClassName("product-name")[0];
    nameElement.innerHTML = productName;

    const glazingElement = productElement.getElementsByClassName("product-glazing")[0];
    glazingElement.innerHTML = productGlazing;

    const priceElement = productElement.getElementsByClassName("product-price")[0];
    priceElement.innerHTML =  productPrice;

    const QtElement = productElement.getElementsByClassName("product-Qt")[0];
    QtElement.setAttribute('src', 'asset/' + productQt + '-ON.png');

    cartElement[0].appendChild(productElement);

}
onload();