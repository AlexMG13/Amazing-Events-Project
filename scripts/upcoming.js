function upcomingDate(arrData, date) {
    let currentDate = arrData.currentDate;
    let year = parseInt(currentDate.substr(0,4));
    let month = parseInt(currentDate.substr(5,2));
    let yearEvent = parseInt(date.substr(0,4));
    let monthEvent = parseInt(date.substr(5,2));
    return yearEvent >= year && monthEvent >= month;
}

function upCards(arrData){
    let cards = '';
    arrData.map(event => cards += `<div class="card m-2 bg-section-1" style="width: 18rem;">
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
</div>`)
    return cards;
}

function getCategory(arrData){
    let allCategories = [];
    arrData.forEach((element) => {
      if (allCategories.indexOf(element.category) < 0) {
        allCategories.push(element.category);
      }
    });
    return allCategories.sort();
}

function showCategories(arrData) {
  let categories = "";
  arrData.map((category) => (categories += `<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
    <label class="form-check-label" for="${category}">${category}</label></div>`)
  );
  return categories;
}

const upcomingEvents = data.events.filter(event => upcomingDate(data,event.date));

document.title='Upcoming Events';

let upcomingCards = document.getElementById('upcoming-card');
upcomingCards.innerHTML = upCards(upcomingEvents);

let homeCategories = document.getElementById("category");
homeCategories.innerHTML = showCategories(getCategory(data.events));