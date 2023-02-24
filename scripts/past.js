

function pastDate(dateArr) {
    let currentDate = data.currentDate;
    let year = parseInt(currentDate.substr(0,4));
    let month = parseInt(currentDate.substr(5,2));
    let day = parseInt(currentDate.substr(8,2));

    let yearEvent = parseInt(dateArr.substr(0,4));
    let monthEvent = parseInt(dateArr.substr(5,2));
    let dayEvent = parseInt(dateArr.substr(8,2));

    if (yearEvent < year){
        return true;
    }
    return false;
}


const pastEvents = data.events.filter(event => pastDate(event.date));

console.log(pastEvents);