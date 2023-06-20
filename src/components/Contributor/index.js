import './Contributor.css'

const Contributor = ({ name, image, position, backgroundHeader }) => {

    return (
        <div className='contributor'>
            <div className='header' style={{ backgroundColor: backgroundHeader }}>
                <img src={image} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div >
    )
}

export default Contributor