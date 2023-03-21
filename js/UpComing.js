let upcomingEvents = ""; 
//let cardContainer = document.getElementById("cards");
let upcomingeventslist=[];

for (let event of data.events){
    let currentDate = (data.currentDate);
    let eventDate = (event.date);
    if (eventDate > currentDate){
    upcomingEvents += createcard(event);
    upcomingeventslist.push(event);
    }
}
document.getElementById("cards").innerHTML = upcomingEvents; 

