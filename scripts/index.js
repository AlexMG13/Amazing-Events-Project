document.title='Home';

let homeCards = document.getElementById('home-card');

homeCards.innerHTML = indexCards(data.events);

function indexCards(arrData){
    let cards = '';
    for (let event of arrData){
        cards += `<div class="card m-2 bg-section-1" style="width: 18rem;">
        <img src="${event.image}" class="card-img-top mt-2"
            alt="${event.name}">
        <div class="card-body text-card-d">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <div class="d-flex justify-content-between align-items-baseline">
                <p>Precio: $${event.price}</p>
                <a href="./details.html" class="btn-b">view more</a>
            </div>
        </div>
    </div>`
    }
    return cards;
}

