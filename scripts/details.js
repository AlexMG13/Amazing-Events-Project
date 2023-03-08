const queryString = location.search;
const params = new URLSearchParams(queryString);

const id= params.get("id");

const detailEvent = data.events.find(event => event._id === parseInt(id));

const detailsCard = document.querySelector('#detailCard');

let card = '';

card += `
<div class="text-center card card-d d-flex justify-content-center mx-4 bg-section-1">
<div class="row align-items-center">
    <div class="col-md-6">
        <img src="${detailEvent.image}" alt="${detailEvent.name}" class="img-fluid rounded img-w">
    </div>
    <div class="col-md-6 py-4">
        <h2 class="card-title">${detailEvent.name}</h2>
        <h4 class="card-text">${detailEvent.description}</h4>
        <h6 class="card-subtitle mb-2 text-muted">Placce: ${detailEvent.place}</h6>
        </div>
        </div>
        </div>
        `

detailsCard.innerHTML = card;

