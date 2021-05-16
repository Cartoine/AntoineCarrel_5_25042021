// const cameraName = document.getElementById('cameraName')
const cameraName = localStorage.getItem('Camera_name');
const price = localStorage.getItem('Price');
const imgUrl = localStorage.getItem('image');

function setData() {
  
    document.getElementById('cameraName').innerHTML = cameraName;
    document.getElementById('price').innerHTML = price;
    document.getElementById('imageUrl').src = imgUrl;
  
  }
  setData()
