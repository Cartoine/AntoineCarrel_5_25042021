// const cameraName = document.getElementById('cameraName')
const cameraName = localStorage.getItem('Camera_name');
const price = localStorage.getItem('Price');
const imgUrl = localStorage.getItem('image');
const lense = localStorage.getItem('lense');

function setDataStorage() {
  
    document.getElementById('cameraName').innerHTML = cameraName;
    document.getElementById('price').innerHTML = price;
    document.getElementById('imageUrl').src = imgUrl;
    document.getElementById('lense').innerHTML = `${'Objectif : ' + lense}`;
  
  }
  setDataStorage()
