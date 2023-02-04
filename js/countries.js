const displayCountryDetail = (country) => {
  const countryDetail = document.getElementById("country-detail");
  countryDetail.innerHTML = `
        <h2>Details: ${country.name.common}</h2>
        <img src="${country.flags.png}">
    `;
};

const loadCountryDetail = (code) => {
  //   console.log("get country detail ", code);
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
};

const displayCountries = (countries) => {
  //   for (const country of countries) {
  //     console.log(country);
  //   }
  const countriesContainer = document.getElementById("countries-container");
  countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `<h3>Name: ${country.name.common}</h3>
    <p>Capital: ${country.capital ? country.capital[0] : "no capital"}</p>
    <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
    `;
    console.log(country);
    countriesContainer.appendChild(countryDiv);
  });
};

const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

loadCountries();