var from_local=JSON.parse(localStorage.getItem("cart"));
var cart_data=[];
if(from_local==null){
    cart_data=[];
}else{
    cart_data=from_local;
}

function add_to_cart(elem){
   obj={
       imgUrl:elem.imgUrl,
       name:elem.name,
       price:elem.price,
       strike_price:elem.strikedOffPrice,
   }
   cart_data.push(obj);
   localStorage.setItem("cart",JSON.stringify(cart_data));
   console.log(cart_data)
}