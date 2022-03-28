var data = [{
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
        name: "kATEST MEN’S SNEAKER",
        price: "$25.00",
        strikedOffPrice: "$95.00"
    }, {
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
        name: "bATEST MEN’S SNEAKER",
        price: "$35.00",
        strikedOffPrice: "$100.00"
    }, {
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
        name: "lATEST MEN’S SNEAKER",
        price: "$35.00",
        strikedOffPrice: "$100.00"
    },
    {
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi4.jpg.pagespeed.ic.kmiQW8I5wx.webp",
        name: "dATEST MEN’S SNEAKER",
        price: "$35.00",
        strikedOffPrice: "$100.00"
    },
    {
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
        name: "eATEST MEN’S SNEAKER",
        price: "$25.00",
        strikedOffPrice: "$95.00"
    }, {
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
        name: "fATEST MEN’S SNEAKER",
        price: "$35.00",
        strikedOffPrice: "$100.00"
    }, {
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
        name: "gATEST MEN’S SNEAKER",
        price: "$35.00",
        strikedOffPrice: "$100.00"
    },
    {
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi4.jpg.pagespeed.ic.kmiQW8I5wx.webp",
        name: "hATEST MEN’S SNEAKER",
        price: "$35.00",
        strikedOffPrice: "$100.00"
    }, {
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
        name: "iATEST MEN’S SNEAKER",
        price: "$35.00",
        strikedOffPrice: "$100.00"
    }, {
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
        name: "jATEST MEN’S SNEAKER",
        price: "$35.00",
        strikedOffPrice: "$100.00"
    }, {
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
        name: "aATEST MEN’S SNEAKER",
        price: "$25.00",
        strikedOffPrice: "$95.00"
    },
    {
        imgUrl: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
        name: "AAATEST MEN’S SNEAKER",
        price: "$25.00",
        strikedOffPrice: "$95.00"
    }
];
product_details()
document.querySelector("#sort_by_price").addEventListener("change", sort_by_price)

function sort_by_price() {
    var sort = document.querySelector("#sort_by_price").value;
    if (sort == "low to high") {
        data.sort(function (a, b) {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            return 0;
        })
    } else {
        data.sort(function (a, b) {
            if (a.price > b.price) return -1;
            if (a.price < b.price) return 1;
            return 0;
        })
    }
    product_details();
}
var data4 = document.querySelector("#sort_by_name").addEventListener("change", sort_by_name);

function sort_by_name() {
    var sort_data = document.querySelector("#sort_by_name").value
    console.log(sort_data)
    if (sort_data == "Z to A") {
        data.sort(function (a, b) {
            if (a.name> b.name) return -1;
            if (a.name< b.name) return 1;
            return 0;
        })
 
    } else{
        data.sort(function (a, b) {
            if (a.name> b.name) return 1;
            if (a.name< b.name) return -1;
            return 0;
        })
    }
    product_details();
}

function product_details() {
    document.querySelector("#product").innerHTML = null;
    data.map(function (elem) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = elem.imgUrl;
        var h3 = document.createElement("h3");
        h3.innerText = elem.name;
        var div1 = document.createElement("div");
        div1.setAttribute("id", "price");
        var h4 = document.createElement("h4");
        h4.innerText = elem.price;
        var p = document.createElement("p");
        p.innerText = elem.strikedOffPrice;
        div1.append(h4, p);
        var btn = document.createElement("button");
        btn.innerText = "Add to Cart";
        btn.addEventListener("click", function () {
            add_to_cart(elem);
        })
        div.append(img, h3, div1, btn)
        document.querySelector("#product").append(div);
    })

}