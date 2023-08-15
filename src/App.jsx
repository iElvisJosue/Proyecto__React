import { useState, useEffect } from 'react'

// IMPORTAMOS LOS COMPONENTES
import { Header } from './components/Header'
import { Search } from './components/Search'
import { Content } from './components/Content'
import { CountrieSelected } from './components/CountrieSelected'
import { body } from './components/Const'

// IMPORTAMOS LOS ESTILOS GENERALES
import './styles/General.css'
// IMPORTAMOS LOS ESTILOS DEL COMPONENTE
import './styles/Container.css'
import './styles/ContainerResponsive.css'

export function App () {

  const [idCountrie, setIdCountrie] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [countriesFromApi, setCountriesFromApi] = useState([])
  const [filterRegion, setFilterRegion] = useState()
  const [filterFromApi, setFiltersFromApi] = useState('all')

  useEffect(() => {
    (async () =>{
      const responseCountries = await fetch(`https://restcountries.com/v3.1/${filterFromApi}`)
      const allCountries = await responseCountries.json()
      setIsLoading(false)
      setCountriesFromApi(allCountries)
    })()
  },[filterFromApi])
    

  const seeCountrieDetails = (e) => {
    body.classList.add('Show')
    setIdCountrie(e.currentTarget.id)
  }
  const hiddeCountrieSelected = (e) => {
    body.classList.remove('Show')
    setIdCountrie(e)
  }

  // const seeCountrieDetails = (e) => {
  //   body.classList.add('Show')
  //   const countrieID = e.currentTarget.id
  //   setFiltersFromApi(`name/${countrieID}`)
  // }

  const seeCountrieByRegion = (e) => {
    setFiltersFromApi(`all`)
    setFilterRegion(e.target.id)
  }

  return(
    <main className="Container">
      <Header />
      <Search seeCountrieByRegion={seeCountrieByRegion}/>
      {
        isLoading 
        ? <h1></h1>
        : <Content filterRegion={filterRegion} countriesFromApi={countriesFromApi} seeCountrieDetails={seeCountrieDetails}/>
      }
      <CountrieSelected idCountrie={idCountrie} seeCountrieDetails={seeCountrieDetails} hiddeCountrieSelected={hiddeCountrieSelected}/>
    </main>
  )
}