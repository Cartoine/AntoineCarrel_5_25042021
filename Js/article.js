import {storageParse, camera_one, camera_two, camera_three, camera_four, camera_five } from "./call.js"
// window.location.reload(true);
// document.location.reload();



const description = document.getElementById("cameraDescription");
const imageUrl = document.getElementById("imageUrl");
const cameraName = document.getElementById("cameraName");
const prices = document.getElementById("cameraPrices");
const lenses = document.querySelectorAll('.lense');

const storageCameraId = localStorage.getItem('cameraId')
let getClickedCardId = localStorage.getItem('cameraId')

if(storageCameraId === camera_one._id){

    description.innerHTML = camera_one.description;
    imageUrl.src = camera_one.imageUrl;
    cameraName.innerHTML = camera_one.name;
    prices.innerHTML = `${(camera_one.price/100).toFixed(2)} €`;
    for(let i = 0; i<camera_one.lenses.length; i++){
        lenses[i].textContent = camera_one.lenses[i];
    }
}
else if(storageCameraId === camera_two._id){
    description.innerHTML = camera_two.description;
    imageUrl.src = camera_two.imageUrl;
    cameraName.innerHTML = camera_two.name;
    prices.innerHTML = `${(camera_two.price/100).toFixed(2)} €`;
    for(let i = 0; i<camera_two.lenses.length; i++){
        lenses[i].textContent = camera_two.lenses[i];
    }
}
else if(storageCameraId === camera_three._id){
    description.innerHTML = camera_three.description;
    imageUrl.src = camera_three.imageUrl;
    cameraName.innerHTML = camera_three.name;
    prices.innerHTML = `${(camera_three.price/100).toFixed(2)} €`;
    for(let i = 0; i<camera_three.lenses.length; i++){
        lenses[i].textContent = camera_three.lenses[i];
    }

}
else if(storageCameraId === camera_four._id){
    description.innerHTML = camera_four.description;
    imageUrl.src = camera_four.imageUrl;
    cameraName.innerHTML = camera_four.name;
    prices.innerHTML = `${(camera_four.price/100).toFixed(2)} €`;
    for(let i = 0; i<camera_four.lenses.length; i++){
        lenses[i].textContent = camera_four.lenses[i];
    }

}
else if(storageCameraId === camera_five._id){
    description.innerHTML = camera_five.description;
    imageUrl.src = camera_five.imageUrl;
    cameraName.innerHTML = camera_five.name;
    prices.innerHTML = `${(camera_five.price/100).toFixed(2)} €`;
    for(let i = 0; i<camera_five.lenses.length; i++){
        lenses[i].textContent = camera_five.lenses[i];
    }

}

// gestion del'apparitions des boutons ou non si il y a du contenue dedan
let liTwo = document.getElementById("lensesTwo")
if(liTwo.innerHTML === ""){
    liTwo.style.display = 'none'
}
let liThree = document.getElementById("lensesThree")
if(liThree.innerHTML === ""){
    liThree.style.display = 'none'
}

// permet de mettre dans le localstorage l'objectif clicker
const getValueOfOptionOne = document.getElementById('lensesOne').addEventListener("click", function(){
    let lensesId =  document.getElementById('lensesOne').innerHTML
    localStorage.setItem('lense btn', lensesId)
})
const getValueOfOptionTwo = document.getElementById('lensesTwo').addEventListener("click", function(){
    let lensesId =  document.getElementById('lensesTwo').innerHTML
    localStorage.setItem('lense btn', lensesId)
})
const getValueOfOptionThree = document.getElementById('lensesThree').addEventListener("click", function(){
    let lensesId =  document.getElementById('lensesThree').innerHTML
    localStorage.setItem('lense btn', lensesId)
})

// Montre le bouton ajouter au panier
const showAddToCard = document.getElementById('addToCard');

// retire les options non clicker
const lensesOne = document.getElementById("lensesOne").addEventListener("click", function() {
    document.getElementById("choise").innerHTML = document.getElementById('lensesOne').textContent;
    showAddToCard.style.display = "block"
    document.getElementById('lensesTwo').style.display = "none" 
    document.getElementById('lensesThree').style.display = "none" 
});
const lensesTwo = document.getElementById("lensesTwo").addEventListener("click", function() {
    document.getElementById("choise").innerHTML = document.getElementById('lensesTwo').textContent;
    showAddToCard.style.display = "block"
    document.getElementById('lensesOne').style.display = "none" 
    document.getElementById('lensesThree').style.display = "none" 

});
const lensesThree = document.getElementById("lensesThree").addEventListener("click", function() {
    document.getElementById("choise").innerHTML = document.getElementById('lensesThree').textContent;
    showAddToCard.style.display = "block"
    document.getElementById('lensesOne').style.display = "none" 
    document.getElementById('lensesTwo').style.display = "none" 
});


let i;
const showRemoveItem = document.getElementById('removeItems')
const showCount = document.getElementById("count")

