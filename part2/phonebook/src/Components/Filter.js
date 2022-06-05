
const Filter = ({searchName,handleSearchName}) =>{

    
    
    return(
        <>
            <span>Filter shown with</span>
            <input name="search" type="search" value={searchName} onChange={handleSearchName} />
        </>
    )
}

export default Filter