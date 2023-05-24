import './App.css';
import { useState } from 'react'

function App() {
  const [statements, setStatements] = useState([])

  const loadStatements = async () => {
    try {
      const response = await fetch('./postulaty.json');
      const data = await response.json();
      setStatements(data);
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      {/* <h1>My Portfolio</h1>

      <div className="project">
        <h2>Project 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mi consequat, vestibulum nunc vel, cursus justo.</p>
      </div>

      <div className="project">
        <h2>Project 2</h2>
        <p>Donec ac urna condimentum, hendrerit enim vitae, faucibus risus. Sed tempus libero a neque placerat dignissim.</p>
      </div>

      <div className="project">
        <h2>Project 3</h2>
        <p>Integer eleifend dolor sit amet ex tristique, in lobortis ipsum pulvinar. Vestibulum auctor leo a tellus convallis malesuada.</p>
      </div> */}
      <button onClick={loadStatements}>ASDASDA</button>
    </div>
  );
}

export default App;
