

function pastDate(arrData,date) {
    let currentDate = arrData.currentDate;
    let year = parseInt(currentDate.substr(0,4));
    let yearEvent = parseInt(date.substr(0,4));
    if (yearEvent < year){
        return true;
    }
    return false;
}

const pastEvents = data.events.filter(event => pastDate(data,event.date));

let pastCards = document.getElementById('past-card');

pastCards.innerHTML = paCards(pastEvents);

function paCards(arrData){
    let cards = '';
    for (event of arrData){
        cards += `<div class="card m-2 bg-section-1" style="width: 18rem;">
        <img src="${event.image}" class="card-img-top mt-2"
            alt="${event.name}">
        <div class="card-body text-card-d">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
            <div class="d-flex justify-content-between align-items-baseline">
                <p>Precio: ${event.price}</p>
                <a href="./details.html" class="btn-b">view more</a>
            </div>
        </div>
    </div>`
    }
    return cards;
}