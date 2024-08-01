document.addEventListener('DOMContentLoaded', function() {

    loaddata();
    
});

function loaddata(){
    document.getElementById("cartdata").innerHTML = '';
    var data = document.getElementById("cartdata");
    document.getElementById("cartfoot").innerHTML ='';
    var datafoot = document.getElementById("cartfoot");

        var total_qty =0;
        var total_amt =0;
    var currentuser= JSON.parse(localStorage.getItem("currentuser"));
    if(currentuser){
    var useremail= currentuser[0].email;
    var cartdata = JSON.parse(localStorage.getItem("cart"));
    
    if(cartdata){
        var existing= cartdata.filter(item=> item.email===useremail);
    

        if(existing.length>0){
            existing.forEach((element,index) => {
            var cartitem=document.createElement('tr');
            
            cartitem.innerHTML=`
            <td>${index+1}</td>
            <td>${element.name}</td>
            <td>${element.price}</td>
            <td><button class="btn btn-outline-secondary btn-sm" type="button" onclick="add('${element.name}','${element.email}')">+</button>
            <span style="padding:3px;">${element.quantity}</span> 
            <button class="btn btn-outline-secondary btn-sm" type="button" onclick="subtract('${element.name}','${element.email}')">-</button>
            </td>
            <td>Rs. ${element.quantity * parseFloat(element.price.replace("Rs.", ""))}</td>
            <td><button class="btn btn-danger" type="button" onclick="removeitem('${element.name}','${element.email}')">-</button></td>`;
            data.appendChild(cartitem);
            total_qty = total_qty+element.quantity;
            total_amt = total_amt+(element.quantity * parseFloat(element.price.replace("Rs.", "")));
            });
            var cartfoot=document.createElement('tr');
            cartfoot.innerHTML=`
            <td></td>
            <td></td>
            <td></td>
            <td>${total_qty}</td>
            <td id="total">Rs. ${total_amt}</td>`;
            datafoot.appendChild(cartfoot);

            var carttotal = parseFloat(document.querySelector('#total').innerText.replace("Rs.", ""));
            localStorage.setItem('carttotal', carttotal);

            var btn= document.getElementById("checkoutbtn");
            console.log(btn);
             btn.classList.remove('disabled'); 
           
    
        }else{
            
            var btn= document.getElementById("checkoutbtn");
            btn.classList.add('disabled');
        }
    }else{
   
     var cartitem=document.createElement('div');
     cartitem.textContent="Empty Cart";
     data.appendChild(cartitem);

     
    }
}else{
 
     
}
    }
   
function removeitem(removeme,email){
   
    var cartdata = JSON.parse(localStorage.getItem("cart"));

    var useremail= email;

    var a= cartdata.find(item=> item.name == removeme && item.email == useremail);
    if(a){
        cartdata.splice(cartdata.indexOf(a),1);
        localStorage.setItem('cart', JSON.stringify(cartdata));
        console.log(cartdata);
        loaddata();
    }
    
}

function add(additem,email){
addition(additem,email);
loaddata(); 
 
}

function subtract(subtractitem,email){
subtraction(subtractitem,email);
loaddata();
}