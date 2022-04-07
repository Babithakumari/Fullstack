const Field = (props) =>
{
    return(
        <>
        <tr>
            <td>{props.title}</td>
            <td>{props.value}</td>
        </tr>
        </>
    )
}

export default Field