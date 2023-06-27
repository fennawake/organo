import './Input.css'

const Input = ({ type = 'text', label, placeholder, valueField, valueChanged, requerid = false }) => {

    return (
        <div className={`input input-${type}`}>
            <label >{label}</label>
            <input
                type={type}
                value={valueField}
                onChange={event => valueChanged(event.target.value)}
                required={requerid}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input