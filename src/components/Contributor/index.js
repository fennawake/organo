import { IoIosCloseCircle } from 'react-icons/io'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Contributor.css'

const Contributor = ({ collaborator, backgroundColor, deleteCollaborator, addFavorite }) => {
    const favorite = () => {
        addFavorite(collaborator.id)
    }

    const propsFavorite = {
        size: 25,
        onClick: favorite
    }

    return (
        <div className='contributor'>
            <IoIosCloseCircle
                size={25}
                className='delete'
                onClick={() => deleteCollaborator(collaborator.id)}
            />
            <div className='header' style={{ backgroundColor: backgroundColor }}>
                <img src={collaborator.image} alt={collaborator.name} />
            </div>
            <div className='footer'>
                <h4>{collaborator.name}</h4>
                <h5>{collaborator.position}</h5>
                <div className='favorite'>
                    {collaborator.favorite
                        ? <AiFillHeart {...propsFavorite} color="#ff0000" />
                        : <AiOutlineHeart {...propsFavorite} />
                    }
                </div>
            </div>
        </div >
    )
}

export default Contributor