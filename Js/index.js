const description = document.querySelectorAll('.cameraDescription')
const imageUrl = document.querySelectorAll('.imageUrl')
const cameraName = document.querySelectorAll('.cameraName');
const prices = document.querySelectorAll('.cameraPrices');
const SliderImageUrl = document.querySelectorAll('.SliderImageUrl');

let resultFromAPI;

// function CallAPI() {
    fetch(`http://localhost:3000/api/cameras`)
        .then(responce => responce.json())
        .then(data => {
            
            resultFromAPI = data
            // localStorage.setItem('callApi', JSON.stringify(resultFromAPI))
            // console.log(resultFromAPI)
            for (let i in resultFromAPI) {
                description[i].innerText = resultFromAPI[i].description;
                imageUrl[i].src = resultFromAPI[i].imageUrl;
                cameraName[i].innerText = resultFromAPI[i].name;
                prices[i].innerText = `${(resultFromAPI[i].price/100).toFixed(2)} €`;
                SliderImageUrl[i].src = resultFromAPI[i].imageUrl;
            }
            
            const cardOne = document.getElementById("cardOne").addEventListener('click', function(){
                localStorage.setItem('cameraId', resultFromAPI[0]._id)
            })
            const cardTwo = document.getElementById("cardTwo").addEventListener('click', function(){
                localStorage.setItem('cameraId', resultFromAPI[1]._id)
            })
            const cardThree = document.getElementById("cardThree").addEventListener('click', function(){
                localStorage.setItem('cameraId', resultFromAPI[2]._id)
            })
            const cardFour = document.getElementById("cardFour").addEventListener('click', function(){
                localStorage.setItem('cameraId', resultFromAPI[3]._id)
            })
            const cardFive = document.getElementById("cardFive").addEventListener('click', function(){
                localStorage.setItem('cameraId', resultFromAPI[4]._id)
            })
        })
