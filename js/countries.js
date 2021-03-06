const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))

}
loadCountries();

const displayCountries = countries => {
    //for (const country of countries) {
    //    console.log(country);
    //}

    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
           <h3>Country :${country.name}</h3>
           <h4>Capital : ${country.capital}</h4>
           <button onclick="loadCountryByName('${country.name}')">More Details</button>
        `
        countriesDiv.appendChild(div);
    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
     <h3 id="h3">Country Details</h3>
     <h4>Country Name : ${country.name}</h4>
     <h4>Population : ${country.population}</h4>
     <img width="200px" src="${country.flag}">
   `;
}