const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = (countries) => {
    // console.log(countries)
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0])
    const country = document.getElementById('countries');
    country.innerHTML = countriesHTML.join(' ');
}
// const getCountryHTML = (country) => {
const getCountryHTML = ({name, flags, area, region}) => { //? for option 2
    //* option 1 destructuring
    /* const {name, flags} = country;
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <img src="${flags.png}">
        </div>
    `; */
    //* original
    /* return `
        <div class="country">
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `; */
    //* optiona 2 (parameter er vitore destructuring);
    // const {name, flags} = country;
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</p>
            <p>Continent: ${region}</p>
            <img src="${flags.png}">
        </div>
    `;
}
loadCountries();