import React from 'react'
import logo from "../assets/logo.png"

function Logo({width = "100%"}) {
  return (
    <img src={logo} style={{width}} alt='Logo placeholder' />
  )
}

export default Logo