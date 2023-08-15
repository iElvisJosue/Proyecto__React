export function CountrieSelectedContent ({ idCountrie, countrieSelectedClass, countrieSelected, hiddeCountrieSelected  }) {
    return(
        <section className={countrieSelectedClass}>
            <button className="Container__Countrie--Back" onClick={() => hiddeCountrieSelected(false)}>
                <ion-icon name="arrow-back-outline"></ion-icon>
                Back
            </button>
            <article className="Container__Countrie--Details">
                <figure className="Container__Countrie--Details--Image">
                    <img src={idCountrie ? countrieSelected[0][0] : '❌'} alt={idCountrie ? countrieSelected[0][1] : '❌'} className="Container__Countrie--Details--Image-Flag" />
                </figure>
                <div className="Container__Countrie--Details--Text">
                    <h1 className="Container__Countrie--Details--Text--Name">
                        {idCountrie ? countrieSelected[0][2] : '❌'}
                    </h1>
                    <div className="Container__Countrie--Details--Data">
                        <span className="Container__Countrie--Details--Data--Left">
                            <p className="Container__Countrie--Details--Data--Left--Native">
                                <b>Native Name:</b> {idCountrie ? countrieSelected[0][3] : '❌'}
                            </p>
                            <p className="Container__Countrie--Details--Data--Left--Population">
                                <b>Population:</b> {idCountrie ? countrieSelected[0][4] : '❌'}
                            </p>
                            <p className="Container__Countrie--Details--Data--Left--Region">
                                <b>Region:</b> {idCountrie ? countrieSelected[0][5] : '❌'}
                            </p>
                            <p className="Container__Countrie--Details--Data--Left--SubRegion">
                                <b>Sub Region:</b> {idCountrie ? countrieSelected[0][6] : '❌'}
                            </p>
                            <p className="Container__Countrie--Details--Data--Left--Capital">
                                <b>Capital:</b> {idCountrie ? countrieSelected[0][7] : '❌'}
                            </p>
                        </span>
                        <span className="Container__Countrie--Details--Data--Right">
                            <p className="Container__Countrie--Details--Data--Right--Domain">
                                <b>Top Level Domain:</b> {idCountrie ? countrieSelected[0][8] : '❌'}
                            </p>
                            <p className="Container__Countrie--Details--Data--Right--Currencies">
                                <b>Currencies:</b> {idCountrie ? countrieSelected[0][9] : '❌'}
                            </p>
                            <p className="Container__Countrie--Details--Data--Right--Languajes">
                                <b>Languages:</b> {idCountrie ? countrieSelected[0][10] : '❌'}
                            </p>
                        </span>
                    </div>
                    <div className="Container__Countrie--Details--Border">
                        <p className="Container__Countrie--Details--Border--Text">
                            Border Countries:
                        </p>
                        <div className="Container__Countrie--Details--Border--Buttons">
                            {idCountrie ? countrieSelected[1] : '❌'}
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}