const description = document.querySelectorAll('.cameraDescription')
const imageUrl = document.querySelectorAll('.imageUrl')
const lenses = document.querySelectorAll('.lenses')
const cameraName = document.querySelectorAll('.cameraName');
const prices = document.querySelectorAll('.cameraPrices');
let resultFromAPI;

 async function CallAPI(){
    await fetch(`http://localhost:3000/api/cameras`)
    .then(responce => responce.json())
    .then(data => {

        resultFromAPI = data
        // console.log(resultFromAPI)
        for(let i in resultFromAPI){
            // console.log(resultFromAPI[i]);
            description[i].innerText = resultFromAPI[i].description;
            imageUrl[i].src = resultFromAPI[i].imageUrl;
            cameraName[i].innerText = resultFromAPI[i].name;
            prices[i].innerText = `${resultFromAPI[i].price.toString().slice(0, -2)},00 € `;

            console.log(prices[i].innerText);
        }
    })    
}

// const prix = '123456';
// console.log(prix.slice(1,-2))

CallAPI()