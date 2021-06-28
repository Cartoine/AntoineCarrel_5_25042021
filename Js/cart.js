import {storageParse, camera_one, camera_two, camera_three, camera_four, camera_five } from "./call.js"

const storageCameraOne = JSON.parse(localStorage.getItem("camera One"))
console.log(storageCameraOne)
const storageCameraTwo = JSON.parse(localStorage.getItem("camera Two"))
const storageCameraThree = JSON.parse(localStorage.getItem("camera Three"))
const storageCameraFour = JSON.parse(localStorage.getItem("camera Four"))
const storageCameraFive = JSON.parse(localStorage.getItem("camera Five"))

let camera_id = []

const firstName = document.getElementById('validationDefault01')
const lastName = document.getElementById('validationDefault02')
const address = document.getElementById('inputAddress')
const city = document.getElementById('validationDefault03')
const email = document.getElementById('inputEmail4')

const buy = document.getElementById('buy')

function creatArray() {
    
    if(storageCameraOne !== null){
        const createTdAricle = document.createElement('td')
        const createTdOption = document.createElement('td')
        const createTdQuantity = document.createElement('td')
        const createTdPrice = document.createElement('td')
        const createTdForImg = document.createElement('td')
        createTdForImg.id = "imgOne"
        const createTdImg = document.createElement('IMG')

        const create = document.createElement('tr');

        create.id = "create"
        document.querySelector("tbody").appendChild(create)
        createTdAricle.innerHTML = camera_one.name
        createTdOption.innerHTML = storageCameraOne.toCard.lense
        createTdQuantity.innerHTML = storageCameraOne.toCard.addOneMore
        createTdPrice.innerHTML = `${(camera_one.price/100)*storageCameraOne.toCard.addOneMore.toFixed(2)} €`;
        createTdImg.src = camera_one.imageUrl

        document.getElementById('create').appendChild(createTdAricle)
        document.getElementById('create').appendChild(createTdOption)
        document.getElementById('create').appendChild(createTdQuantity)
        document.getElementById('create').appendChild(createTdPrice)
        document.getElementById('create').appendChild(createTdForImg)
        document.getElementById('imgOne').appendChild(createTdImg)

        camera_id =  storageCameraOne.toCard.id 
    }
    if(storageCameraTwo !== null){
        const createTdAricle = document.createElement('td')
        const createTdOption = document.createElement('td')
        const createTdQuantity = document.createElement('td')
        const createTdPrice = document.createElement('td')
        const createTdForImg = document.createElement('td')
        createTdForImg.id = "imgTwo"
        const createTdImg = document.createElement('IMG')

        const create = document.createElement('tr');
        create.id = "create2"
        
        document.querySelector("tbody").appendChild(create)
        createTdAricle.innerHTML = camera_two.name
        createTdOption.innerHTML = storageCameraTwo.toCard.lense
        createTdQuantity.innerHTML = storageCameraTwo.toCard.addOneMore
        createTdPrice.innerHTML = `${(camera_two.price/100)*storageCameraTwo.toCard.addOneMore.toFixed(2)} €`;
        createTdImg.src = camera_two.imageUrl

        document.getElementById('create2').appendChild(createTdAricle)
        document.getElementById('create2').appendChild(createTdOption)
        document.getElementById('create2').appendChild(createTdQuantity)
        document.getElementById('create2').appendChild(createTdPrice)
        document.getElementById('create2').appendChild(createTdForImg)
        document.getElementById('imgTwo').appendChild(createTdImg)

        camera_id =  storageCameraTwo.toCard.id 
    }
    if(storageCameraThree !== null){
        const createTdAricle = document.createElement('td')
        const createTdOption = document.createElement('td')
        const createTdQuantity = document.createElement('td')
        const createTdPrice = document.createElement('td')
        const createTdForImg = document.createElement('td')
        createTdForImg.id = "imgThree"
        const createTdImg = document.createElement('IMG')

        const create = document.createElement('tr');

        create.id = "create3"
        document.querySelector("tbody").appendChild(create)
        createTdAricle.innerHTML = camera_three.name
        createTdOption.innerHTML = storageCameraThree.toCard.lense
        createTdQuantity.innerHTML = storageCameraThree.toCard.addOneMore
        createTdPrice.innerHTML = `${(camera_three.price/100)*storageCameraThree.toCard.addOneMore.toFixed(2)} €`;
        createTdImg.src = camera_three.imageUrl

        document.getElementById('create3').appendChild(createTdAricle)
        document.getElementById('create3').appendChild(createTdOption)
        document.getElementById('create3').appendChild(createTdQuantity)
        document.getElementById('create3').appendChild(createTdPrice)
        document.getElementById('create3').appendChild(createTdForImg)
        document.getElementById('imgThree').appendChild(createTdImg)
        
        camera_id =  storageCameraThree.toCard.id 
    }
    if(storageCameraFour !== null){
        const createTdAricle = document.createElement('td')
        const createTdOption = document.createElement('td')
        const createTdQuantity = document.createElement('td')
        const createTdPrice = document.createElement('td')
        const createTdForImg = document.createElement('td')
        createTdForImg.id = "imgFour"
        const createTdImg = document.createElement('IMG')

        const create = document.createElement('tr');

        create.id = "create4"
        document.querySelector("tbody").appendChild(create)
        createTdAricle.innerHTML = camera_four.name
        createTdOption.innerHTML = storageCameraFour.toCard.lense
        createTdQuantity.innerHTML = storageCameraFour.toCard.addOneMore
        createTdPrice.innerHTML = `${(camera_four.price/100)*storageCameraFour.toCard.addOneMore.toFixed(2)} €`;
        createTdImg.src = camera_four.imageUrl

        document.getElementById('create4').appendChild(createTdAricle)
        document.getElementById('create4').appendChild(createTdOption)
        document.getElementById('create4').appendChild(createTdQuantity)
        document.getElementById('create4').appendChild(createTdPrice)
        document.getElementById('create4').appendChild(createTdForImg)
        document.getElementById('imgFour').appendChild(createTdImg)

        camera_id =  storageCameraFour.toCard.id 
    }
    if(storageCameraFive !== null){
        const createTdAricle = document.createElement('td')
        const createTdOption = document.createElement('td')
        const createTdQuantity = document.createElement('td')
        const createTdPrice = document.createElement('td')
        const createTdForImg = document.createElement('td')
        createTdForImg.id = "imgFive"
        const createTdImg = document.createElement('IMG')

        const create = document.createElement('tr');

        create.id = "create5"
        document.querySelector("tbody").appendChild(create)
        createTdAricle.innerHTML = camera_five.name
        createTdOption.innerHTML = storageCameraFive.toCard.lense
        createTdQuantity.innerHTML = storageCameraFive.toCard.addOneMore
        createTdPrice.innerHTML = `${(camera_five.price/100)*storageCameraFive.toCard.addOneMore.toFixed(2)} €`;
        createTdImg.src = camera_five.imageUrl

        document.getElementById('create5').appendChild(createTdAricle)
        document.getElementById('create5').appendChild(createTdOption)
        document.getElementById('create5').appendChild(createTdQuantity)
        document.getElementById('create5').appendChild(createTdPrice)
        document.getElementById('create5').appendChild(createTdForImg)
        document.getElementById('imgFive').appendChild(createTdImg)

        camera_id =  storageCameraFive.toCard.id 
    }
}
creatArray()

let responseFromAPI;
let newOrder = {
    contact : {}
}

const clicked = document.getElementById("buy").addEventListener("click", function() {
    newOrder = {
        contact :{
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            email: email.value
        },
        products: [
           camera_id
        ]
    }

    //création d'une constante avec l'URL de l'API qui est en POST
const postData = fetch("http://localhost:3000/api/cameras/order", {

    method: "POST",
    body: JSON.stringify(newOrder),
    headers: {
        "Content-Type" : "application/json"
    }
     
})
async function promise(){
        //attends la reponce de l'API et transforme cette rponce en json
       await postData.then(response => response = response.json())
    //    .then(data => data = console.log(data))
    // cette reponce et Stocker dans une variable
       .then(data => {
           responseFromAPI = data
           console.log(data)
        })
        localStorage.setItem("order", JSON.stringify(responseFromAPI))
    }
promise()
});

let check = document.getElementById('invalidCheck2')
const open = document.getElementById("buy").addEventListener('click', function(){

    validate()
})
function validate() {
    if (document.getElementById('invalidCheck2').checked) {
        window.open("ticket.html");
    } else {
        alert("Merci de remplire tous le formulaire");
    }
}
