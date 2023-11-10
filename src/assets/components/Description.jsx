import React from 'react'
import myJSON from './Product'
const Description = () => {
  return (
    <div>
        <p>{myJSON.description}</p>
    </div>
  )
}

export default Description;