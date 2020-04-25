import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard/IdCard';
import Berlin from './data/berlin.json'
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/Boxcolor/BoxColor';

function App() {
  return (
    <div>
      <IdCard 
        img="https://i.imgur.com/CFgX3Xx.png"
        firstName="Aaron"
        lastName="Newell"
        country="England"
        isStudent={false}
      />
    
      <IdCard 
        img="http://res.cloudinary.com/djyjdargg/image/upload/v1550165485/Ironclass/IH_Jan1950.jpg.jpg"
        firstName="Alec"
        lastName="Budd"
        country="USA"
        isStudent={false} 
      />

      <Greetings 
      lang="de">Jonas</Greetings>
      <Greetings 
      lang="nl">Michiel</Greetings>
      <Greetings 
      lang="port">Rana</Greetings>

      <Random
      min= {12}
      max= {100}
      />

<BoxColor
r={200}
g={100}
b={0}
/>

    </div>
  );
}

export default App;
