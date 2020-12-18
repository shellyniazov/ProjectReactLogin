
const FormFeild = (props) => {

    if (props.type === 'list') {
        return (
            <div className="field">
                <label>{props.name}</label>
                <datalist id={props.listId}>
                    {props.data.map(item => <option value={item.name}> {item.name} </option>)}
                </datalist>
                <input type="text" list={props.listId} onInput={(event) => { props.action(event.target.value) }} />
            </div>
        )
    }
    else {
        return (
            <div className="field">
                <label>{props.name}</label>
                <input type={props.type} onInput={(event) => { props.action(event.target.value) }} />
            </div>
        )
    }
}

export default FormFeild;