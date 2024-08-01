

document.addEventListener('DOMContentLoaded', function() {
//     var button= document.getElementById("loginbutton");
//     var logoutbtn=document.getElementById("logoutbutton");
// var currentuser = JSON.parse(localStorage.getItem("currentuser"));
// if(currentuser){
//     logoutbutton.style.visibility="visible";
//     button.style.visibility="hidden";

    
// }else{
//     button.style.visibility="visible";
//     logoutbutton.style.visibility="hidden";
// }

var cartbutton=document.querySelectorAll(".addcart");
cartbutton.forEach((button) => {
    button.addEventListener('click',()=>{
    var card=button.closest('.card');
    var productname = card.querySelector('.card-text').innerHTML;
    var productprice= card.querySelector('.card-title').innerHTML;
   
    
    addtocart(productname,productprice);

});
});

});

// function addtocart(productname, productprice){ //rice,500
//     console.log(productname + productprice);
   
//    var cart = JSON.parse(localStorage.getItem("cart")) || [];
//    var currentuser = JSON.parse(localStorage.getItem("currentuser"));
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


//    }else{
//     cart.push({
//         name:productname ,
//         price:productprice,
//         quantity:1,
//         email:useremail,
        
//     });
    
//    }
   

   
   

//     localStorage.setItem("cart",JSON.stringify(cart));
//     console.log(cart);
   
// }

// function userLogout() {
//     localStorage.removeItem("currentuser");
//   document.getElementById("loginbutton").style.visibility = "visible";
//    document.getElementById("logoutbutton").style.visibility ="hidden";
// }



function scaleimage(event){
    event.target.style.transform="scale(1.5)";
    }
function noscale(event){
    event.target.style.transform="scale(1.0)";
    }
function scaleproduct(event){
        event.target.style.transform="scale(1.2)";
    }
 function noscaleproduct(event){
        event.target.style.transform="scale(1.0)";
    }

// function loginpage(){
//     var a=document.getElementById("signupform");
//     var b=document.getElementById("loginform");
//     a.style.display="none";
//     b.style.display="block";
//     document.getElementById("email").value ='' ;
//     document.getElementById("password").value ='' ;
//     document.getElementById("phoneno").value ='' ;
//     document.getElementById("confirm").value ='' ;

// }
// function signuppage(){
//     var a=document.getElementById("loginform");
//     var b=document.getElementById("signupform");
//     a.style.display="none";
//     b.style.display="block";
//     document.getElementById("loginemail").value ='' ;
//     document.getElementById("loginpassword").value ='' ;
// }

function shopnowdropdown(){
    var dropdown = document.getElementById('shopnow');
    if (dropdown.style.visibility === 'hidden') {
        dropdown.style.visibility = 'visible';
    } 
}

// function senddata(){

//   var email= document.getElementById("email").value ;
//   var password= document.getElementById("password").value ;
//   console.log(email,password);

//   var userdata = JSON.parse(localStorage.getItem("userdata")) || [];
// if(email){
  

//     if(userdata){
//         var existingemail = userdata.find(item =>item.email == email);
//         if(existingemail){
            
//             console.log("USER ALREADY EXIST");
//         }else{
       
//             userdata.push({
//                email : email ,
//                password : password ,
//             });
//             console.log("Signup Successful");
//         }
//     }else{
//         var signupdata= [];
//       signupdata.push({
//          email : email ,
//          password : password ,
//       });
//       console.log("Signup Successful");
//     }
//     localStorage.setItem("userdata",JSON.stringify(userdata));
    
// }else{


//     var loginemail= document.getElementById("loginemail").value ;
//     var loginpassword= document.getElementById("loginpassword").value ;    

//     if(userdata){
//         var existingemail = userdata.find(item =>item.email == loginemail);
//         if(existingemail){
//             if(existingemail.password == loginpassword){
//                 localStorage.removeItem("currentuser");
//                 var currentuser= JSON.parse(localStorage.getItem("currentuser")) || [];
//                 console.log(currentuser,currentuser.length);
            
                  
//                     currentuser.push({
//                         email : loginemail ,
//                         password : loginpassword ,
//                     });
//                     localStorage.setItem("currentuser",JSON.stringify(currentuser));
//                     console.log("1");
//                     document.getElementById("loginbutton").style.visibility = "hidden";
//                     document.getElementById("logoutbutton").style.visibility ="visible";
               
//                 console.log("Successful Login");
//             }else{
//                 console.log("Wrong password");
//             }
            
//         }else{

//             console.log("User is not registered");
//         }
//     }else{
      
//       console.log("user is not registered");
//     }
   


// }
// }

