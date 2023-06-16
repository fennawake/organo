import Contributor from '../Contributor'
import './Team.css'

const Team = (props) => {

    const primaryColor = { borderColor: props.primaryColor }
    const secondaryColor = { backgroundColor: props.secondaryColor }

    return (
        (props.collaborators.length > 0) ? <section className='team' style={secondaryColor}>
            <h3 style={primaryColor}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => <Contributor name={collaborator.name} position={collaborator.position} image={collaborator.image} key="{index}" />)}
            </div>
        </section >
            : ''
    )
}

export default Team