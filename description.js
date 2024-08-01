document.addEventListener('DOMContentLoaded', function(){
    var cartbutton=document.querySelectorAll(".card-img-top");
cartbutton.forEach((button) => {
    button.addEventListener('click',(event)=>{
    // var card= event.currentTarget;
    var card=button.closest('.card');
    console.log(card);   
    var img=card.querySelector('img').src;
    var productname = card.querySelector('.card-text').innerHTML;
    var productprice= card.querySelector('.card-title').innerHTML;
    
    console.log(img,productname,productprice);
    localStorage.setItem("pname",productname);
    localStorage.setItem("pprice",productprice);
    localStorage.setItem("pimage",img);

    window.location.href='product description.html'
    
});
});
});