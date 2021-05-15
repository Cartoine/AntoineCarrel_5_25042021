const description = document.querySelectorAll('.cameraDescription')
const imageUrl = document.querySelectorAll('.imageUrl')
const lenses = document.querySelectorAll('.lenses')
const cameraName = document.querySelectorAll('.cameraName');
const prices = document.querySelectorAll('.cameraPrices');
const SliderImageUrl = document.querySelectorAll('.SliderImageUrl');
let resultFromAPI;

async function CallAPI() {
    await fetch(`http://localhost:3000/api/cameras`)
        .then(responce => responce.json())
        .then(data => {

            resultFromAPI = data
            for (let i in resultFromAPI) {
                description[i].innerText = resultFromAPI[i].description;
                imageUrl[i].src = resultFromAPI[i].imageUrl;
                cameraName[i].innerText = resultFromAPI[i].name;
                prices[i].innerText = `${(resultFromAPI[i].price/100).toFixed(2)} €`;
            }
        })
}

async function SliderHeader()
{
    await fetch(`http://localhost:3000/api/cameras`)
        .then(responce => responce.json())
        .then(data => {
            resultFromAPI = data
            for (let i in resultFromAPI) {
                SliderImageUrl[i].src = resultFromAPI[i].imageUrl;
            }
        })
}

let btnCard = function()
{
    let id = this.id
    localStorage.id = this.id
    document.getElementById('cardOne').onclick = btnCard;
    document.getElementById('cardTwo').onclick = btnCard;
    document.getElementById('cardThree').onclick = btnCard;
    document.getElementById('cardFour').onclick = btnCard;
    document.getElementById('cardFive').onclick = btnCard;
}
btnCard()
SliderHeader()
CallAPI()