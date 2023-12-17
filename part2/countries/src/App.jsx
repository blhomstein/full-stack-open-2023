
import axios from 'axios'
import { useState, useEffect } from 'react'
import { CountryForm } from './component/CountryForm'
import { CountryPage } from './component/CountryPage'
import { Weather } from './component/Weather'


const App = () => {

  const [country, setCountry] = useState([])
  const [value, setValue] = useState('')
  const [condition, setCondition] = useState('')




  useEffect(()=>{
      
      axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then(result => {
        const fileteredCountries = result.data.filter(one => one.name.common.toLowerCase().includes(value.toLowerCase()) )
        setCountry(fileteredCountries)
      
      if (fileteredCountries.length > 10) {
        // console.log("------------ theres more than 10 countries");
        setCondition(()=>{
          return ''
        })
      }
      else if  (fileteredCountries.length > 1 && fileteredCountries.length <= 10){
        // console.log("------------ 10 or less countries are fetched");
        setCondition(()=>{
          return 'more'
        })
        
      }
        
      else if (fileteredCountries.length === 1) {
          // console.log("------------ only one country is fetched");
          setCondition(() => {
            return 'equal'
          })
          
        }
      
    })
    
  }, [value])

  const handleChange = (event) => {
    setValue( event.target.value)
  }

  
  
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <div>
      {country.length > 10 ? <div>too many countries</div>  : (  1  < country.length &&  country.length < 10 ?  country.map((e,index)=>{
          
          
           return (
            <CountryForm key={index} name={e.name.common} handleClick={()=>{
              
              setCountry([country[index]])
             
            }} />
          )
          
        
      }) : country.map((single, index) => {
        console.log(typeof single.capital);
        const asima = single.capital
        return (
          <div key={index}>
    <CountryPage country={single} /> 
          <Weather capital={asima.toString()}/>
          </div>
          
        )
      }))}
      
      </div>
    </div>
    
  )
}



export default App


// console.log("im clicked");
//               axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countryName}`).then((res,index) =>{
//                 console.log(res.data);
//                 return (
//                   <div key={index}>
//                     <h1>{res.data.name.common}</h1>
//                     <h2>{res.data.capital}</h2>
//                   </div>
//                  )
//               })




{/* <div key={index}>
<h1>{single.name.common}</h1>
<p>{single.capital}</p>
<p>{single.area}</p>
<ul>
  languages
  {Object.keys(single.languages).map((key, index)=>{
    return (
      <li key={index}>{single.languages[key]}</li>
    )
  })}
</ul>
<img src={single.flags.png} alt="" />
</div> */}