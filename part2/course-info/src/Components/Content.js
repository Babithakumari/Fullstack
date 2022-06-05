import Part from "./Part.js"

const Content = ({parts})=>
{
    console.log(parts)
    const total = parts.reduce((sum,part) => {
        return sum+part.exercises
    },0)
    

    return(
        <>
        {
            parts.map(part=><Part key={part.id} name={part.name} exercises={part.exercises}></Part>)
        }
        <h4>total of {total} exercises</h4>
        </>
        ) 
    
}

export default Content