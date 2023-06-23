import Contributor from '../Contributor'
import './Team.css'
import hexToRgba from 'hex-to-rgba';

const Team = ({ team, collaborators, deleteCollaborator, changeColor }) => {
    return (
        collaborators.length > 0 && <section className='team' style={{ backgroundImage: 'url(/organo/image/fundo.png)', backgroundColor: hexToRgba(team.color, '0.6') }}>
            <input onChange={event => changeColor(event.target.value, team.name)} value={team.cor} type='color' className='input-color' />
            <h3 style={{ color: team.cor, borderColor: team.cor }}>{team.name}</h3>
            <div className='collaborators'>
                {collaborators.map((collaborator, index) => <Contributor key={index} collaborator={collaborator} backgroundColor={team.cor} deleteCollaborator={deleteCollaborator} />
                )}
            </div>
        </section>
    )
}

export default Team