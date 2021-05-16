// const cameraName = document.getElementById('cameraName')
const cameraName = localStorage.getItem('Camera_name');
const price = localStorage.getItem('Price');
const imgUrl = localStorage.getItem('image');
const lense = localStorage.getItem('lense');

// const firstName = document.getElementById('validationDefault01').value
// console.log(firstName)

function setDataStorage() {
  
    document.getElementById('cameraName').innerHTML = cameraName;
    document.getElementById('price').innerHTML = price;
    document.getElementById('imageUrl').src = imgUrl;
    document.getElementById('lense').innerHTML = `${'Objectif : ' + lense}`;
  
  }
  setDataStorage()


const addPaiement = document.getElementById('buy').addEventListener('click', function() {
    
    console.log(document.getElementById('validationDefault01').value)
    console.log(document.getElementById('validationDefault02').value)
    console.log(document.getElementById('inputAddress').value)
    console.log(document.getElementById('validationDefault03').value)
    console.log(document.getElementById('inputEmail4').value)
})
//   contact: {
//     *   firstName: string,
//     *   lastName: string,
//     *   address: string,
//     *   city: string,
//     *   email: string
//     * }
//     * products: [string] <-- array of product _id

//choper L'ID du produit et le mettre dans le local storage et envoyer a l'API