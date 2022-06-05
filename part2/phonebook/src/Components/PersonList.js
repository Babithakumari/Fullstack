import Person from "./Person.js"
import personService from "../services/persons"
const PersonList = ({personList,setPersons}) =>
{
    const deletePerson = (id) => {
        const personObj=personList.find(person => person.id === id)
        const confirmed = window.confirm(`Delete ${personObj.name}?`)

        if(confirmed)
        {
            personService.remove(id)
                         .then(message =>{
                             console.log(message)
                             setPersons(personList.filter(person => person.id!==id))
                         })
                         

        }
    }
    return(
        <>
        <h2>Numbers</h2>
        {
            personList.map(person => <Person key={person.id} name={person.name} number={person.number} handleDelete={() => deletePerson(person.id)}></Person>)
        }
        </>

    )
}

export default PersonList