let cameraObject = {
    toCard : {
        addOneMore : 0,
        lense : document.getElementById('choise').textContent,
        id : storageCameraId
    }
}

function AddToCard() {

if (getClickedCardId === camera_one._id){

    let increment = document.getElementById('addToCard').addEventListener('click', function(){
        cameraObject.toCard.addOneMore++
        cameraObject.toCard.lense = document.getElementById('choise').textContent
        localStorage.setItem("camera One", JSON.stringify(cameraObject))
        showCount.textContent = cameraObject.toCard.addOneMore

        i = cameraObject.toCard.addOneMore 
        console.log(i)
        if(i >= 1 ){
            showRemoveItem.style.display = "block"
        }
    })
}
else if (getClickedCardId === camera_two._id){

    let increment = document.getElementById('addToCard').addEventListener('click', function(){
        cameraObject.toCard.addOneMore++
        cameraObject.toCard.lense = document.getElementById('choise').textContent
        localStorage.setItem("camera Two", JSON.stringify(cameraObject))
        showCount.textContent = cameraObject.toCard.addOneMore

        i = cameraObject.toCard.addOneMore 
        console.log(i)
        if(i >= 1 ){
            showRemoveItem.style.display = "block"
        }
    })
}
else if (getClickedCardId === camera_three._id){

    let increment = document.getElementById('addToCard').addEventListener('click', function(){
        cameraObject.toCard.addOneMore++
        cameraObject.toCard.lense = document.getElementById('choise').textContent
        localStorage.setItem("camera Three", JSON.stringify(cameraObject))
        showCount.textContent = cameraObject.toCard.addOneMore

        i = cameraObject.toCard.addOneMore 
        console.log(i)
        if(i >= 1 ){
            showRemoveItem.style.display = "block"
        }
    })
}
else if (getClickedCardId === camera_four._id){

    let increment = document.getElementById('addToCard').addEventListener('click', function(){
        cameraObject.toCard.addOneMore++
        cameraObject.toCard.lense = document.getElementById('choise').textContent
        localStorage.setItem("camera Four", JSON.stringify(cameraObject))
        showCount.textContent = cameraObject.toCard.addOneMore

        i = cameraObject.toCard.addOneMore 
        console.log(i)
        if(i >= 1 ){
            showRemoveItem.style.display = "block"
        }
    })
}
else if (getClickedCardId === camera_five._id){

    let increment = document.getElementById('addToCard').addEventListener('click', function(){
        cameraObject.toCard.addOneMore++
        cameraObject.toCard.lense = document.getElementById('choise').textContent
        localStorage.setItem("camera Five", JSON.stringify(cameraObject))
        showCount.textContent = cameraObject.toCard.addOneMore

        i = cameraObject.toCard.addOneMore 
        console.log(i)
        if(i >= 1 ){
            showRemoveItem.style.display = "block"
        }
    })
}

}

function removeItemes(){
    if (getClickedCardId === camera_one._id){

       let decrement = document.getElementById('removeItems').addEventListener('click', function(){
        cameraObject.toCard.addOneMore--
        localStorage.setItem("camera One", JSON.stringify(cameraObject))
        showCount.textContent = cameraObject.toCard.addOneMore

        i = cameraObject.toCard.addOneMore 
        console.log(i)
        if(i === 0 ){
            showRemoveItem.style.display = "none"
            localStorage.removeItem('camera One');
        }
        })
    }
    else if (getClickedCardId === camera_two._id){

        let decrement = document.getElementById('removeItems').addEventListener('click', function(){
         cameraObject.toCard.addOneMore--
         localStorage.setItem("camera Two", JSON.stringify(cameraObject))
         showCount.textContent = cameraObject.toCard.addOneMore

         i = cameraObject.toCard.addOneMore 
         console.log(i)
         if(i === 0 ){
             showRemoveItem.style.display = "none"
             localStorage.removeItem('camera Two');
         }
         })
     }
    else if (getClickedCardId === camera_three._id){

        let decrement = document.getElementById('removeItems').addEventListener('click', function(){
         cameraObject.toCard.addOneMore--
         localStorage.setItem("camera Three", JSON.stringify(cameraObject))
         showCount.textContent = cameraObject.toCard.addOneMore

         i = cameraObject.toCard.addOneMore 
         console.log(i)
         if(i === 0 ){
             showRemoveItem.style.display = "none"
             localStorage.removeItem('camera Three');
         }
         })
     }
    else if (getClickedCardId === camera_four._id){

        let decrement = document.getElementById('removeItems').addEventListener('click', function(){
         cameraObject.toCard.addOneMore--
         localStorage.setItem("camera Four", JSON.stringify(cameraObject))
         showCount.textContent = cameraObject.toCard.addOneMore

         i = cameraObject.toCard.addOneMore 
         console.log(i)
         if(i === 0 ){
             showRemoveItem.style.display = "none"
             localStorage.removeItem('camera Four');
         }
         })
     }
    else if (getClickedCardId === camera_five._id){

        let decrement = document.getElementById('removeItems').addEventListener('click', function(){
         cameraObject.toCard.addOneMore--
         localStorage.setItem("camera Five", JSON.stringify(cameraObject))
         showCount.textContent = cameraObject.toCard.addOneMore

         i = cameraObject.toCard.addOneMore 
         console.log(i)
         if(i === 0 ){
             showRemoveItem.style.display = "none"
             localStorage.removeItem('camera Five');
         }
         })
     }
}
AddToCard()
removeItemes()

