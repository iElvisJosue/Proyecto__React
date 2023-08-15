import { allCountriesFromApi } from "./Const";
// CON ESTA FUNCION LE DAMOS FORMATO A LA POBLACIN
export const formatPopulation = population => {
    if(population){
        let newPopulation = String(population).split('')
        for(let i = 3; i < newPopulation.length; i += 4){
            newPopulation.splice(newPopulation.length - i, 0, ',')
        }
        return newPopulation.join('')
    }
    return '❌'
}

// CON ESTA FUNCION LE DAREMOS FORMATO A LA CANTIDAD
// DE BOTONES POR PAISES EN EL BORDE
export const formatCountriesBorder = countriesBorders => {
    const arrCountriesBorder = []
    countriesBorders.forEach(e => {
        allCountriesFromApi.forEach(c => {
            e === c.cca3 ? arrCountriesBorder.push(c.name.common) : false
        })
    })
    return arrCountriesBorder
}

// CON ESTA FUNCION VERIFICAREMOS LAS PROPIEDADES DE 
// EL OBJETO, YA QUE NO TODOS TIENEN LAS MISMA
export const formatDetails = countrie => {
    const arryCountrieDetails = []

    arryCountrieDetails.push(countrie[0].flags.hasOwnProperty('svg') ? countrie[0].flags.svg : '❌')
    arryCountrieDetails.push(countrie[0].flags.hasOwnProperty('alt') ? countrie[0].flags.alt : '❌')
    arryCountrieDetails.push(countrie[0].name.hasOwnProperty('common') ? countrie[0].name.common : '❌')
    arryCountrieDetails.push(countrie[0].name.hasOwnProperty('nativeName') ? Object.values(countrie[0].name.nativeName)[0].common : '❌')
    arryCountrieDetails.push(countrie[0].hasOwnProperty('population') ? formatPopulation(countrie[0].population) : '❌')
    arryCountrieDetails.push(countrie[0].hasOwnProperty('region') ? countrie[0].region : '❌')
    arryCountrieDetails.push(countrie[0].hasOwnProperty('subregion') ? countrie[0].subregion : '❌')
    arryCountrieDetails.push(countrie[0].hasOwnProperty('capital') ? countrie[0].capital[0] : '❌')
    arryCountrieDetails.push(countrie[0].hasOwnProperty('tld') ? countrie[0].tld[0] : '❌')
    arryCountrieDetails.push(countrie[0].hasOwnProperty('currencies') ? Object.values(countrie[0].currencies)[0].name : '❌')
    arryCountrieDetails.push(countrie[0].hasOwnProperty('languages') ? Object.values(countrie[0].languages).join(', ') : '❌')

    return arryCountrieDetails

}
