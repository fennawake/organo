import Contributor from '../Contributor'
import './Team.css'

const Team = (props) => {
    const css = { backgroundColor: props.secondaryColor }

    return (
        (props.collaborators.length > 0) ? <section className='team' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => <Contributor name={collaborator.name} position={collaborator.position} image={collaborator.image} key={collaborator.name} backgroundHeader={props.primaryColor} />)}
            </div>
        </section >
            : ''
    )
}

export default Team