var data = [
    {
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$25.00",
        strikedOffPrice:"$95.00"
    },{
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },
    {
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi4.jpg.pagespeed.ic.kmiQW8I5wx.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },
    {
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$25.00",
        strikedOffPrice:"$95.00"
    },{
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },
    {
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi4.jpg.pagespeed.ic.kmiQW8I5wx.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$25.00",
        strikedOffPrice:"$95.00"
    },
    {
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$25.00",
        strikedOffPrice:"$95.00"
    }
]
data.map(function(elem){
    var div=document.createElement("div");
    var img=document.createElement("img");
    img.src=elem.imgUrl;
    var h3=document.createElement("h3");
    h3.innerText=elem.name;
    var div1=document.createElement("div");
    div1.setAttribute("id","price");
    var h4=document.createElement("h4");
    h4.innerText=elem.price;
    var p=document.createElement("p");
    p.innerText=elem.strikedOffPrice;
    div1.append(h4,p);
    var btn=document.createElement("button");
    btn.innerText="Add to Cart";
    btn.addEventListener("click",function(){
        add_to_cart(elem);
    })
    div.append(img,h3,div1,btn)
    document.querySelector("#product").append(div);
})
var z=-Infinity;
console.log(z);