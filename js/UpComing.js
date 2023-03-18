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

/* function displayAllEvents(data) {
  let upcomingEvents = ""; 
  for (let event of data.events){
    let currentDate = (data.currentDate);
    let eventDate = (event.date);
    if (eventDate > currentDate)
    {upcomingEvents += createcard(event)}
}
document.getElementById("cards").innerHTML += upcomingEvents;
}
 */
/* 
console.log([document])
function crearCheckbox() {
  const todasLasCategorias = data.events.map(evento => evento.category);
  const categoriasUnicas = [...new Set(todasLasCategorias)];
  const inputCheckbox = categoriasUnicas.map(category => {
    return `<div class="form-check form-check-inline">
               <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
               <label class="form-check-label" for="${category}">${category}</label>
             </div>`;

  }).join('');
  document.getElementById("checkboxes").innerHTML = inputCheckbox;


  categoriasUnicas.forEach(category => {
    document.getElementById(category).addEventListener("change", () => {
      const checkedBoxes = categoriasUnicas.filter(category => document.getElementById(category).checked);
      let filteredEvents = [];
      if (checkedBoxes.length === 0) {
        filteredEvents = data.events;
      } else {
        filteredEvents = data.events.filter(event => checkedBoxes.includes(event.category));
      }
      displayAllEvents({ events: filteredEvents });
    });
  });

  const searchInput = document.getElementById("search");
  searchInput.addEventListener("keyup", () => {
    const filteredEvents = data.events.filter(event => event.name.toLowerCase().includes(searchInput.value.trim().toLowerCase()));
    displayAllEvents({ events: filteredEvents });
  });
}
crearCheckbox();
displayAllEvents(data); 


 */