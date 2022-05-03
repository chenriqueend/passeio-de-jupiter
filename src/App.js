import React from 'react';
import ComicViewer from "react-comic-viewer";
import './App.css';
import logo from './logo.png';
import { SocialIcon } from 'react-social-icons';


// React.render(<SocialIcon url="https://linkedin.com/in/jaketrent" />, document.body);

function App() {

  return (
    <div className="App">
      <div className="main">
        <div className='center'>
          <div className='menu'>
            <div className='logo'>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className='info'>
              <h3>O Passeio de Jupiter é um projeto contemplado pela Lei Aldir Blanc. Neste momento estamos em manutenção.<br></br>(˃ᆺ˂)</h3><br></br>
              <h3>Mais informações no nosso: 
                 <a href='https://instagram.com/opasseiodejupiter?igshid=YmMyMTA2M2Y='>
                   <SocialIcon network="instagram" /></a></h3>
            </div>
            {/* <ComicViewer pages={["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKL4ojtxjpc4G2uWRdvgBZ7bhlTRTUuVtGtM4iRwsf0w&s"]} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
