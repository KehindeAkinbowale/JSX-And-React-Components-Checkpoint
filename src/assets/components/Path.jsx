import React from 'react'
import myJSON from './Product'

const Path = () => {
  return (
    <div>
        {
          <img src={myJSON.URL} alt="images" width="300"/>
      }
    </div>
  )
}
export default Path;