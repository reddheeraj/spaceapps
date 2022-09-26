import React from 'react'
import '../styles/glass.css'

function Glass() {

    document.addEventListener('mousemove', (e) => {
        const glass = document.querySelector('.glass');
        glass.style.left = e.offsetX + 'px';
        glass.style.top = e.offsetY + 'px';
    })

  return (
    <div className='glass'></div>
  )
}

export default Glass