import { IoIosCloseCircle } from 'react-icons/io'
import './Contributor.css'

const Contributor = ({ collaborator, backgroundColor, deleteCollaborator }) => {

    return (
        <div className='contributor'>
            <IoIosCloseCircle className='delete' onClick={deleteCollaborator} />
            <div className='header' style={{ backgroundColor: backgroundColor }}>
                <img src={collaborator.image} alt={collaborator.name} />
            </div>
            <div className='footer'>
                <h4>{collaborator.name}</h4>
                <h5>{collaborator.position}</h5>
            </div>
        </div >
    )
}

export default Contributor