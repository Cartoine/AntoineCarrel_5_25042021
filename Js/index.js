import {storageParse, camera_one, camera_two, camera_three, camera_four, camera_five } from "./call.js"

const description = document.querySelectorAll('.cameraDescription')
const imageUrl = document.querySelectorAll('.imageUrl')
const cameraName = document.querySelectorAll('.cameraName');
const prices = document.querySelectorAll('.cameraPrices');
const SliderImageUrl = document.querySelectorAll('.SliderImageUrl');

for (let i in storageParse) {
    description[i].innerText = storageParse[i].description;
    imageUrl[i].src = storageParse[i].imageUrl;
    cameraName[i].innerText = storageParse[i].name;
    prices[i].innerText = `${(storageParse[i].price/100).toFixed(2)} €`;
    SliderImageUrl[i].src = storageParse[i].imageUrl;
}

const cardOne = document.getElementById("cardOne").addEventListener('click', function(){
    localStorage.setItem('cameraId', camera_one._id)
})
console.log(cardOne)

const cardTwo = document.getElementById("cardTwo").addEventListener('click', function(){
    localStorage.setItem('cameraId', camera_two._id)
})
const cardThree = document.getElementById("cardThree").addEventListener('click', function(){
    localStorage.setItem('cameraId', camera_three._id)
})
const cardFour = document.getElementById("cardFour").addEventListener('click', function(){
    localStorage.setItem('cameraId', camera_four._id)
})
const cardFive = document.getElementById("cardFive").addEventListener('click', function(){
    localStorage.setItem('cameraId', camera_five._id)
})


