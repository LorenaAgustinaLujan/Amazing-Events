let urlAPI = 'https://mindhub-xj03.onrender.com/api/amazing';
let datos = [];


async function getDatos() {
    try {
        let response = await fetch(urlAPI);
        let dataAPI = await response.json();
        console.log(dataAPI);

        for (const dato of dataAPI.events) {
            try {
                let data = await getDatos(dato.url);
                datos.push(data);
            } catch (error) {
                console.log(error.menssage);
            }
        }
        console.log(datos);
    } catch (error) {
        console.log(error.message);
    }
}
getDatos();


async function getDatos(url) {
    try {
        let response = await fetch(url);
        let dato = await response.json();
        return dato;
    } catch (error) {
        console.log(error.message);
        return {};
    }
}

//localStorage.setItem('dataLocal', JSON.stringify(dataAPI));       console.error('Cant get data: ' + error);