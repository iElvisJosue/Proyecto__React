import { formatPopulation } from './Formats.jsx'

export function ContentCountrieDetails({countrieDetails, seeCountrieDetails}){
    return(
        <article key={countrieDetails.name.common} id={countrieDetails.name.common} className="Container__Content--Countrie" onClick={seeCountrieDetails}>
            <figure>
                <img src={countrieDetails.flags.png} alt={countrieDetails.flags.alt} className="Container__Content--Countrie--Flag"/>
            </figure>
            <div className="Container__Content--Countrie--Details">
                <p className="Container__Content--Countrie--Details--Name">
                    {countrieDetails.name.common ??= '❌'}
                </p>
                <p className="Container__Content--Countrie--Details--Population">
                    <b>Population:</b> {formatPopulation(countrieDetails.population)}
                </p>
                <p className="Container__Content--Countrie--Details--Region">
                    <b>Region:</b> {countrieDetails.region ??= '❌'}
                </p>
                <p className="Container__Content--Countrie--Details--Capital">
                    <b>Capital:</b> {countrieDetails.capital ??= '❌'}
                </p>
            </div>
        </article>
    )
}