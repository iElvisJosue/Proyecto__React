import { formatDetails, formatCountriesBorder } from './Formats.jsx'
import { allCountriesFromApi } from './Const.jsx'
import { CountrieSelectedContent } from './CountrieSelectedContent.jsx'

import '../styles/CountrieSelected.css'
import '../styles/CountrieSelectedResponsive.css'


export function CountrieSelected ({ idCountrie, seeCountrieDetails, hiddeCountrieSelected }){

    const getCountrieDetails = idCty => {

        const countrieSelected = allCountriesFromApi.filter(e =>(
            e.name.common === idCty
        ))

        const arryCountrieDetails = formatDetails(countrieSelected)

        // VERIFICAMOS QUE EXISTA LA PROPIEDAD 'borders'
        const arrCountrieBorderButtons = countrieSelected[0].hasOwnProperty('borders') 
        ? formatCountriesBorder(countrieSelected[0].borders) 
        : false
        
        const listButtonCountriesBorder = arrCountrieBorderButtons ? 
        arrCountrieBorderButtons.map(name => (
        <button key={name} className="Container__Countrie--Details--Border--Button" id={name} onClick={seeCountrieDetails}>{name}</button> 
        ))
        : '❌'

        return [arryCountrieDetails, listButtonCountriesBorder]
    }

    const countrieSelected = idCountrie ? getCountrieDetails(idCountrie) : false
    const countrieSelectedClass = countrieSelected ? 'Container__Countrie Show' : 'Container__Countrie'

    return(
        <CountrieSelectedContent idCountrie={idCountrie} countrieSelected={countrieSelected} countrieSelectedClass={countrieSelectedClass} hiddeCountrieSelected={hiddeCountrieSelected}/>
    )

}