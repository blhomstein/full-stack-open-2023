/* eslint-disable react/prop-types */


export const CountryPage = ({country}) => {
  
  return (
    <div >
    <h1>{country.name.common}</h1>
    <p>{country.capital}</p>
    <p>{country.area}</p>
    <ul>
      languages
      {Object.keys(country.languages).map((key, index)=>{
        return (
          <li key={index}>{country.languages[key]}</li>
        )
      })}
    </ul>
    <img src={country.flags.png} alt="" />

  </div>
  )
}
