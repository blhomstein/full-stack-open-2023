/* eslint-disable react/prop-types */
import phonebook from "../services/phonebook"
const Filter = ({persons, searchPeople}) =>{
    return (
        <div>
        {persons.filter((person)=> searchPeople === '' ? person : person.name.toLowerCase().includes(searchPeople.toLowerCase()) || person.number.includes(searchPeople)).map((person,index)=>{
  
          return (

            <li key={index} className="person">
              {person.name} and {person.number}
              <button onClick={() => {
                if (window.confirm(`sure to delete ${person.name}`)){
                  phonebook.erase(person.id)
                }
                return
              }}>delete</button>
            </li>
           
          )
        })}
      </div>
    )
}


export default Filter