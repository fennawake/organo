import './Dropdown.css'

const Dropdown = ({ label, items, valueField, valueChanged, required = false }) => {
    //console.log('label: ' + label, ' items: ' + items, valueField, valueChanged, required)
    return (
        <div className="dropdown">
            <label>{label}</label>
            <select
                required={required}
                value={valueField}
                onChange={event => valueChanged(event.target.value)}>
                <option />
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown