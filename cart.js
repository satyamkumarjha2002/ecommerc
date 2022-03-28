var cart_Data=JSON.parse(localStorage.getItem("cart"));
cart_Data.map(function(elem){
    var div=document.createElement("div");
    var div2=document.createElement("div");
    var div3=document.createElement("div");
    var img=document.createElement("img");
    img.src=elem.imgUrl;
    div2.append(img);
    var name=document.createElement("h3");
    name.innerText=elem.name;
    var div1=document.createElement("div");
    div1.setAttribute("id","price")
    var h4=document.createElement("h4");
    h4.innerText=elem.price;
    var p=document.createElement("p");
    p.innerText=elem.strike_price;
    var btn1=document.createElement("button");
    btn1.innerText="Add More"
    var btn2=document.createElement("button");
    btn2.innerText="Remove";
    div1.append(h4,p)
    var div4=document.createElement("div");
    div4.append(btn2,btn1);
    div3.append(name,div1,div4);
    div4.setAttribute("id","add")
    div.append(div2,div3);
    document.querySelector("#product").append(div);
    div2.setAttribute("id","div2");
    div3.setAttribute("id","div3");
})
var buy_now=document.createElement("button");
buy_now.innerText="Go for payment"
var total_product=document.createElement("p").innerText="Number of items "+cart_Data.length;
var total_p="Total Price $"+total();
total_p.innerText=='sata'
document.querySelector("#total_item").innerText=total_product;
document.querySelector("#total_price").innerText=total_p;
document.querySelector("#product_details").append(buy_now);
buy_now.addEventListener("click",clicked);
function clicked(){
   window.location.href="payment.html";
}
function total(){
    total_price=0;
    for(var i=0;i<cart_Data.length;++i){
        var bag="";
       for(var j=1;j<cart_Data[i].price.length;++j){
          bag=bag+cart_Data[i].price[j];
       }
       bag=Number(bag);
       total_price=total_price+bag;
    }
    console.log(total_price)
    
    return total_price;
}
function discount(){
    var total_price=total();
    var promocode="masai30";
    var promo=document.querySelector("#enter_promo").value;
    var after_dis=document.querySelector("#discount");
   if(promo==promocode){
       total_price=total_price-((total_price*30)/100);
       after_dis.innerText="After discount $"+total_price;
   }else{
    after_dis.innerText="Wrong promocode";
   }
   
}
