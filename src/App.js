import './App.css';
import herb from './img/asdasd.png'
import Wave from 'react-wavify'


function App({ lorem }) {
  return (
    <div className="App">
    <div className="holder-container">
      
      <div className="header">
        <img id='herb'src={herb} alt='herb'></img>
        <h1>Marysia Ancerowicz</h1>
      <div className='container'>
        {lorem}        
         
      </div>  
      </div>
      {/* <div className='wave-foo'> */}
        <Wave fill='#e8bdc3'
          paused={false}
          options={{
            height: 0,
            amplitude: 20,
            speed: 0.15,
            points: 3
          }}
        />
      {/* </div> */}
    </div>
    </div>
  );
}

export default App;
