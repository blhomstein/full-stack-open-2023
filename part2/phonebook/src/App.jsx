/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import './index.css'
import phonebook from './services/phonebook'
import PersonPhoneForm from "./components/PersonPhoneForm"
import Search from './components/Search'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchPeople, setSearchPeople] = useState('')
  const [sendMessage, setsendMessage] = useState(null)
  const [errOrSuc, setErrOrSuc] = useState(false)
  
  
  const hook = () => {
    phonebook.getAll().then(initData =>{
      setPersons(initData)
    })
  }
  useEffect(hook,[])

  const addPerson = (event) =>{
    event.preventDefault()

    const personObj = {
      name: newName,
      number: newPhone
    }
    // check if person exist
    const personExist = persons.find((person)=>{
      if ( person.name === personObj.name ) return true
      else return false
    })
    // check if phone exist
    const phoneExist = persons.find((person)=>{
      if ( person.number === personObj.number ) return true
      else return false
    })
    // alert person exist
    if (personExist ){
      
      if (window.confirm(`${personObj.name} is already added to phonebook, replace the old number ?`)){
        
        const initId = persons.find(person => person.name === personObj.name)
        const id = initId.id
        
        
        phonebook.change(id, {name: personObj.name, number: personObj.number}).then(changed => {
          console.log(changed);
          setPersons(persons.map(person => person.id !== id ? person: {...person, number: personObj.number}))
        }).catch(e => {
          console.log("im from jsx",e.message)
          setsendMessage(`information of ${personObj.name} is already deleted from server`)
        setErrOrSuc(false)
        setTimeout(()=>{
          setsendMessage(null)
          setErrOrSuc(true)
        },5000)

        })
      }
    }
    //alert phone exist 
    else if (phoneExist){
      window.alert(`${personObj.number} is already added to phonebook`)
      setNewPhone('')
    }
    
    else {
      // successful adding of the entry
      console.log(personObj);
      phonebook.create(personObj).then(returnedData=>{
        console.log(typeof returnedData);
        setPersons(persons.concat(returnedData))
        setNewName('')
        setsendMessage(`added ${returnedData.name}`)
        setErrOrSuc(true)
        setTimeout(()=>{
          setsendMessage(null)
          setErrOrSuc(false)
        },5000)
      }).catch(e => {
        console.log(e.response.data.error);
        setErrOrSuc(false)
        setsendMessage(e.response.data.error)
        setTimeout(()=>{
          setsendMessage(null)
          setErrOrSuc(false)
        },5000)
        console.log("fia difo",e)
      })
      
      
    }
  }

  const handleNewPerson = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }
  const handleNewPhone = (event) => {
    // console.log(event.target.value);
    setNewPhone(event.target.value)
  }
  const handleSearch = (e)=>{
    setSearchPeople(e.target.value)
  }

  const sucStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  };
  const errStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  };
  
  return (
    <div>
      <Notification message={sendMessage} styling={errOrSuc ? sucStyle : errStyle }  />
      <h2>Phonebook</h2>
      <form action="">
        <Search value={searchPeople} handleSearch={handleSearch} />
      </form>
      < PersonPhoneForm newName={newName} handleNewPerson={handleNewPerson} newPhone={newPhone} handleNewPhone={handleNewPhone} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Filter persons={persons} searchPeople={searchPeople} />
    </div>
  ) 
}

export default App


