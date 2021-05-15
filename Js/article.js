const description = document.querySelectorAll('.cameraDescription');
const imageUrl = document.querySelectorAll('.imageUrl');
const lenses = document.querySelectorAll('.lense');
const cameraName = document.querySelectorAll('.cameraName');
const prices = document.querySelectorAll('.cameraPrices');

let resultFromAPI;
let lensesArray



async function OneCard(){

    await fetch(`http://localhost:3000/api/cameras`)
        .then(responce => responce.json())
        .then(data => {
            resultFromAPI = data
            
            if(localStorage.id === "cardOne") {

                    description[0].innerText = resultFromAPI[0].description;
                    imageUrl[0].src = resultFromAPI[0].imageUrl;
                    cameraName[0].innerText = resultFromAPI[0].name;
                    prices[0].innerText = `${(resultFromAPI[0].price/1000).toFixed(2)} €`;
                    for(let i = 0; i<resultFromAPI[0].lenses.length; i++){
                        // console.log(i)
                        lenses[i].textContent = resultFromAPI[i].lenses[0];
                    }
                  

                } else
                 if(localStorage.id === "cardTwo"){

                    description[0].innerText = resultFromAPI[1].description;
                    imageUrl[0].src = resultFromAPI[1].imageUrl;
                    cameraName[0].innerText = resultFromAPI[1].name;
                    prices[0].innerText = `${(resultFromAPI[1].price/1000).toFixed(2)} €`;
                    for(let i = 0; i<resultFromAPI[1].lenses.length; i++){
                        // console.log(i)
                        lenses[i].textContent = resultFromAPI[i].lenses[0];
                    }

                } else
                 if(localStorage.id === "cardThree"){

                    description[0].innerText = resultFromAPI[2].description;
                    imageUrl[0].src = resultFromAPI[2].imageUrl;
                    cameraName[0].innerText = resultFromAPI[2].name;
                    prices[0].innerText = `${(resultFromAPI[2].price/1000).toFixed(2)} €`;
                    for(let i = 0; i<resultFromAPI[2].lenses.length; i++){
                        // console.log(i)
                        lenses[i].textContent = resultFromAPI[i].lenses[0];
                    }
                   
                } else
                 if(localStorage.id === "cardFour"){

                    description[0].innerText = resultFromAPI[3].description;
                    imageUrl[0].src = resultFromAPI[3].imageUrl;
                    cameraName[0].innerText = resultFromAPI[3].name;
                    prices[0].innerText = `${(resultFromAPI[3].price/1000).toFixed(2)} €`;
                    for(let i = 0; i<resultFromAPI[3].lenses.length; i++){
                        // console.log(i)
                        lenses[i].textContent = resultFromAPI[i].lenses[0];
                    }
                
                } else
                 if(localStorage.id === "cardFive"){

                    description[0].innerText = resultFromAPI[4].description;
                    imageUrl[0].src = resultFromAPI[4].imageUrl;
                    cameraName[0].innerText = resultFromAPI[4].name;
                    prices[0].innerText = `${(resultFromAPI[4].price/1000).toFixed(2)} €`;
                    for(let i = 0; i<resultFromAPI[4].lenses.length; i++){
                        // console.log(i)
                        lenses[i].textContent = resultFromAPI[i].lenses[0];
                    }
                
                } else {
                    console.log("contacter l'équipe")
                }
            
        })

    }


    
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
    
OneCard()

//check de verication 
// panier = tableau 
// enregisrter le panier dans le local storage
// envoie de commande
// en commentaire dans le fichier
//envoie les truc en com dans le controllers/cameras.js