import React from 'react'
import './linkForm.css';
const LinkForm = ({onInputChange,onSubmit}) => {
  return (
    <>
    <div className='linkForm'>
    <div className='form'>
         <div className="content">
            <p>This Magic Facelada will detect faces in your pictures. Give it a try</p>
            <div className="search">
                <input type="text" placeholder='Enter Image URL' onChange={onInputChange}/>
                <button onClick={onSubmit}>Detect</button>
            </div>
         </div>
    </div>
    </div>
    </>
  )
}

export default LinkForm