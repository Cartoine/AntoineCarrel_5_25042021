const removeFromLogo = document.getElementsByClassName("btnReload")[0].addEventListener("click", function() {
    localStorage.removeItem('cart product');
    localStorage.removeItem('order');
    localStorage.removeItem('callApi');
    localStorage.removeItem('cameraId');
});

const removeFromBtn = document.getElementsByClassName("btnReload")[1].addEventListener("click", function() {
    localStorage.removeItem('cart product');
    localStorage.removeItem('order');
    localStorage.removeItem('callApi');
    localStorage.removeItem('cameraId');
});

let getClientOrder = JSON.parse(localStorage.getItem('order'))

const cartProduct = JSON.parse(localStorage.getItem('cart product'))
const cartList = document.getElementById('createArray')

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const address = document.getElementById('address')
const city = document.getElementById('city')
const mail = document.getElementById('mail')
const orderId = document.getElementById('orderId')


firstName.innerText = getClientOrder.contact.firstName
lastName.innerText = getClientOrder.contact.lastName
address.innerText = getClientOrder.contact.address
city.innerText = getClientOrder.contact.city
mail.innerText = getClientOrder.contact.email
orderId.innerText = getClientOrder.orderId


for(let i = 0; i< cartProduct.length; i++){


    let createSectionArticle = document.createElement('tr')
    cartList.appendChild(createSectionArticle)
    createSectionArticle.classList.add('sectionArticle')
    
    let createName = document.createElement('td')
    createSectionArticle.appendChild(createName)
    createName.innerHTML = cartProduct[i].name
    
    let createOption = document.createElement('td')
    createSectionArticle.appendChild(createOption)
    createOption.innerHTML = cartProduct[i].lense
    
    let createQuantity = document.createElement('td')
    createSectionArticle.appendChild(createQuantity)
    createQuantity.innerHTML = 1

    let createPrice = document.createElement('td')
    createSectionArticle.appendChild(createPrice)
    createPrice.innerHTML = `${(cartProduct[i].price/100).toFixed(2)} €`;
   
    
    let createImg = document.createElement('IMG')
    createSectionArticle.appendChild(createImg)
    createImg.id = 'img_cart'
    createImg.setAttribute('src', cartProduct[i].imageUrl)
    
}