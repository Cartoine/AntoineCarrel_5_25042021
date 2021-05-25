// const cameraName = document.getElementById('cameraName')
// const cameraName = localStorage.getItem('Camera_name');
// const price = localStorage.getItem('Price');
// const imgUrl = localStorage.getItem('image');
// const lense = localStorage.getItem('lense');
// const cameraId = localStorage.getItem('camera_id')

const contact = {}
let responseFromAPI;

function setDataStorage() {
  
    document.getElementById('cameraName').innerHTML = localStorage.getItem('Camera_name');
    document.getElementById('price').innerHTML = localStorage.getItem('Price');
    document.getElementById('imageUrl').src = localStorage.getItem('image');
    document.getElementById('lense').innerHTML = localStorage.getItem('lense');
  
  }
  setDataStorage()

const addPaiement = document.getElementById('buy').addEventListener('click', function() {

    //création de mon objet a Envoyé vers l'API
    let newOrder = {
    contact : {
        firstName: "document.getElementById('validationDefault01').value",
        lastName: "document.getElementById('validationDefault02').value",
        address: "document.getElementById('inputAddress').value",
        city: "document.getElementById('validationDefault03').value",
        email: "document.getElementById('inputEmail4').value"
    },
    products: [
        localStorage.getItem('camera_id')
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
    })
    console.log(responseFromAPI)
    localStorage.setItem("order", JSON.stringify(responseFromAPI))
}

promise()
window.open('ticket.html')
//gestion de la validation du Formulaire
//faire une redirectionn
})

// let test = localStorage.getItem('order')
// console.log(test)