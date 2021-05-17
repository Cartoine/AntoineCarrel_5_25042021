// const cameraName = document.getElementById('cameraName')
const cameraName = localStorage.getItem('Camera_name');
const price = localStorage.getItem('Price');
const imgUrl = localStorage.getItem('image');
const lense = localStorage.getItem('lense');
const cameraId = localStorage.getItem('camera_id')

const contact = {}
let responseFromAPI;

function setDataStorage() {
  
    document.getElementById('cameraName').innerHTML = cameraName;
    document.getElementById('price').innerHTML = price;
    document.getElementById('imageUrl').src = imgUrl;
    document.getElementById('lense').innerHTML = `${'Objectif : ' + lense}`;
  
  }
  setDataStorage()

const addPaiement = document.getElementById('buy').addEventListener('click', function() {

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
console.log(newOrder)
    console.table(contact) 
    const postData = fetch("http://localhost:3000/api/cameras/order", {

    method: "POST",
    body: JSON.stringify(newOrder),
    headers: {
        "Content-Type" : "application/json"
    }
})

async function promise(){
   await postData.then(response => response = response.json())
//    .then(data => data = console.log(data))
   .then(data => {
       responseFromAPI = data
    })
    console.table(responseFromAPI)
}

promise()
})