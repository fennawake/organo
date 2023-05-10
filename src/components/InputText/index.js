import './InputText.css'

const InputText = (props) => {

    const userTyping = (event) => {
        props.valueChanged(event.target.value)
    }

    return (
        <div className="input-text">
            <label >{props.label}</label>
            <input
                value={props.valueField}
                onChange={userTyping}
                required={props.obrigatorio}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default InputText