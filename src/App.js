import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [collaborators, setCollaborators] = useState([])

  const addNewCollaborator = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form addCollaborator={collaborator => addNewCollaborator(collaborator)} />
    </div>
  );
}

export default App;
