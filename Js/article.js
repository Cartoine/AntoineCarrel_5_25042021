// async function main() {

//     const array_cameras = await fetch("http://localhost:3000/api/cameras")
//     .then(resultat => resultat.json())
//     .then(json => json)        
//         // .then(json => json = json.forEach(function(product) {
//         //     console.log(product)
//         // }))
//         displayCameraInfos(array_cameras)
//         console.table(array_cameras)
// }

// function displayCameraInfos(data){
//     const title = data[0].name;
//     const description = data[0].description;
//     const price = data[0].price;
//     const image = data[0].imageUrl;
    
//     document.querySelector('#title').textContent = title
//     document.querySelector('#description').textContent = description
//     document.querySelector('#price').textContent = price
//     document.querySelector('#image').src = image
// }