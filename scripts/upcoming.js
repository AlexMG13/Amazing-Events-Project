function upcomingDate(arrData, date) {
    let currentDate = new Date(arrData.currentDate).getTime();
    let eventDate = new Date(date).getTime();
    return currentDate>=eventDate;
}

function upCards(arrData,place){
  let cards= '';
  arrData.map(event => cards += `<div class="card m-2 bg-section-1" style="width: 18rem;">
    <img src="${event.image}" class="card-img-top mt-2"
        alt="${event.name}">
    <div class="card-body text-card-d">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <div class="d-flex justify-content-between align-items-baseline">
            <p>Precio: $${event.price}</p>
            <a href="./details.html?id=${event._id}" class="btn-b">view more</a>
            </div>
            </div>
            </div>`)
            if(arrData.length == 0){
              cards += `<h2 class='text-center'>Coudn't find the event asked, please search another or just reload.<h2>`
            }
            place.innerHTML = cards;
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

function showCategories(arrData,place) {
  let categories = "";
  arrData.map((category) => (categories += `<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="checkbox" value="${category}">
  <label class="form-check-label" for="checkbox">${category}</label></div>`)
  );
  place.innerHTML = categories;
}

document.title='Upcoming Events';
let upcomingCards = document.getElementById('upcoming-card');
let homeCategories = document.getElementById("category");
let buttonEvents = document.getElementById('button');
let checkboxEvents = document.querySelectorAll('#checkbox');

function buttonFunction(e){
  e.preventDefault();
  let upcomingEvents = eventsFetched.events.filter(event => upcomingDate(eventsFetched,event.date));
  upcomingCards.innerHTML = '';
  let eventsearch =[];
  let searchEvent = document.getElementById("search").value;
  let category = document.querySelectorAll('input:checked')
  let categoryChecked = Array.from(category).map(c => c.value);
  if(searchEvent != ''){
    eventsearch = upcomingEvents.filter(event => (event.name.toLowerCase().includes(searchEvent.toLowerCase())));
  }
  if(categoryChecked.length > 0){
    let eventChecked = upcomingEvents.filter(event => categoryChecked.includes(event.category));
    eventChecked = eventChecked.forEach(event => eventsearch.push(event));
  }
  upCards(eventsearch,upcomingCards);
}

let eventsFetched = '';
//fetch('./API.json')
async function getData(){
  await fetch('https://mindhub-xj03.onrender.com/api/amazing').then(response => response.json()).then(datosApi => {
    eventsFetched = datosApi;
    const upcomingEvents = eventsFetched.events.filter(event => upcomingDate(eventsFetched,event.date));
    upCards(upcomingEvents,upcomingCards);
    showCategories(getCategory(eventsFetched.events),homeCategories);
    buttonFunction();
  }).catch(error => console.log(error.message))
}

buttonEvents.addEventListener('click', buttonFunction);
getData();