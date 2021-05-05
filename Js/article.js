const description = document.querySelectorAll('.cameraDescription');
const imageUrl = document.querySelectorAll('.imageUrl');
const lenses = document.querySelectorAll('.lense');
// const lenses = document.createElement('p')
const cameraName = document.querySelectorAll('.cameraName');
const prices = document.querySelectorAll('.cameraPrices');
let resultFromAPI;
let lensesArray
// const btnCard = function()
// {
//     let id = this.id
//     localStorage.id = this.id
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
                   

                } else
                 if(localStorage.id === "cardTwo"){

                    description[0].innerText = resultFromAPI[1].description;
                    imageUrl[0].src = resultFromAPI[1].imageUrl;
                    cameraName[0].innerText = resultFromAPI[1].name;
                    prices[0].innerText = `${(resultFromAPI[1].price/1000).toFixed(2)} €`;

                } else
                 if(localStorage.id === "cardThree"){

                    description[0].innerText = resultFromAPI[2].description;
                    imageUrl[0].src = resultFromAPI[2].imageUrl;
                    cameraName[0].innerText = resultFromAPI[2].name;
                    prices[0].innerText = `${(resultFromAPI[2].price/1000).toFixed(2)} €`;
                   
                } else
                 if(localStorage.id === "cardFour"){

                    description[0].innerText = resultFromAPI[3].description;
                    imageUrl[0].src = resultFromAPI[3].imageUrl;
                    cameraName[0].innerText = resultFromAPI[3].name;
                    prices[0].innerText = `${(resultFromAPI[3].price/1000).toFixed(2)} €`;
                
                } else
                 if(localStorage.id === "cardFive"){

                    description[0].innerText = resultFromAPI[4].description;
                    imageUrl[0].src = resultFromAPI[4].imageUrl;
                    cameraName[0].innerText = resultFromAPI[4].name;
                    prices[0].innerText = `${(resultFromAPI[4].price/1000).toFixed(2)} €`;
                
                } else {
                    console.log("contacter l'équipe")
                }
            
        })

    }
    
function CallLenses(){
         fetch(`http://localhost:3000/api/cameras`)
        .then(responce => responce.json())
        .then(data => {
            lensesArray = data
            // const newLensesArray;
            
        //  lensesArray.forEach(array => array = console.log(array))
         
            for (let i in lensesArray) {
                lenses[i].innerText = lensesArray[i].lenses[i];
                // console.log(lensesArray[i].lenses[i])
            }

        })
    }

CallLenses()
OneCard()