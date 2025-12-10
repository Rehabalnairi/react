import React from 'react'
import Nav from './Nav/Nav'

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <Nav/>
    </header>
  )
}

export default Header
