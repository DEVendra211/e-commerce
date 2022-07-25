
        // Jquery code 

$(function () {

    $(".bar").click(function (e) {
        e.preventDefault();
        $(".navbar").addClass("active");
    })
    $(".close").click(function (e) {
        e.preventDefault();
        $(".navbar").removeClass("active");
    })

    $(".item-row").click(function (event) {
        window.location.href="sproduct.html";
    })
})




// javascript code 

const removecart=document.querySelectorAll(".remove-cart")


    for(let i=0; i<removecart.length;i++){
        var button=removecart[i]
        button.addEventListener("click",function (event) {
            event.preventDefault()
            var buttonclicked= event.target
            buttonclicked.parentElement.parentElement.parentElement.remove()
            //   updatetotal()
        })
    }

    
    //   function updatetotal() {
        
    //     var cartitem = document.querySelector("table")
    //     var cartrows =document.querySelector("tbody")
    //     // for(let i=0; i<cartitem.length;i++){
    //         // var cartrow=cartitem[i]
    //         var priceElement=document.querySelector(".price")
    //         var quantityElement=document.querySelector(".quantity")
            
    //         var price=parseFloat( priceElement.textContent.replace('$',''))
    //         var quant=quantityElement[0].value;

    //         console.log(price,quant);
            
    //    }
    

    // var addcart=document.querySelectorAll(".add-cart")
    //  for(let i=0; i<addcart.length;i++){
    //      var press = addcart[i]
    //     press.addEventListener("click",function (event) {
    //         event.preventDefault()
    //         var press= event.target
    //         var shop=press.parentElement.parentElement
    //         var imageSrc=document.querySelector(".item-image").src
    //          var title=document.querySelector(".item-title").textContent
    //          var price=document.querySelector(".item-price").textContent
             
    //          addtocart(imageSrc,title,price);``
    //     })
    //  }

    //  function addtocart(imageSrc,title,price) {
    //     var tr=document.createElement('tr')
    //     tr.innerHTML+=`<td>${imageSrc}</td><td>${title}</td><td>${price}</td><td></td><td></td><td></td>`
    //     document.querySelector("table").appendChild(tr)
    //     // console.log(cartrow);
    
    //  }
     