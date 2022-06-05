import './App.css';
import { useState, useEffect } from "react";
import PersonForm from "./Components/PersonForm"
import PersonList from "./Components/PersonList"
import personService from "./services/persons"
import Alert from "./Components/Alert"
import Filter from "./Components/Filter"

const App = () => {


  const [persons, setPersons] = useState([])
  const [searchName, setSearchName] = useState('')
  const [filterPersons, setFilterPersons] = useState(persons)
  const [message,setMessage]=useState(null)
  const [alertType,setAlertType]=useState('')


  // get all persons from the server
  useEffect( ()=>
  {
    personService.getAll()
         .then(initialPersons =>
          {
            setPersons(initialPersons)
          })
  },[])
  
  // When persons change, filter-persons also changes
  useEffect( ()=>{
    setFilterPersons(persons)
  },[persons])





  // Handle search name event
  const handleSearchName = (event) => {
    setSearchName(event.target.value)
    const input = event.target.value.toLowerCase()

    const filterList = persons.filter(person => person.name.toLowerCase().includes(input))


    // if input is empty, show entire list of persons
    if (input === "") {
      setFilterPersons(persons)

    }
    // else , show only filtered list of persons
    else {
      setFilterPersons(filterList)
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Alert message={message} type={alertType}/>
      <Filter searchName={searchName} handleSearchName={handleSearchName}/>
      <PersonForm persons={persons} setPersons={setPersons} setMessage={setMessage} setAlertType={setAlertType}/>
      <PersonList personList={filterPersons} setPersons={setPersons}/>
    </div>
  )
}

export default App;
