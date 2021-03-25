import React from 'react';

function App() {

  const dom = 
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={ () =>{console.log("I am clicked")}}/>
    </React.Fragment>
  return (dom);
}

export default App;
