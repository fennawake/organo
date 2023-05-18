import './Form.css'
import InputText from '../InputText'
import Dropdown from '../Dropdown'
import Button from '../Button'
import { useState } from 'react'

const Form = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const saving = (event) => {
        event.preventDefault()
        props.addCollaborator({
            name,
            position,
            image,
            team
        })
    }

    return (
        <section className='form'>
            <form onSubmit={saving}>
                <h2>Fill your details to create a contributor's card.</h2>
                <InputText
                    obrigatorio={true}
                    label="Name"
                    placeholder="Your name..."
                    valueField={name}
                    valueChanged={valueField => setName(valueField)}
                />
                <InputText
                    obrigatorio={true}
                    label="Position"
                    placeholder="Your position..."
                    valueField={position}
                    valueChanged={valueField => setPosition(valueField)}
                />
                <InputText
                    obrigatorio={false}
                    label="Image"
                    placeholder="Your URL image..."
                    valueField={image}
                    valueChanged={valueField => setImage(valueField)}
                />
                <Dropdown
                    obrigatorio={true}
                    label="Team" items={props.teamName}
                    valueField={team}
                    valueChanged={valueField => setTeam(valueField)}
                />
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )
}

export default Form