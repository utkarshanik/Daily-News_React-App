import React from "react";
import Ghost from './Ghost.gif'

const Spinner=()=> {
    return (
      <div className='text-center'>
        <img className='my-4' src={Ghost} alt="Loading" />
      </div>
    )
  }

export default Spinner
