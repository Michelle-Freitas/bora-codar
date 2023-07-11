const products =
    {
        product: "Sofá Margot II - Rosé",
        price: "R$ 4.000,00",
        code_prod: 42404,
        product_image: "./assets/img/sofa.svg",
        product_gif: "./assets/img/sofa-gif.gif"
    }

const switchBtn = document.querySelector(".switch-btn")
const switchBtnImage = document.querySelector("#icon-btn")
const productImage = document.querySelector(".product-img")
const productName = document.querySelector("#product-name")
const productCode = document.querySelector("#product-code")
const productPrice = document.querySelector("#product-price")

const rotateBtn = './assets/icon/360.svg'
const closeBtn = './assets/icon/close.svg'


window.addEventListener('load', loadCard)

function loadCard(){
    productImage.src = products.product_image
    productCode.textContent = products.code_prod
    productName.textContent = products.product
    productPrice.textContent = products.price

}

function rotateProduct(name){
    if (name === 'girar'){
        switchBtnImage.src = closeBtn
        switchBtn.name = 'fechar'
        productImage.className = 'gif'
        productImage.src = products.product_gif

    } else {
        switchBtnImage.src = rotateBtn
        productImage.src = products.product_image
        switchBtn.name = 'girar'
    }

}


