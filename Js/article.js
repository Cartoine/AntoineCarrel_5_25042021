const description = document.querySelectorAll('.cameraDescription')
const imageUrl = document.querySelectorAll('.imageUrl')
const lenses = document.querySelectorAll('.lenses')
const cameraName = document.querySelectorAll('.cameraName');
const prices = document.querySelectorAll('.cameraPrices');
let resultFromAPI;
// const btnCard = function()
// {
//     let id = this.id
//     localStorage.id = this.id
async function taMere(){



    await fetch(`http://localhost:3000/api/cameras`)
        .then(responce => responce.json())
        .then(data => {
            resultFromAPI = data
            console.table(data[1])

            // console.table(resultFromAPI[1])
            console.log(localStorage.id)
            //probleme viens de la recupération des data de L'API

            if(localStorage.id === "cardOne") {
                
                    description[0].innerText = resultFromAPI[0].description;
                    imageUrl[0].src = resultFromAPI[0].imageUrl;
                    cameraName[0].innerText = resultFromAPI[0].name;
                    prices[0].innerText = `${resultFromAPI[0].price.toString().slice(0, -2)},00 € `;
                
                } else
                 if(localStorage.id === "cardTwo"){

                    description[0].innerText = resultFromAPI[1].description;
                    imageUrl[0].src = resultFromAPI[1].imageUrl;
                    cameraName[0].innerText = resultFromAPI[1].name;
                    prices[0].innerText = `${resultFromAPI[1].price.toString().slice(0, -2)},00 € `;

                } else
                 if(localStorage.id === "cardThree"){

                    description[0].innerText = resultFromAPI[2].description;
                    imageUrl[0].src = resultFromAPI[2].imageUrl;
                    cameraName[0].innerText = resultFromAPI[2].name;
                    prices[0].innerText = `${resultFromAPI[2].price.toString().slice(0, -2)},00 € `;
                   
                } else
                 if(localStorage.id === "cardFour"){

                    description[0].innerText = resultFromAPI[3].description;
                    imageUrl[0].src = resultFromAPI[3].imageUrl;
                    cameraName[0].innerText = resultFromAPI[3].name;
                    prices[0].innerText = `${resultFromAPI[3].price.toString().slice(0, -2)},00 € `;
                
                } else
                 if(localStorage.id === "cardFive"){

                    description[0].innerText = resultFromAPI[4].description;
                    imageUrl[0].src = resultFromAPI[4].imageUrl;
                    cameraName[0].innerText = resultFromAPI[4].name;
                    prices[0].innerText = `${resultFromAPI[4].price.toString().slice(0, -2)},00 € `;
                
                } else {
                    console.log("contacter l'équipe")
                }
            
        })

    }
    taMere()