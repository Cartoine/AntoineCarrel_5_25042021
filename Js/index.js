const imgProduct = document.getElementById('imgProduct');
const titleProduct = document.getElementById('titleProduct');
const descriptionProduct = document.getElementById('descriptionProduct');

let dataContents;

const fetchDataContent = async() => {
    dataContents = await fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
// console.log(dataContent)
}

const showDataContent = async() => {
    await fetchDataContent();

    results.innerHTML = (

        dataContents.filter(datacontent => datacontent.name)
        .map(datacontent => (
            `
                <div class="col">
                    <div class="card h-100 border-white border-5">
                      <img id="img4" src="${datacontent.imageUrl}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 id="title4" class="card-title">${datacontent.name}</h5>
                        <p id="text4" class="card-text">${datacontent.description}</p>
                        <button type="button" class="btn btn-dark rounded-pill" onClick='window.location.href="/templates/productSheet.html"'>${datacontent.price}</button>
                      </div>
                    </div>
                </div>
            `
        )).join()
    )
}
showDataContent();


fetch('http://localhost:3000/api/cameras')
.then(responce => responce.json())
.then(data => imgProduct.src = data[0].imageUrl)
