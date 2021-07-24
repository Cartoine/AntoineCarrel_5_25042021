// import {storageParse, camera_one, camera_two, camera_three, camera_four, camera_five } from "./call.js"

const description = document.getElementById("cameraDescription");
const imageUrl = document.getElementById("imageUrl");
const cameraName = document.getElementById("cameraName");
const prices = document.getElementById("cameraPrices");
const lenses = document.querySelectorAll('.lense');
const alertProduct = document.getElementById('alertProduct');
const alertMessage = document.getElementById('alert');
const colors =  ['#14A2B8','#027BFF','#FF5733','#C70039','#FFC300' ]

const storageCameraId = localStorage.getItem('cameraId')
let getClickedCardId = localStorage.getItem('cameraId')
let liTwo = document.getElementById("lensesTwo")
let liThree = document.getElementById("lensesThree")

let i;
const showCount = document.getElementById("count")


//création du localStorage
if(!localStorage.getItem("cart product")){
    let cartProducts = []
    localStorage.setItem("cart product", JSON.stringify(cartProducts))
}
//création du panier
let cartProducts = JSON.parse(localStorage.getItem("cart product"))

let cameraObject = {
    toCard : {
        addOneMore : 0,
        lense : document.getElementById('choise').textContent,
        id : storageCameraId
    }
}

let resultFromAPI
const api = await fetch(`http://localhost:3000/api/cameras`)
.then(responce => responce.json())
.then(data => {   
    resultFromAPI = data
})   
console.log(resultFromAPI)

for (let i in resultFromAPI) {

    if(resultFromAPI[i]._id === storageCameraId){
    description.innerHTML = resultFromAPI[i].description;
    imageUrl.src = resultFromAPI[i].imageUrl;
    cameraName.innerHTML = resultFromAPI[i].name;
    alertProduct.innerHTML = resultFromAPI[i].name
    prices.innerHTML = `${(resultFromAPI[i].price/100).toFixed(2)} €`;

    for(let i = 0; i<resultFromAPI[i].lenses.length; i++){
        lenses[i].textContent = resultFromAPI[i].lenses[i];
    }

    //gestion de l'affichage des li
    if(liTwo.innerHTML === ""){
            liTwo.style.display = 'none'
        }
    if(liThree.innerHTML === ""){
            liThree.style.display = 'none'
        }
    }
    if (storageCameraId === resultFromAPI[i]._id){
        

        let increment = document.getElementById('addToCard').addEventListener('click', function(){

            const objetCamera =  {
                imageUrl: resultFromAPI[i].imageUrl,
                lense: document.getElementById('choise').textContent,
                name: resultFromAPI[i].name,
                price: resultFromAPI[i].price,
                quantity: cameraObject.toCard.addOneMore,
                _id: storageCameraId
            }

            // console.log(objetCamera)
            cameraObject.toCard.addOneMore++
            cartProducts.push(objetCamera)
            localStorage.setItem("cart product", JSON.stringify(cartProducts))
            cameraObject.toCard.lense = document.getElementById('choise').textContent
            showCount.textContent = cameraObject.toCard.addOneMore
            alertMessage.style.display = "block"
            
            let randomColor = colors[Math.floor(Math.random()*colors.length)]
            randomColor.toString
            alertMessage.style.background = randomColor;
        })
    }

}
// permet de mettre dans le localstorage l'objectif clicker
const getValueOfOptionOne = document.getElementById('lensesOne').addEventListener("click", function(){
    let lensesId =  document.getElementById('lensesOne').innerHTML
    document.getElementById("choise").innerHTML = document.getElementById('lensesOne').textContent;
    showAddToCard.style.display = "block"
})
const getValueOfOptionTwo = document.getElementById('lensesTwo').addEventListener("click", function(){
    let lensesId =  document.getElementById('lensesTwo').innerHTML
    document.getElementById("choise").innerHTML = document.getElementById('lensesTwo').textContent;
    showAddToCard.style.display = "block"
})
const getValueOfOptionThree = document.getElementById('lensesThree').addEventListener("click", function(){
    let lensesId =  document.getElementById('lensesThree').innerHTML
    document.getElementById("choise").innerHTML = document.getElementById('lensesThree').textContent;
    showAddToCard.style.display = "block"
})

// Montre le bouton ajouter au panier
const showAddToCard = document.getElementById('addToCard');

