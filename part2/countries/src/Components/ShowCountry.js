
const ShowCountry = ({country_obj,handleClick})=>{
    return(
        <div>
            <span>{country_obj.name.common} </span>
            <button  onClick={handleClick}>Show</button>
        </div>
    )
}

export default ShowCountry