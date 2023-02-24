
function upcomingDate(dateArr) {
    let currentDate = data.currentDate;
    let year = parseInt(currentDate.substr(0,4));
    let month = parseInt(currentDate.substr(5,2));
    let day = parseInt(currentDate.substr(8,2));

    let yearEvent = parseInt(dateArr.substr(0,4));
    let monthEvent = parseInt(dateArr.substr(5,2));
    let dayEvent = parseInt(dateArr.substr(8,2));

    if (yearEvent >= year && monthEvent >= month && dayEvent >= day){
        return true;
    }
    return false;
}


const upcomingEvents = data.events.filter(event => upcomingDate(event.date));
