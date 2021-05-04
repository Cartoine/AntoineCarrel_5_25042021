const description = document.querySelectorAll('.cameraDescription')
const imageUrl = document.querySelectorAll('.imageUrl')
const lenses = document.querySelectorAll('.lenses')
const cameraName = document.querySelectorAll('.cameraName');
const prices = document.querySelectorAll('.cameraPrices');
let resultFromAPI;

async function CallAPI() {
    await fetch(`http://localhost:3000/api/cameras`)
        .then(responce => responce.json())
        .then(data => {

            resultFromAPI = data
            // console.log(resultFromAPI)
            for (let i in resultFromAPI) {
                // console.log(resultFromAPI[i]);
                description[i].innerText = resultFromAPI[i].description;
                imageUrl[i].src = resultFromAPI[i].imageUrl;
                cameraName[i].innerText = resultFromAPI[i].name;
                prices[i].innerText = `${resultFromAPI[i].price.toString().slice(0, -2)},00 € `;
                //Pour les prix diviser par 10 et number to fixe
                // console.log(prices[i].innerText);
            }
        })
}
CallAPI()

let btnCard = function()
{
    let id = this.id
    localStorage.id = this.id
    
}
document.getElementById('cardOne').onclick = btnCard;
document.getElementById('cardTwo').onclick = btnCard;
document.getElementById('cardThree').onclick = btnCard;
document.getElementById('cardFour').onclick = btnCard;
document.getElementById('cardFive').onclick = btnCard;

// export default btnCard