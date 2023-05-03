import React from 'react';

import './Profile.css'

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    //Props//
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      margin: '1rem'
    }}>
    */Children props*/
      {children}
      */Children Name*/
      <h2>{fullName}</h2>
      */Children bio*/
      <p>{bio}</p>
      */Children profession*/
      <p>{profession}</p>
      */Onclick , alert*/
      <button onClick={() => handleName(fullName)}>
        Show Name
      </button>
      
      
    </div>
  );
};

export default Profile;
