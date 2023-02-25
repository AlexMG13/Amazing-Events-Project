document.title='Upcoming Events';

function upcomingDate(arrData, date) {
    let currentDate = arrData.currentDate;
    let year = parseInt(currentDate.substr(0,4));
    let month = parseInt(currentDate.substr(5,2));

    let yearEvent = parseInt(date.substr(0,4));
    let monthEvent = parseInt(date.substr(5,2));

    if (yearEvent >= year && monthEvent >= month){
        return true;
    }
    return false;
}

const upcomingEvents = data.events.filter(event => upcomingDate(data,event.date));

let upcomingCards = document.getElementById('upcoming-card');

upcomingCards.innerHTML = upCards(upcomingEvents);

function upCards(arrData){
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

