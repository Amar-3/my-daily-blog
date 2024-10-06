import React from 'react'
import './App.css';
import Card from './components/Card';
import Typewriter from './pages/Typewriter';


const App = () => {
  return (
    <>
    <div className='cards'>
    <Card
        title={"this is node.js blog"} />
    </div>
    <Typewriter />
     


    </>
  )
}

export default App;
