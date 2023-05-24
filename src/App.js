import './App.css';
import herb from './img/asdasd.png'
import raw from "./lorem.txt";
import Wave from 'react-wavify'


function App() {
  const lorem = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula et neque ac faucibus. Cras fringilla auctor mauris, sit amet mattis orci vehicula non. Duis sit amet purus odio. Vivamus vitae accumsan lorem. Nam erat purus, consequat sed auctor a, iaculis eget neque. Suspendisse feugiat nibh a feugiat efficitur. Sed mollis id nisl quis pharetra. Quisque rutrum, ante sit amet vulputate commodo, dolor mauris ultrices tellus, et tempor lacus massa eget nisi. Proin pellentesque sodales finibus. Aliquam non felis lorem. Maecenas vulputate, risus sed pellentesque fermentum, augue tortor semper sapien, vel dignissim magna tellus ut mauris.
  
  Fusce volutpat orci a sapien mattis, accumsan dictum turpis tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ante id est sagittis tempus. Integer aliquet magna eu dui fermentum, in sagittis est mattis. Nulla vehicula imperdiet justo vitae blandit. Donec a sagittis tortor, eu finibus nibh. Nulla sit amet sagittis lacus. Cras nec ex nulla. Suspendisse tempus massa tellus, at aliquet dolor placerat sit amet. Nulla faucibus nisl eros, nec gravida magna dignissim ac.
  
  Aenean vitae odio nec quam vulputate elementum. Nullam purus turpis, egestas non lorem vitae, tincidunt hendrerit est. Donec eget eleifend mi. Ut sit amet nisl sed odio consectetur faucibus. Vestibulum tincidunt venenatis bibendum. Sed quis iaculis eros. In lorem libero, dictum vel dapibus ut, molestie sit amet velit. Donec consectetur odio eu malesuada eleifend.
  
  Vivamus a fermentum justo. Integer lobortis ante nulla. Nunc arcu velit, efficitur sed ipsum ac, hendrerit egestas sapien. Curabitur sollicitudin vitae nunc efficitur hendrerit. Sed fermentum ultricies sapien non consequat. Quisque vitae diam sed elit rutrum interdum. Donec euismod congue tellus, vitae vehicula neque tempus ac. Etiam rutrum, risus sed dapibus egestas, diam nunc rhoncus velit, id volutpat sapien nibh eu diam. Nam et euismod diam, et mattis lorem. Vivamus eget varius leo.
  
  Phasellus id rhoncus dolor. Nulla et urna vitae dolor fringilla pulvinar. Donec gravida arcu at quam placerat volutpat. Sed ac justo id nisi cursus ultrices ac non neque. Pellentesque lobortis maximus mollis. Nam efficitur vitae sapien et lobortis. Phasellus nibh sem, malesuada vel elementum vel, facilisis sit amet mauris. Nulla eget dapibus nisi, varius pulvinar est. Nunc dapibus, tortor in congue aliquam, arcu justo pulvinar nunc, malesuada cursus odio est eget neque. Vivamus efficitur sem sit amet magna condimentum, a consectetur massa tempus. Aliquam tristique augue eget faucibus pulvinar. Maecenas vehicula arcu viverra sem fringilla lacinia condimentum id odio. Fusce vel turpis mattis, ornare lectus eu, commodo magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam in porttitor sapien, vel efficitur mi. Praesent ultrices tempor lorem, nec vulputate augue sagittis in.`
    // fetch(raw)
    // .then(r => r.text())
    // .then(text => {
    //   console.log(text);
    // });
  return (
    <div className="App">
    <div className="holder-container">
      <div className="header">
        <h1>Marysia Ancerowicz</h1>
        <img id='herb'src={herb} alt='herb'></img>
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
