const description = document.querySelectorAll('.cameraDescription');
const imageUrl = document.querySelectorAll('.imageUrl');
const lenses = document.querySelectorAll('.lense');
const cameraName = document.querySelectorAll('.cameraName');
const prices = document.querySelectorAll('.cameraPrices');
let cameraId;

const lensesOne = document.getElementById("lensesOne").addEventListener("click", function() {
    document.getElementById("choise").innerHTML = document.getElementById('lensesOne').textContent;
});
const lensesTwo = document.getElementById("lensesTwo").addEventListener("click", function() {
    document.getElementById("choise").innerHTML = document.getElementById('lensesTwo').textContent;
});
const lensesThree = document.getElementById("lensesThree").addEventListener("click", function() {
    document.getElementById("choise").innerHTML = document.getElementById('lensesThree').textContent;
});

const choise = document.getElementById('choise');
const choiseResult = 'Choisir un objectif'
let resultFromAPI;
let lensesArray


const productInCard = {
    titre : cameraName,
    prix: prices,
    lense: lenses,
    img: imageUrl
}
const addToCard = document.getElementById('addToCard').addEventListener("click", function() {
    productInCard.titre = cameraName[0].innerHTML,
    productInCard.prix = prices[0].textContent,
    productInCard.img = imageUrl[0].src
    productInCard.lense = document.getElementById('choise').innerText

    localStorage.setItem("Camera_name", productInCard.titre)
    localStorage.setItem("Price", productInCard.prix = prices[0].textContent)
    localStorage.setItem("image", document.getElementById('imageUrl').src)

    if(choise.innerHTML === choiseResult){
        alert('chosir un objectif')
    }
    else if (choise.innerHTML === ''){
        alert('chosir un objectif')
    }
    else{
        localStorage.setItem("lense", document.getElementById('choise').innerText)
        window.open('cart.html')
    }
})

async function OneCard(){

    await fetch(`http://localhost:3000/api/cameras`)
        .then(responce => responce.json())
        .then(data => {
            resultFromAPI = data
            
            if(localStorage.id === "cardOne") {

                    description[0].innerText = resultFromAPI[0].description;
                    imageUrl[0].src = resultFromAPI[0].imageUrl;
                    cameraName[0].innerText = resultFromAPI[0].name;
                    prices[0].innerText = `${(resultFromAPI[0].price/100).toFixed(2)} €`;
                    for(let i = 0; i<resultFromAPI[0].lenses.length; i++){
                        lenses[i].textContent = resultFromAPI[i].lenses[0];
                    }
                    cameraId = resultFromAPI[0]._id
                    localStorage.setItem("camera_id", cameraId)
                    console.table(cameraId)

                } else
                 if(localStorage.id === "cardTwo"){

                    description[0].innerText = resultFromAPI[1].description;
                    imageUrl[0].src = resultFromAPI[1].imageUrl;
                    cameraName[0].innerText = resultFromAPI[1].name;
                    prices[0].innerText = `${(resultFromAPI[1].price/100).toFixed(2)} €`;
                    for(let i = 0; i<resultFromAPI[1].lenses.length; i++){
                        lenses[i].textContent = resultFromAPI[i].lenses[0];
                    }
                    cameraId = resultFromAPI[1]._id
                    localStorage.setItem("camera_id", cameraId)

                } else
                 if(localStorage.id === "cardThree"){

                    description[0].innerText = resultFromAPI[2].description;
                    imageUrl[0].src = resultFromAPI[2].imageUrl;
                    cameraName[0].innerText = resultFromAPI[2].name;
                    prices[0].innerText = `${(resultFromAPI[2].price/100).toFixed(2)} €`;
                    for(let i = 0; i<resultFromAPI[2].lenses.length; i++){
                        lenses[i].textContent = resultFromAPI[i].lenses[0];
                    }
                    cameraId = resultFromAPI[2]._id
                    localStorage.setItem("camera_id", cameraId)
                   
                } else
                 if(localStorage.id === "cardFour"){

                    description[0].innerText = resultFromAPI[3].description;
                    imageUrl[0].src = resultFromAPI[3].imageUrl;
                    cameraName[0].innerText = resultFromAPI[3].name;
                    prices[0].innerText = `${(resultFromAPI[3].price/100).toFixed(2)} €`;
                    for(let i = 0; i<resultFromAPI[3].lenses.length; i++){
                        lenses[i].textContent = resultFromAPI[i].lenses[0];
                    }
                    cameraId = resultFromAPI[3]._id
                    localStorage.setItem("camera_id", cameraId)
                
                } else
                 if(localStorage.id === "cardFive"){

                    description[0].innerText = resultFromAPI[4].description;
                    imageUrl[0].src = resultFromAPI[4].imageUrl;
                    cameraName[0].innerText = resultFromAPI[4].name;
                    prices[0].innerText = `${(resultFromAPI[4].price/100).toFixed(2)} €`;
                    for(let i = 0; i<resultFromAPI[4].lenses.length; i++){
                        lenses[i].textContent = resultFromAPI[i].lenses[0];
                    }
                    cameraId = resultFromAPI[4]._id
                    localStorage.setItem("camera_id", cameraId)
                
                } else {
                    alert("retourner a l'acceuil \net choisir un produit")
                }
            
        })

    }    
    
    OneCard()

//check de verication 
// panier = tableau 
// enregisrter le panier dans le local storage
// envoie de commande
// en commentaire dans le fichier
//envoie les truc en com dans le controllers/cameras.js