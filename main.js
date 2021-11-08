var Roll1=document.getElementById("Qt1");
var Roll2=document.getElementById("Qt2");
var Roll4=document.getElementById("Qt4");
var Roll6=document.getElementById("Qt6");
var buttonImages = [Roll1, Roll2, Roll4, Roll6];
Roll1.qt = 1;
Roll2.qt = 2;
Roll4.qt = 4;
Roll6.qt = 6;

var button=document.getElementById("addToB");
var x;

var cart = localStorage.getItem("savedCart");
if (cart == null) {cart = []}
else {cart = JSON.parse(cart)};





//Change quantity button apperance

Roll1.addEventListener('click',function(Roll1){
    Roll1.target.classList.toggle('Qt1-on');
    // turn off other buttons
    document.getElementById('Qt2').classList.replace('Qt2-on', 'Qt2-off');
    document.getElementById('Qt4').classList.replace('Qt4-on', 'Qt4-off');
    document.getElementById('Qt6').classList.replace('Qt6-on', 'Qt6-off');
})

Roll2.addEventListener('click',function(Roll2){
    Roll2.target.classList.toggle('Qt2-on');
    // turn off other buttons
    document.getElementById('Qt1').classList.replace('Qt1-on', 'Qt1-off');
    document.getElementById('Qt4').classList.replace('Qt4-on', 'Qt4-off');
    document.getElementById('Qt6').classList.replace('Qt6-on', 'Qt6-off');
})

Roll4.addEventListener('click',function(Roll4){
    Roll4.target.classList.toggle('Qt4-on');
    // turn off other buttons
    document.getElementById('Qt2').classList.replace('Qt2-on', 'Qt2-off');
    document.getElementById('Qt1').classList.replace('Qt1-on', 'Qt1-off');
    document.getElementById('Qt6').classList.replace('Qt6-on', 'Qt6-off');
})

Roll6.addEventListener('click',function(Roll6){
    Roll6.target.classList.toggle('Qt6-on');
    // turn off other buttons
    document.getElementById('Qt2').classList.replace('Qt2-on', 'Qt2-off');
    document.getElementById('Qt4').classList.replace('Qt4-on', 'Qt4-off');
    document.getElementById('Qt1').classList.replace('Qt1-on', 'Qt1-off');
})

for (i = 0; i< 4; i++){
    image = buttonImages[i];
    image.toggleNum = 1;
}

for (i = 0; i< 4; i++){
    image = buttonImages[i];
    image.onclick= function(){
        x += this.qt * this.toggleNum;
        x.toggleNum *= -1
        return this.qt};
}

function checkQt() {
    let quantity=document.forms[0];
    let txt="";
    let i;
    for (i = 0; i< quantity.length; i++){
        if(quantity[i].checked){
            txt= txt+ quantity[i].value;
        }
    }
    document.getElementById("total-quantity").textContent=txt;
    return txt;
}

function getSelectedGlaze (){
    var selected=document.getElementById("list").value;
    return selected;
}

function roll (productName, productPrice, productQt, productGlazing){
    this.name=productName;
    this.price=productPrice;
    this.quantity=productQt;
    this.glazing=productGlazing;
}

function createItem(){
    var name=document.getElementById("Name");
    var price=document.getElementById("priceTag");
    return new roll(name.innerText,price.innerText,checkQt(),getSelectedGlaze ());
    
}

button.addEventListener('click', function(){
    const item= createItem();
    cart.push(item);
    localStorage.setItem("savedCart", JSON.stringify(cart));
    update();
    console.log(item);

})

function update(){
    document.getElementById("total-quantity").textContent=cart.length;
}
update();


    