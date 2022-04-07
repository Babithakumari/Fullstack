import Field from "./Field.js"

const Statistics = (props) =>
{

    if(props.all===0)
    {
        return(
            <p>No feedback is given</p>
        )
    }
    return(
       
        <table>
            <tbody>
                <Field title="good" value={props.good}/>
                <Field title="neutral" value={props.neutral}/>
                <Field title="bad" value={props.bad}/>
                <Field title="all" value={props.all}/>
                <Field title="average" value={props.avg}/>
                <Field title="positive" value={props.positive}/>
            </tbody>
        </table>
    )
}

export default Statistics