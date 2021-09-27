import React from 'react'
import './App.css'
import Img from './Images/streetart1.jpg'
import ArtImg from './Images/streetart2.jpg'
import street from './Images/streetart3.jpg'
import street4 from './Images/streetart4.jpg'
import street5 from './Images/streetart5.jpg'
const App = () => {
  return (
    <div className="Main">
    <div className="Inline-css">
      <h1>
        MY ART
      </h1>
      <h1>About</h1>
    </div>
    <div className="Img-css">
      <img className="street1" src={Img} alt="Img"/>
      <img className="street2" src={street} alt="street"/>
        <img className="street3" src={ArtImg} alt="art Images"/>
      <img className="street4" src={street4} alt="street4"/>
       <img className="street5" src={street5} alt="street5"/>

    </div>
    </div>
  )
}

export default App
