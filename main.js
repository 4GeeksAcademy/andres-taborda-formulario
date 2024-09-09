const provincias = [
    "A Coruña",
    "Álava",
    "Albacete",
    "Alicante",
    "Almería",
    "Ávila",
    "Badajoz",
    "Baleares (Illes)",
    "Barcelona",
    "Burgos",
    "Cáceres",
    "Cádiz",
    "Castellón",
    "Ciudad Real",
    "Córdoba",
    "Cuenca",
    "Girona",
    "Granada",
    "Guadalajara",
    "Huelva",
    "Huesca",
    "Jaén",
    "León",
    "Lleida",
    "Lugo",
    "Madrid",
    "Málaga",
    "Murcia",
    "Navarra",
    "Ourense",
    "Asturias",
    "Palencia",
    "Pontevedra",
    "Salamanca",
    "Santa Cruz de Tenerife",
    "Cantabria",
    "Segovia",
    "Sevilla",
    "Soria",
    "Tarragona",
    "Teruel",
    "Toledo",
    "Valencia",
    "Valladolid",
    "Vizcaya",
    "Zamora",
    "Zaragoza"
];

const formValidation = () => {
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
}

const showStates = () => {
    provincias.map( state => {
        const optionElement = document.createElement("option")
        const selectElement = document.getElementById("selectedStates")
        optionElement.value = state;
        optionElement.textContent = state;

        selectElement.appendChild(optionElement);
    })
}

const setUp = () =>{
    formValidation()
    showStates()
}

document.addEventListener('DOMContentLoaded', setUp)