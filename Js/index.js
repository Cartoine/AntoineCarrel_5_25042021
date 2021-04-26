// let url = "http://localhost:3000/api/cameras";

// document.querySelector("#btn").addEventListener('input', function() {
//     console.log(url)
// });
const img0 = document.getElementById('img0');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

const text0 = document.getElementById('text0');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');

const title0 = document.getElementById('title0');
const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');
const title3 = document.getElementById('title3');
const title4 = document.getElementById('title4');

const price0 = document.getElementById('price0');

// log des reponse de l'API
fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => console.table(data))

fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => img0.src = data[0].imageUrl)

fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => img1.src = data[1].imageUrl)

fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => img2.src = data[2].imageUrl)

fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => img3.src = data[3].imageUrl)

fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => img4.src = data[4].imageUrl)


// fetch('http://localhost:3000/api/cameras')
// .then(responce => responce.json())
// // .then(data => console.log(data[0].price))
// .then(data => console.log(data[0].description))

fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => {
    text0.textContent = `${data[0].description}`;
})

fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => {
    text1.textContent = `${data[1].description}`;
})

fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => {
    text2.textContent = `${data[2].description}`;
})

fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => {
    text3.textContent = `${data[3].description}`;
})

fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => {
    text4.textContent = `${data[4].description}`;
})

fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => {
    title0.textContent = `${data[0].name} 💰 ${data[0].price} €`;
})

fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => {
    title1.textContent = `${data[1].name} 💰 ${data[1].price} €`;
})

fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => {
    title2.textContent = `${data[2].name} 💰 ${data[2].price} €`;
})

fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => {
    title3.textContent = `${data[3].name} 💰 ${data[3].price} €`;
})

fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => {
    title4.textContent = `${data[4].name} 💰 ${data[4].price} €`;
})

// var popoverTriggerList = [].slice.call(document.getElementById('test'))
// var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl)
// })
// var popover = new bootstrap.Popover(document.getElementById('test'), {
//     container: 'body'
//   })

// $(function () {
//     $('[data-toggle="popover"]').popover()
//   })