// function removeItemes(){
//     click.addToCard.quantity --;
//     localStorage.setItem('add more camera', JSON.stringify(click))
//     showCount.textContent = click.addToCard.quantity
    
//     let i = click.addToCard.quantity
//     if(i === 0){
//         showRemoveItem.style.display = "none"
//     }
// }

// console.log(cameraObject)

// const showRemoveItem = document.getElementsByClassName("fa-minus-square")[0]
// const showCount = document.getElementById("count")
// const addToCard =  document.getElementById("addToCard").addEventListener("click", AddToCard);
// const removeItems = document.getElementById("removeItems").addEventListener("click", removeItemes);

// let objo

// let click = {
//     addToCard : {
//         quantity : 0,
//         lense: objo,
//         id: getClickedCardId
//     },
//     product: localStorage.getItem('clicked Card')
// }
//     let add 
//     objo = localStorage.getItem('lense')
        
//         let camera = {
//             addToCard : {
//             quantity : add,
//             lense: objo,
//             id: getClickedCardId
//         },
//         product: localStorage.getItem('clicked Card')
//         }

// function AddToCard() {
    
//     if(getClickedCardId === camera_one._id){

//         let add = click.addToCard.quantity ++;
//         objo = localStorage.getItem('lense')
        
//         let camera = {
//             addToCard : {
//             quantity : add,
//             lense: objo,
//             id: getClickedCardId
//         },
//         product: localStorage.getItem('clicked Card')
//         }

//         localStorage.setItem('camera One', JSON.stringify(camera))
//         showCount.textContent = click.addToCard.quantity
      

//         let i = click.addToCard.quantity
//         if(i >= 1){
//             showRemoveItem.style.display = "block"
//         }
//     }
//     else if(getClickedCardId === camera_two._id){
//         let add = click.addToCard.quantity ++;
//         objo = localStorage.getItem('lense')
        
//         let camera = {
//             addToCard : {
//             quantity : add,
//             lense: objo,
//             id: getClickedCardId
//         },
//         product: localStorage.getItem('clicked Card')
//         }

//         localStorage.setItem('camera Two', JSON.stringify(camera))
//         showCount.textContent = click.addToCard.quantity
//         // console.log(click.addToCard.quantity)
//         let i = click.addToCard.quantity
//         if(i >= 1){
//             showRemoveItem.style.display = "block"
//         }
   
//     }
//     else if(getClickedCardId === camera_three._id){
//         let add = click.addToCard.quantity ++;
//         objo = localStorage.getItem('lense')
        
//         let camera = {
//             addToCard : {
//             quantity : add,
//             lense: objo,
//             id: getClickedCardId
//         },
//         product: localStorage.getItem('clicked Card')
//         }

//         localStorage.setItem('camera Three', JSON.stringify(camera))
//         showCount.textContent = click.addToCard.quantity
//         // console.log(click.addToCard.quantity)
//         let i = click.addToCard.quantity
//         if(i >= 1){
//             showRemoveItem.style.display = "block"
//         }
        
//     }
//     else if(getClickedCardId === camera_four._id){
//         let add = click.addToCard.quantity ++;
//         objo = localStorage.getItem('lense')
        
//         let camera = {
//             addToCard : {
//             quantity : add,
//             lense: objo,
//             id: getClickedCardId
//         },
//         product: localStorage.getItem('clicked Card')
//         }

//         localStorage.setItem('camera Four', JSON.stringify(camera))
//         showCount.textContent = click.addToCard.quantity
//         // console.log(click.addToCard.quantity)
//         let i = click.addToCard.quantity
//         if(i >= 1){
//             showRemoveItem.style.display = "block"
//         }
        
//     }
//     else if(getClickedCardId === camera_five._id){
//         click.addToCard.quantity ++;
//         click.addToCard.lense;

//         localStorage.setItem('camera Five', JSON.stringify(camera))
//         showCount.textContent = click.addToCard.quantity
//         // console.log(click.addToCard.quantity)
//         let i = click.addToCard.quantity
//         if(i >= 1){
//             showRemoveItem.style.display = "block"
//         }
        
//     }
// }

// function removeItemes(){
//     click.addToCard.quantity --;
//     localStorage.setItem('add more camera', JSON.stringify(click))
//     showCount.textContent = click.addToCard.quantity
    
//     let i = click.addToCard.quantity
//     if(i === 0){
//         showRemoveItem.style.display = "none"
//     }
// }
// // debug cette merde !!! 