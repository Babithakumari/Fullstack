const Alert = ({message,type}) =>{
    if(message==null){
        return null
    }
    else if(type=="success")
    {
        return(
            <div className="success">
                {message}
            </div>
        )

    }
    return(
        <div className="error">
            {message}
        </div>
    )
}
export default Alert