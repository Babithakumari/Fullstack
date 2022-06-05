const Person = ({name,number,handleDelete}) =>
{

    return(
        <div>
            <span>{name} : {number}  </span>
            <button type="submit" onClick={handleDelete}>delete</button>
            
        </div>
    )
}

export default Person