// var firebaseConfig = {
//    apiKey: "AIzaSyCbEQ6-mdgI4adk1YzKw-ZlY1ovSE8UUgE",
//    authDomain: "contactform-2a2e4.firebaseapp.com",
//    databaseURL: "https://contactform-2a2e4-default-rtdb.firebaseio.com",
//    projectId: "contactform-2a2e4",
//    storageBucket: "contactform-2a2e4.appspot.com",
//    messagingSenderId: "886227387058",
//    appId: "1:886227387058:web:15e480f7b8830d6fddffab"
//  };
 
//  // Initialize Firebase
//  var app = firebase.initializeApp(firebaseConfig);
        
//    var db = firebase.database().ref('mesg/')

function swapPic(eId, newPic) {
     document.getElementById(eId).src = newPic;
         
     }
function unswapPic(eId, newPic) {
     document.getElementById(eId).src = newPic;
     }



//      function num(){
//          var num= document.getElementById('mynum').value
//          if(num.length<11){
//             alert("enter your correct number")
//          }
//          else if(num.length>11){
//             alert("enter your correct number")
//          }
//         //  console.log(num);
//      }

// function email(){
//    var emails = document.getElementById('e-mail')
//    var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
//    if(!(emails.matches(regex))){
//       alert("Invalid email address")
//       return false;
//    }
// }
   


   //   firebase.database().ref('message').on("child_added",function(data){
   //       console.log(data);
   //   })

   //  function add(){
   //          var name = document.getElementById('name').value
   //          var email = document.getElementById('e-mail').value
   //          var numb = document.getElementById('mynum').value
   //          var text = document.getElementById('txt').value
   //          var key = db.push().key

   //         db.child(key).set({
   //             name : name,
   //             email : email,
   //             number : numb,
   //             text : text,
   //             key : key
   //         })
           
        
   //      }




let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.carto')
let closecart = document.querySelector('#close-cart')

// opens cart 
cartIcon.onclick =  () => {
  cart.classList.add("active");
}

// remove cart 
closecart.onclick =  () => {
  cart.classList.remove("active");
}

// cart making js 

if (document.readyState == "loading"){
  document.addEventListener('DOMContentLoaded', ready)
}
else{
  ready();
}

// Making function 

function ready(){
  // remove items from cart 
  var removecartbutn = document.getElementsByClassName('cart-remove')
  console.log(removecartbutn);

  for(var i = 0; i < removecartbutn.length; i++){
    var button = removecartbutn[i]
    button.addEventListener('click', removeCartItem)
  } 

  // quantity changes
  var quantityInputs = document.getElementsByClassName('cart-quantity')
  for(var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }

  // Add to cart  
  var addCart = document.getElementsByClassName('add-carts')
  for(var i = 0; i < addCart.length; i++){
    var button = addCart[i];
    button.addEventListener('click', addCartClicked) 
  }
  // Buy button work 
  document
  .getElementsByClassName("btn-buy")[0]
  .addEventListener('click', buybuttonclicked)

  
}

// Buy button 
function buybuttonclicked(){
  alert("your order is placed");
  var cartContent = document.getElementsByClassName('cart-content')[0]
  while (cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild)
  }
  updatetotal()
}

// Remove itms from cart 
function removeCartItem(event){
  var buttonclick = event.target; 
  buttonclick.parentNode.remove();
  updatetotal();
} 

//Quantity change
function quantityChanged(event){
  var input = event.target
  if(isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updatetotal()
}

// Add to cart
function addCartClicked(event){
  var button = event.target
  var shopProducts = button.parentNode
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText
  var price = shopProducts.getElementsByClassName("price-title")[0].innerText
  addProductToCart(title, price, productImg); 
  var productImg = shopProducts.getElementsByClassName("proImg")[0].src;
  updatetotal();
}


function addProductToCart(title,price,productImg){
  var cartShopBox = document.createElement('div') 
  cartShopBox.classList.add('cart-box')
  var cartItems = document.getElementsByClassName('cart-content')[0];
  var cartItemsNames = cartItems.getElementsByClassName('card-product-title')

  for(var i = 0; i < cartItemsNames.length; i++){
    if(cartItemsNames[i].innerText == title){
      alert('you have already this to cart')
      return;
    }
  }
  
  var cartboxContent = `
             <img src="${productImg}" alt="" class="cart-img">
             <div class="detail-box">
             <div class="card-product-title">${title}</div>
             <div class="cart-price">${price}</div>
             <input type="number" value="1" class="cart-quantity">
             </div>
             <!-- Remove Cart  -->
             <i class="cart-remove  bi bi-dash-circle" ></i>`;
             
             cartShopBox.innerHTML = cartboxContent;
             cartItems.append(cartShopBox)
             cartShopBox
             .getElementsByClassName('cart-remove')[0]
             .addEventListener('click', removeCartItem)
             cartShopBox
             .getElementsByClassName('cart-quantity')[0]
             .addEventListener('change', quantityChanged)
             
            }
             
             
             // Update total 
             
function updatetotal(){
  var cartContent = document.getElementsByClassName('cart-content')[0]
  var cartBoxes = cartContent.getElementsByClassName('cart-box')
  var total = 0

  for(var i = 0; i < cartBoxes.length; i++){
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0]
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
    var price = parseFloat(priceElement.innerText.replace("Rs", ""))
    var quantity = quantityElement.value
    total = total + (price * quantity);

  }
    // if price contain same value 
    total = Math.round(total * 100) / 100; 

    document.getElementsByClassName('total-price')[0].innerText = "Rs" + total;



}



       