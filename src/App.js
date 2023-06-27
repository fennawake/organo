import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { uid } from 'uid';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uid(),
      name: 'Programming',
      color: '#D9F7E9'
    },
    {
      id: uid(),
      name: 'Front-end',
      color: '#E8F8FF'
    },
    {
      id: uid(),
      name: 'Data Science',
      color: '#F0F8E2'
    },
    {
      id: uid(),
      name: 'Devops',
      color: '#FDE7E8'
    },
    {
      id: uid(),
      name: 'UX & Design',
      color: '#FAE9F5'
    },
    {
      id: uid(),
      name: 'Mobile',
      color: '#FFF5D9'
    },
    {
      id: uid(),
      name: 'Innovation and Management',
      color: '#FFEEDF'
    }
  ])

  const inicial = [
    {
      id: uid(),
      name: 'JULIANA AMOASEI',
      position: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uid(),
      name: 'DANIEL ARTINE',
      position: 'Software Engineer at Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uid(),
      name: 'GUILHERME LIMA',
      position: 'Python and JavaScript developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uid(),
      name: 'PAULO SILVEIRA',
      position: 'Hipster and CEO at Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name
    },
    {
      id: uid(),
      name: 'JULIANA AMOASEI',
      position: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uid(),
      name: 'DANIEL ARTINE',
      position: 'Software Engineer at Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uid(),
      name: 'GUILHERME LIMA',
      position: 'Python and JavaScript developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uid(),
      name: 'PAULO SILVEIRA',
      position: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name
    },
    {
      id: uid(),
      name: 'JULIANA AMOASEI',
      position: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uid(),
      name: 'DANIEL ARTINE',
      position: 'Software Engineer at Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uid(),
      name: 'GUILHERME LIMA',
      position: 'Python and JavaScript developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uid(),
      name: 'PAULO SILVEIRA',
      position: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name
    },
    {
      id: uid(),
      name: 'JULIANA AMOASEI',
      position: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uid(),
      name: 'DANIEL ARTINE',
      position: 'Software Engineer at Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uid(),
      name: 'GUILHERME LIMA',
      position: 'Python and JavaScript developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uid(),
      name: 'PAULO SILVEIRA',
      position: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name
    },
    {
      id: uid(),
      name: 'JULIANA AMOASEI',
      position: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uid(),
      name: 'DANIEL ARTINE',
      position: 'Software Engineer at Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uid(),
      name: 'GUILHERME LIMA',
      position: 'Python and JavaScript developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uid(),
      name: 'PAULO SILVEIRA',
      position: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name
    },
    {
      id: uid(),
      name: 'JULIANA AMOASEI',
      position: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uid(),
      name: 'DANIEL ARTINE',
      position: 'Software Engineer at Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uid(),
      name: 'GUILHERME LIMA',
      position: 'Python and JavaScript developer at Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name
    },
    {
      id: uid(),
      name: 'PAULO SILVEIRA',
      position: 'Software developer and instructor',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name
    },
  ]

  const [collaborators, setCollaborators] = useState(inicial)

  const addNewCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  const deleteCollaborator = () => {
    console.log('deleting collaborator...')
  }

  const changeTeamColor = (color, id) => {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color
      }
      return team
    }))
  }



  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} addCollaborator={collaborator => addNewCollaborator(collaborator)} />

      <section className="teams">
        <h1>My organization</h1>

        {teams.map((team, index) =>
          <Team
            key={index}
            team={team}
            changeColor={changeTeamColor}
            collaborators={collaborators.filter(collaborator =>
              collaborator.team === team.name
            )}
            deleteCollaborator={deleteCollaborator}
          />
        )}
      </section>

      <Footer />
    </div>
  );
}

export default App;
