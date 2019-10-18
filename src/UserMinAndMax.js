
import React  from 'react'
import './number.css'
const UserMinAndMax = props => { 
//const UserMinAndMax = ({ handleRangeInput, handleRangeClick }) => {

  return (
    <section >
      <input
        className='min-input'
        type='number'
          placeholder='min'
        name='userMin'
        onChange={e=>props.handleRangeInput(e)}
        />
         
       <input
        className='max-input'
        type='number'
        placeholder='max'
        name='userMax'
        onChange={e=>props.handleRangeInput(e)}
        />  <br/><br/>
      <button
        className='submit-max-min-button'
        onClick={e=>props.handleRangeClick(e)}
    
        >
        Submit
      </button>
    </section>
  )
}

export default UserMinAndMax