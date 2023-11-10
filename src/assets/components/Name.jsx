import React from 'react'
import myJSON from '../components/Product';
const Name = () => {
  return (
    <div>
      {
        <h3 className='mt-5'>{myJSON.productName}</h3>
      }
    </div>
  )
}
export default Name;