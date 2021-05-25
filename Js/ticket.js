const order = localStorage.getItem('order')
const storageCameraName = localStorage.getItem('Camera_name')
const storageLense = localStorage.getItem('lense')
const storagePrice = localStorage.getItem('Price')
const productInCard = localStorage.getItem('image')
// const storageCameraName = localStorage.getItem('Camera_name')

const orderStorageParse = JSON.parse(order)

console.log(orderStorageParse)

const orderId = document.getElementById("orderNumber")
orderId.innerText = orderStorageParse.orderId

let cameraName = document.getElementById('camera')
let lense = document.getElementById('lense')
let price = document.getElementById('price')
let imageUrl = document.getElementById('imageUrl');

cameraName.innerText = storageCameraName
lense.innerText = storageLense
price.innerText = storagePrice
imageUrl.src = productInCard

// CameraName.innerText = storageCameraName.getElementById("camera")
// const orderId = document.getElementById("orderNumber")
// const orderId = document.getElementById("orderNumber")
// const orderId = document.getElementById("orderNumber")
