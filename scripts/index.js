function indexCards(arrData) {
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

function eventFilter(arrData){
  console.log(arrData);
  let eventFiltered = [];
  arrData.forEach((element) => {
    if (eventFiltered.indexOf(element) < 0) {
      eventFiltered.push(element);
    }
  });
  return eventFiltered;
}

function showCategories(arrData) {
  let categories = "";
  arrData.map((category) => (categories += `<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="checkbox" value="${category}">
    <label class="form-check-label" for="checkbox">${category}</label></div>`)
  );
  return categories;
}


document.title = "Home";

let homeCards = document.getElementById("home-card");
homeCards.innerHTML = indexCards(data.events);

let homeCategories = document.getElementById("category");
homeCategories.innerHTML = showCategories(getCategory(data.events));

let buttonEvents = document.getElementById('button');
let checkboxEvents = document.querySelectorAll('#checkbox');

function categoryCheckFilter(arrData){
  let category =[];
  for(let i=0; i<arrData.length; i++){
    if(arrData[i].checked){
      category.push(arrData[i].value);
    }
  }
  return category;
}

buttonEvents.addEventListener('click', (e)=> {
  e.preventDefault();
  let eventsearch= [];
  homeCards.innerHTML = '';
  let searchEvent = document.getElementById("search").value;
  if(searchEvent!=''){
    eventsearch = data.events.filter(event => (event.name.toLowerCase().includes(searchEvent.toLowerCase()) && searchEvent != '') || event.description.toLowerCase().includes(searchEvent.toLowerCase()));
  }
  console.log(eventsearch);
  let category = categoryCheckFilter(checkboxEvents);
  let eventsCheck = data.events.filter(event => category.includes(event.category));
  let bothArr = eventsearch.concat(eventsCheck);
  homeCards.innerHTML = indexCards(eventFilter(bothArr));
})