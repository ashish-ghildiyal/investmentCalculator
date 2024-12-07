import React from 'react'
import logo from '../assets/investment-calculator-logo.png'
const Header = () => {
  return (
    <header id="header">
        <img src={logo} width={64}/>
        <h1>React Investment Calculator</h1>
    </header>
  )
}

export default Header