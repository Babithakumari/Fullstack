import {useState} from "react"
import personService from "../services/persons"
const PersonForm = ({persons,setPersons,setMessage,setAlertType}) =>
{

    // States
    const [newName, setNewName] = useState('')
    const [newNum, setNewNum]=useState('')



    // Handle form submission : add the new Person to original list of persons
    const addPerson = (event) => {
        event.preventDefault()

        
    
        // find person from the persons List
        const personFound=persons.find((person) => person.name===newName)

        // create new person object
        const newPerson={
          
          name: newName,
          number : newNum
        }

        // if person not found in the list, add new person to the list
        if(personFound==null)
        {
          
          // save new person onto the server
          personService.create(newPerson)
               .then(returnedPersons =>{
                 console.log(returnedPersons)
                 setPersons(persons.concat(returnedPersons))
                 
                 setMessage(`Added ${returnedPersons.name}`)
                 setAlertType("success")
                 setTimeout(() => {
                             setMessage(null)        
                            }, 5000)
               })
      
        }

        // if person already in phonebook update number
        else{
            if(personFound.number!=newNum)
            {
              
              const confirmed = window.confirm(`${newName} already added to phonebook, replace the old number with a new one?`)
              if(confirmed)
              {
                // update person's number
                personService.update(personFound.id,newPerson)
                              .then(returnedPersons =>{
                                setPersons(persons.map(person => person.id!==personFound.id ? person : newPerson   ))
                                setMessage(`Changed ${returnedPersons.name}'s number`)
                                setAlertType("success")
                                setTimeout(() => {
                                  setMessage(null)        
                                 }, 5000)
                    
                              })
                              .catch(error => {
                                setMessage(`Information of Person  ${newName} has already been removed from server`)
                                setAlertType("error")

                                setTimeout(() => {
                                  setMessage(null)        
                                 }, 5000)
                            })
              }
            }
            else{
              alert(`${newName} is already added to phonebook`)


            }
        }
        
        // clear input field
        setNewName('')
        setNewNum('')

    }


    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    
      const handleNumChange = (event) => {
        setNewNum(event.target.value)
    }



    return(
        <form onSubmit={addPerson}>
        <h3>Add new contact</h3>
        <div>
            name: <input name="name" value={newName} onChange={handleNameChange} />
        </div>
        <div>
            number: <input name="name" value={newNum} onChange={handleNumChange} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm