
import React from 'react';
import Profile from './Components/Profile';



const handleName = (fullName) => alert(fullName);

const App = () => {
  return (
    <div className="container">
    
      <Profile fullName="Yassin Dridi" bio="Welcome to my profil" profession="FUll Stock JS" handleName={handleName}>
        <img src='https://w0.peakpx.com/wallpaper/646/275/HD-wallpaper-raze-headphone-yellow-cap-valorant.jpg' alt="Profile" style={{ width: '200px', borderRadius: '30%' }} />
      </Profile>
      
      
    </div>
  );
};

export default App;
