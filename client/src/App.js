import {useEffect } from 'react'
import './App.css';

function App() {

  useEffect(()=>{
    fetch('/movies')
    .then(res => res.json)
    .then(movie => console.log(movie))
    .catch(err => console.error(err))
  })
  return <h1>Movies App</h1>
}

export default App;
