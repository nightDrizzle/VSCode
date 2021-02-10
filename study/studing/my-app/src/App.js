import './App.css';
import React from 'react'
function App() {
  const items = [1,2,3,4,5]
  return (
    items.map((item)=>{
      return (
        <React.Fragment key={item}>
    <div>
      22
    </div>
    <div>
      11
    </div>
    </React.Fragment>
      )
    })
  );
}

export default App;
