import React from 'react'

function Nav() {
  function handclick() {
    alert('hello from rehab nav');
  }

  return (
    <div>
      <h2>Rehab</h2>
      <button onClick={handclick}>Click Me</button>
    </div>
  )
}

export default Nav
