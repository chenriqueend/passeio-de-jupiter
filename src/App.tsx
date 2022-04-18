import React from 'react';
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
              <h3>O Passeio de Jupiter é um projeto contemplado pela Lei Aldir Blanc. Neste momento estamos em manutenção (˃ᆺ˂).</h3>
              <h3>Mais informações no nosso  <a href='https://instagram.com/opasseiodejupiter?igshid=YmMyMTA2M2Y='><SocialIcon url="https://jaketrent.com" network="instagram" /></a></h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
