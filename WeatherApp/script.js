const loader = document.querySelector(".loader-container");
const errorInformation = document.querySelector(".error-information");

// fonction async qui attend des résultats
async function getWeatherData() {
  try {
    //methode fetch fait une get request pour demander les données. Fait une promesse qui se résoud si données, ou qui se reject en cas d'erreur de réseau
    const response = await fetch(
      "https://api.airvisual.com/v2/nearest_city?key=271f4602-0fa8-4cd0-845a-691bf7981404"
    );

    //pour gérer les autres types d'erreur (autres que réseau : client, serveur etc.)
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    //pour utiliser la réponse à la requête, transformer de json en js
    const responseData = await response.json();
    console.log(responseData);
    //créer un objet contenant seulement les données qui nous intéressent
    const sortedData = {
      city: responseData.data.city,
      country: responseData.data.country,
      iconId: responseData.data.current.weather.ic,
      temperature: responseData.data.current.weather.tp,
    };

    populateUI(sortedData);

    // Gérer les erreurs (de réseau, etc.)
  } catch (error) {
    loader.classList.remove("active");
    errorInformation.textContent = error.message;
  }
}

getWeatherData();

const cityName = document.querySelector(".city-name");
const countryName = document.querySelector(".country-name");
const temperature = document.querySelector(".temperature");
const infoIcon = document.querySelector(".info-icon");

function populateUI(data) {
  cityName.textContent = data.city;
  countryName.textContent = data.country;
  temperature.textContent = `${data.temperature} °C`;
  infoIcon.src = `ressources/icons/${data.iconId}.svg`;
  infoIcon.style.width = "150px";
  loader.classList.remove("active");
}
