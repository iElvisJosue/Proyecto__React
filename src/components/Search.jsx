// IMPORTAMOS LAS REGIONES
import { allRegionsCountriesFromApi } from './Const'

// IMPORTAMOS LOS ESTADOS
import { useState } from 'react'

// IMPORTAMOS LOS ESTILOS DEL SEARCH
import '../styles/Search.css'
import '../styles/SearchResponsive.css'

export function Search ({seeCountrieByRegion}){

    const [show, showFilters] = useState(false)

    // ALMACENAMOS LAS REGIONES EN LISTAS
    const listRegions = allRegionsCountriesFromApi.map(reg => (
        <li key={reg} id={reg} onClick={seeCountrieByRegion}>{reg}</li>
    ))

    const classToFilter = show ? 'Container__Inputs--Filter--Region Show' : 'Container__Inputs--Filter--Region'

    return(
        <nav className="Container__Inputs">
            <div className="Container__Inputs--Search">
                <input type="text" name="" id="SearchCountries" className="Container__Inputs--Search--Text" placeholder="Search for a country..." />
                <ion-icon name="search" role="img" class="Container__Inputs--Search--Icon"></ion-icon>
                <ion-icon name="trash" role="img" class="Container__Inputs--Search--Clear"></ion-icon>
            </div>
            <div className='Container__Inputs--Filter' onClick={() => showFilters(!show)}>
                <button className="Container__Inputs--Filter--Button">
                    Filter by Region
                    <ion-icon name="chevron-down" role="img"></ion-icon>
                </button>
                <ul className={classToFilter}>
                    <li id='' onClick={seeCountrieByRegion}>All</li>
                    {listRegions}
                </ul>
            </div>
        </nav>
    )
}