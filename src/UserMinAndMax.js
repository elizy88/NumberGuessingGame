
import React  from 'react'
import './number.css'
const UserMinAndMax = ({ handleRangeInput, handleRangeClick }) => {

  return (
    <section >
      <input
        className='min-input'
        type='number'
          placeholder='min'
        name='userMin'
        onChange={handleRangeInput}
        />
         
       <input
        className='max-input'
        type='number'
        placeholder='max'
        name='userMax'
        onChange={handleRangeInput}
        />  <br/><br/>
      <button
        className='submit-max-min-button'
        onClick={handleRangeClick}
    
        >
        Submit
      </button>
    </section>
  )
}

export default UserMinAndMax