// OBTENEMOS EL ROOT
export const varRoot = document.querySelector(':root')
// OBTENEMOS EL BODY
export const body = document.body
// OBTENEMOS EL CONTENEDOR 
// VARIABLE CON TODOS LOS PAISES
export const allCountriesFromApi = await getAllCountries()
// FILTRAMOS LAS REGIONES A UNICAS
export const allRegionsCountriesFromApi = [...new Set(
    allCountriesFromApi.map(e => {
        return e.region
    })
)]
// CON ESTA FUNCION OBTENEMOS TODOS LOS PAISES DE LA API
async function getAllCountries() {
    const responseCountries = await fetch('https://restcountries.com/v3.1/all')
    const allCountries = await responseCountries.json()
    return allCountries
}   

export function countriesFilteredFromApi (region) {
    const countriesFiltered = allCountriesFromApi.filter(e => {
        return e.region === region
    })

    return countriesFiltered
}