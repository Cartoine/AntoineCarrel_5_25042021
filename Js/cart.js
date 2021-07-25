// import {storageParse, camera_one, camera_two, camera_three, camera_four, camera_five } from "./call.js"

const reload = document.getElementById("btnReload").addEventListener("click", function() {
    localStorage.removeItem('cameraId');
    localStorage.removeItem('cart product');
    location.reload()
});
const cartProduct = JSON.parse(localStorage.getItem('cart product'))
console.table(cartProduct)

// vérification si le panier est vide
if(cartProduct === null || cartProduct.length < 1){
    let buy = document.getElementById('buy')
    let backLink = document.getElementById('backLink')
    buy.style.display = "none"
    backLink.style.display = "block"
}

const cartList = document.getElementById('createArray')
console.log(cartList)

for(let i = 0; i< cartProduct.length; i++){

    let createSectionArticle = document.createElement('tr')
    cartList.appendChild(createSectionArticle)
    createSectionArticle.classList.add('sectionArticle')
    
    let createName = document.createElement('td')
    createSectionArticle.appendChild(createName)
    createName.innerHTML = cartProduct[i].name
    
    let createOption = document.createElement('td')
    createSectionArticle.appendChild(createOption)
    createOption.innerHTML = cartProduct[i].lense
    
    let createQuantity = document.createElement('td')
    createSectionArticle.appendChild(createQuantity)
    createQuantity.innerHTML = 1

    let createPrice = document.createElement('td')
    createSectionArticle.appendChild(createPrice)
    createPrice.innerHTML = `${(cartProduct[i].price/100).toFixed(2)} €`;
   
    
    let createImg = document.createElement('IMG')
    createSectionArticle.appendChild(createImg)
    createImg.id = 'img_cart'
    createImg.setAttribute('src', cartProduct[i].imageUrl)
    
}

let orderForm = document.getElementById('form')

orderForm.addEventListener('submit', function(e) {
    let regexName = /^[a-zA-Z-\s]+$/
    let regexAdress = /^[a-zA-Z0-9]+/
    let regexMail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    let firstName = document.getElementById('firstName')
    let lastName = document.getElementById('lastName')
    let mail = document.getElementById('mail')
    let city = document.getElementById('city')
    let adresse = document.getElementById('address')

    if(firstName.value.trim() === "" && lastName.value.trim() === ""){
        let myError = document.getElementById('error')
        myError.innerHTML = "* Merci de bien remplire le champ Prénom"
        e.preventDefault()
        
    }else if (regexName.test(firstName.value) === false){
        let myError = document.getElementById('error')
        myError.innerHTML = "* Votre prénom peut contenir des lettres sans accent et des tirets uniquements"
        e.preventDefault()
        
    }else if(lastName.value.trim() === ""){
        let myError = document.getElementById('error2')
        myError.innerHTML = "* Merci de bien remplire le champ nom"
        e.preventDefault()
        
    }else if (regexName.test(lastName.value) === false){
        let myError = document.getElementById('error2')
        myError.innerHTML = "* Votre nom peut contenir des lettres sans accent et des tirets uniquements"
        e.preventDefault()
        
    }else if(mail.value.trim() === ""){
        let myError = document.getElementById('mailError')
        myError.innerHTML = "* Merci de bien remplire le champ mail"
        e.preventDefault()
        
    }else if (regexMail.test(mail.value) === false){
        let myError = document.getElementById('mailError')
        myError.innerHTML = "* Votre mail doit contenir un \"@\" ainsi qu\'un \".\""
        e.preventDefault()
        
    }else if(city.value.trim() === ""){
        let myError = document.getElementById('cityError')
        myError.innerHTML = "* Merci de bien remplire le champ ville"
        e.preventDefault()      

    }else if (regexAdress.test(city.value) === false){
        let myError = document.getElementById('cityError')
        myError.innerHTML = "* Ce camp ne doit pas contenir de caractère spéciaux"
        e.preventDefault()
        
    }else if(adresse.value.trim() === ""){
        let myError = document.getElementById('adressError')
        myError.innerHTML = "* Merci de bien remplire le champ mail"
        e.preventDefault()

    }else if (regexAdress.test(adresse.value) === false){
        let myError = document.getElementById('adressError')
        myError.innerHTML = "* Votre adresse ne doit pas contenir de \"@\" ainsi que \'de \".\""
        e.preventDefault()

    }else {
       
       let newOrder = {
            contact :{
                firstName: firstName.value,
                lastName: lastName.value,
                address: address.value,
                city: city.value,
                email: mail.value
            },
            products: [
                cartProduct[0]._id
            ]
        }
    
        //création d'une constante avec l'URL de l'API qui est en POST
    const postData = fetch("http://localhost:3000/api/cameras/order", {
    
        method: "POST",
        body: JSON.stringify(newOrder),
        headers: {
            "Content-Type" : "application/json"
        }
            
    })
    let responseFromAPI
    async function promise(){
            //attends la reponce de l'API et transforme cette rponce en json
            await postData.then(response => response = response.json())
        // cette reponce et Stocker dans une variable
            .then(data => {
                responseFromAPI = data
            })
            localStorage.setItem("order", JSON.stringify(responseFromAPI))
        }
    promise()
}

})