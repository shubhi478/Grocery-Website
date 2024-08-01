document.addEventListener('DOMContentLoaded', function() {  
//order summary
var carttotal=localStorage.getItem("carttotal");
document.getElementById("subtotal").innerHTML= "Rs."+ carttotal ;  
document.getElementById("total").innerHTML= "Rs." + carttotal;
var tip=document.querySelectorAll(".tip");
  
tip.forEach((button) => {
    button.addEventListener('click',() => {
        var deliverytip= parseFloat(button.innerHTML.replace("Rs.", ""));
       
       localStorage.setItem('deliverytip',deliverytip);
       document.getElementById("deliverytip").innerHTML= "Rs."+ deliverytip; 
       
       var total= parseFloat(carttotal) + deliverytip;
       document.getElementById("total").innerHTML= "Rs." + total;
    })

})

 var orderbtn = document.getElementById("ordernow");
   
    var cartdata = JSON.parse(localStorage.getItem("cart"));
    var currentuser= JSON.parse(localStorage.getItem("currentuser"));


    orderbtn.addEventListener('click', () => {
        var myorders=JSON.parse(localStorage.getItem("myorders")) || [];
        var existing = cartdata.filter(item=> item.email==currentuser[0].email);


        const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0];


            if(existing){
                if(existing.length >0){
                    existing.forEach(item =>{
                        myorders.push({
                            name:item.name ,
                            price:item.price,
                            quantity:item.quantity,
                            email:item.email,
                            date:formattedDate
                        });
                    })
                   
                }

               // Remove the existing items from cartdata
        cartdata = cartdata.filter(item => item.email !== currentuser[0].email);

        // Store the updated orders and cart in localStorage
        localStorage.setItem('myorders', JSON.stringify(myorders));
        localStorage.setItem('cart', JSON.stringify(cartdata));
           
            }
        })
})

function enablebtn(){
    var orderbtn= document.getElementById("orderbtn");
    orderbtn.classList.remove('disabled'); 
}