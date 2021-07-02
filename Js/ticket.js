import {storageParse, camera_one, camera_two, camera_three, camera_four, camera_five } from "./call.js"
const orderStorageParse = JSON.parse(localStorage.getItem('order'))

const removeFromLogo = document.getElementsByClassName("btnReload")[0].addEventListener("click", function() {
    localStorage.removeItem('camera One');
    localStorage.removeItem('camera Two');
    localStorage.removeItem('camera Three');
    localStorage.removeItem('camera Four');
    localStorage.removeItem('camera Five');
});

const removeFromBtn = document.getElementsByClassName("btnReload")[1].addEventListener("click", function() {
    localStorage.removeItem('camera One');
    localStorage.removeItem('camera Two');
    localStorage.removeItem('camera Three');
    localStorage.removeItem('camera Four');
    localStorage.removeItem('camera Five');
});


const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const address = document.getElementById('address')
const city = document.getElementById('city')
const mail = document.getElementById('mail')
const orderId = document.getElementById('orderId')


firstName.innerText = orderStorageParse.contact.firstName
lastName.innerText = orderStorageParse.contact.lastName
address.innerText = orderStorageParse.contact.address
city.innerText = orderStorageParse.contact.city
mail.innerText = orderStorageParse.contact.email
orderId.innerText = orderStorageParse.orderId



const storageCameraOne = JSON.parse(localStorage.getItem("camera One"))
const storageCameraTwo = JSON.parse(localStorage.getItem("camera Two"))
const storageCameraThree = JSON.parse(localStorage.getItem("camera Three"))
const storageCameraFour = JSON.parse(localStorage.getItem("camera Four"))
const storageCameraFive = JSON.parse(localStorage.getItem("camera Five"))

const articles = document.getElementById('article')
const option = document.getElementById('option')
const quantity = document.getElementById('quantity')
const price = document.getElementById('price')
const picture = document.getElementById('picture')

if(storageCameraOne !== null){
    
     const createTdAricle = document.createElement('p')
     const createTdOption = document.createElement('p')
     const createTdQuantity = document.createElement('p')
     const createTdPrice = document.createElement('p')
     
     createTdAricle.innerHTML = camera_one.name
     createTdOption.innerHTML = storageCameraOne.toCard.lense
     createTdQuantity.innerHTML = storageCameraOne.toCard.addOneMore
     createTdPrice.innerHTML = `${(camera_one.price/100)*storageCameraOne.toCard.addOneMore.toFixed(2)} €`;

     document.getElementById('article').appendChild(createTdAricle)
     document.getElementById('option').appendChild(createTdOption)
     document.getElementById('quantity').appendChild(createTdQuantity)
     document.getElementById('price').appendChild(createTdPrice)
}
if(storageCameraTwo !== null){
    const createTdAricle = document.createElement('p')
     const createTdOption = document.createElement('p')
     const createTdQuantity = document.createElement('p')
     const createTdPrice = document.createElement('p')
     
     createTdAricle.innerHTML = camera_two.name
     createTdOption.innerHTML = storageCameraTwo.toCard.lense
     createTdQuantity.innerHTML = storageCameraTwo.toCard.addOneMore
     createTdPrice.innerHTML = `${(camera_two.price/100)*storageCameraTwo.toCard.addOneMore.toFixed(2)} €`;

     document.getElementById('article').appendChild(createTdAricle)
     document.getElementById('option').appendChild(createTdOption)
     document.getElementById('quantity').appendChild(createTdQuantity)
     document.getElementById('price').appendChild(createTdPrice)
}
if(storageCameraThree !== null){
    const createTdAricle = document.createElement('p')
     const createTdOption = document.createElement('p')
     const createTdQuantity = document.createElement('p')
     const createTdPrice = document.createElement('p')
     
     createTdAricle.innerHTML = camera_three.name
     createTdOption.innerHTML = storageCameraThree.toCard.lense
     createTdQuantity.innerHTML = storageCameraThree.toCard.addOneMore
     createTdPrice.innerHTML = `${(camera_three.price/100)*storageCameraThree.toCard.addOneMore.toFixed(2)} €`;

     document.getElementById('article').appendChild(createTdAricle)
     document.getElementById('option').appendChild(createTdOption)
     document.getElementById('quantity').appendChild(createTdQuantity)
     document.getElementById('price').appendChild(createTdPrice)
}
if(storageCameraFour !== null){
    const createTdAricle = document.createElement('p')
     const createTdOption = document.createElement('p')
     const createTdQuantity = document.createElement('p')
     const createTdPrice = document.createElement('p')
     
     createTdAricle.innerHTML = camera_four.name
     createTdOption.innerHTML = storageCameraFour.toCard.lense
     createTdQuantity.innerHTML = storageCameraFour.toCard.addOneMore
     createTdPrice.innerHTML = `${(camera_four.price/100)*storageCameraFour.toCard.addOneMore.toFixed(2)} €`;

     document.getElementById('article').appendChild(createTdAricle)
     document.getElementById('option').appendChild(createTdOption)
     document.getElementById('quantity').appendChild(createTdQuantity)
     document.getElementById('price').appendChild(createTdPrice)
}
if(storageCameraFive !== null){
    const createTdAricle = document.createElement('p')
     const createTdOption = document.createElement('p')
     const createTdQuantity = document.createElement('p')
     const createTdPrice = document.createElement('p')
     
     createTdAricle.innerHTML = camera_five.name
     createTdOption.innerHTML = storageCameraFive.toCard.lense
     createTdQuantity.innerHTML = storageCameraFive.toCard.addOneMore
     createTdPrice.innerHTML = `${(camera_five.price/100)*storageCameraFive.toCard.addOneMore.toFixed(2)} €`;

     document.getElementById('article').appendChild(createTdAricle)
     document.getElementById('option').appendChild(createTdOption)
     document.getElementById('quantity').appendChild(createTdQuantity)
     document.getElementById('price').appendChild(createTdPrice)
}

