import React from 'react'
import spinner from './loading.gif'

 const Spinner =() => {
    return (
      <div className='text-center' >
        <img className='my-3' src={spinner} alt="spinner" style={{height:'50px'}} />
      </div>
    )
  
}
export default Spinner