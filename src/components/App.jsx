import React from 'react';
import SectionTitle from './SectionTitle/SectionTitle';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
       <SectionTitle />
    </div>
  );
};
export default App;