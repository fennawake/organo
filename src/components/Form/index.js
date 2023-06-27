import { useState } from 'react'
import Button from '../Button'
import InputText from '../InputText'
import Dropdown from '../Dropdown'
import './Form.css'

const Form = ({ addCollaborator, teams, addTeam }) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

    const saving = (event) => {
        event.preventDefault()
        console.log('submitted form', name, position, image, team)
        addCollaborator({
            name,
            position,
            image,
            team
        })
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
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
                    required={true}
                    label="Team"
                    items={teams}
                    valueField={team}
                    valueChanged={valueField => setTeam(valueField)}
                />
                <Button>
                    Create Card
                </Button>
            </form>
            <form onSubmit={(event) => {
                event.preventDefault()
                addTeam({ name: teamName, color: teamColor })
            }}>
                <h2>Fill your details to create a new team.</h2>
                <InputText
                    obrigatorio={true}
                    label="Team name"
                    placeholder="Team name..."
                    valueField={teamName}
                    valueChanged={valueField => setTeamName(valueField)}
                />
                <InputText
                    obrigatorio={true}
                    label="Team color"
                    placeholder="Team color..."
                    valueField={teamColor}
                    valueChanged={valueField => setTeamColor(valueField)}
                />
                <Button>
                    Create new team
                </Button>
            </form>
        </section>
    )
}

export default Form