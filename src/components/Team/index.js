import './Team.css'

const Team = (props) => {

    const primaryColor = { borderColor: props.primaryColor }
    const secondaryColor = { backgroundColor: props.secondaryColor }

    return (
        <section className='team' style={secondaryColor}>
            <h3 style={primaryColor}>{props.name}</h3>
        </section >
    )
}

export default Team