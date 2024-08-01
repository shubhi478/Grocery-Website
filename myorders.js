document.addEventListener('DOMContentLoaded', function() {
   
    loadorderdata()
   
     
    });

    function loadorderdata(){
        document.getElementById("myorderdata").innerHTML = '';
        var data = document.getElementById("myorderdata");
        document.getElementById("myorderfoot").innerHTML ='';
        var datafoot = document.getElementById("myorderfoot");
    
            var total_qty =0;
            var total_amt =0;
        var currentuser= JSON.parse(localStorage.getItem("currentuser"));
        if(currentuser){
        var useremail= currentuser[0].email;
    
        
        var myorderdata = JSON.parse(localStorage.getItem("myorders"));
        
        if(myorderdata){
            var existing= myorderdata.filter(item=> item.email==useremail);
    
            if(existing){
                existing.forEach((element,index) => {
                var myorderitem=document.createElement('tr');
                myorderitem.innerHTML=`
                <td>${index+1}</td>
                <td>${element.name}</td>
                <td>${element.price}</td>
                <td>${element.quantity} </td>
                <td>Rs. ${element.quantity * parseFloat(element.price.replace("Rs.", ""))}</td>
                <td>${element.date}</td>`;
                data.appendChild(myorderitem);
                total_qty = total_qty+element.quantity;
                total_amt = total_amt+(element.quantity * parseFloat(element.price.replace("Rs.", "")));
                });
                var myorderfoot=document.createElement('tr');
                myorderfoot.innerHTML=`
                <td></td>
                <td></td>
                <td></td>
                <td>${total_qty}</td>
                <td id="total">Rs. ${total_amt}</td>`;
                datafoot.appendChild(myorderfoot);

                var total = parseFloat(document.querySelector('#total').innerText.replace("Rs.", ""));
                localStorage.setItem('ordertotal', total);
        }
        }else{
         var  myorderitem=document.createElement('div');
         myorderitem.textContent="No orders placed";
         data.appendChild(myorderitem);
        }
    }else{
         
    }
         }
       