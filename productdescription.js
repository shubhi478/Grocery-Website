document.addEventListener('DOMContentLoaded', function() {
var productname=localStorage.getItem("pname");
var productprice=localStorage.getItem("pprice");
var productimg=localStorage.getItem("pimage");

var pname=document.getElementById("productName");
pname.innerHTML=productname;

var pprice=document.getElementById("productPrice");
pprice.innerHTML=productprice;

document.getElementById("productImg").src=productimg;

document.getElementById("whatsapp").href="https://wa.me/9999999999?text=%22"+ productname +" "+productprice +"%22";

var cartdata = JSON.parse(localStorage.getItem("cart"));
var currentuser= JSON.parse(localStorage.getItem("currentuser"));
var email= currentuser[0].email;
var currentitem= localStorage.getItem("pname");
if(cartdata){
var item = cartdata.find(item => item.name == currentitem && item.email == email);

if(item){
    document.getElementById("qty").innerHTML= item.quantity ;
    
}
}





})


function additem(){

    var productname=localStorage.getItem("pname");
    var productprice=localStorage.getItem("pprice");
    addtocart(productname,productprice);
    
//     var cart = JSON.parse(localStorage.getItem("cart")) || [];
//     var currentuser = JSON.parse(localStorage.getItem("currentuser"));
//    var useremail= currentuser[0].email;

   
   
//    if(cart){
//     var existing = cart.find(item =>item.name == productname && item.email === useremail);
//     if(existing){
//         existing.quantity ++;
         
//     }else{
//             cart.push({
//                 name:productname ,
//                 price:productprice,
//                 quantity:1,
//                 email:useremail,
                
//             });
//         }
//     }
// else{
//     cart.push({
//         name:productname ,
//         price:productprice,
//         quantity:1,
//         email:useremail,
        
//     });
    
//    }

//    localStorage.setItem("cart", JSON.stringify(cart));
//    console.log(cart);


}



var currentitem= localStorage.getItem("pname");
var currentemail = JSON.parse(localStorage.getItem("currentuser"));
var email= currentemail[0].email;
var productprice=localStorage.getItem("pprice");


function addqty(){


    // var cartdata = JSON.parse(localStorage.getItem("cart"));
    // if (!cartdata) return;
    // var item = cartdata.find(item => item.name == currentitem && item.email == email);
    // if (item) {
    //     item.quantity++;
    //     localStorage.setItem('cart', JSON.stringify(cartdata));
    //   console.log(qty);
        // document.getElementById("qty").innerHTML= item.quantity++;
        

    // }
    var updatedqty = addition(currentitem,email);
    document.getElementById("qty").innerHTML=updatedqty;

}


function subtractqty(){

    var updatedqty = subtraction(currentitem,email);
    document.getElementById("qty").innerHTML=updatedqty;
   
    // var cartdata = JSON.parse(localStorage.getItem("cart"));  
     
    // var cartdata = JSON.parse(localStorage.getItem("cart"));
    // if (!cartdata) return; 
   

    // var item = cartdata.find(item => item.name == currentitem && item.email ==email);
    
    // if(item){
    //     item.quantity--;
    //     localStorage.setItem('cart', JSON.stringify(cartdata));
    //     document.getElementById("qty").innerHTML= item.quantity--;
        
    // }
}