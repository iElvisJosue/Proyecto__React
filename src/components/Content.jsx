
import { ContentCountrieDetails } from './ContentCountrieDetails.jsx'
import { countriesFilteredFromApi } from './Const.jsx';

import '../styles/Content.css'
import '../styles/ContentResponsive.css'

export function Content ({ filterRegion, countriesFromApi, seeCountrieDetails }) {

    const countriesFiltered = filterRegion ? countriesFilteredFromApi(filterRegion) : countriesFromApi

    return(
        <section className="Container__Content">
            {
                countriesFiltered.map(countrieDetails => (
                    <ContentCountrieDetails key={countrieDetails.name.common} countrieDetails={countrieDetails} seeCountrieDetails={seeCountrieDetails}/>
                ))
            }
        </section>
    )
}