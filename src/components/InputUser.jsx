import React ,{useState}from 'react'

const InputUser = ({inputUser, handleChange}) => {

  return (
   <section id="user-input">
    <div className='input-group'>
        <p>
            <label>Initial investment</label>
            <input type="number" value={inputUser.initialValue} onChange={(e)=>handleChange('initialValue',e.target.value)}/>
        </p>
         <p>
            <label>Annual investment</label>
            <input type="number" value={inputUser.annualValue} onChange={(e)=>handleChange('annualValue',e.target.value)}/>
        </p>
    </div>
     <div className='input-group'>
        <p>
            <label>expected rate</label>
            <input type="number" value={inputUser.expectedRate} onChange={(e)=>handleChange('expectedRate',e.target.value)}/>
        </p>
         <p>
            <label>Duration</label>
            <input type="number" value={inputUser.duration} onChange={(e)=>handleChange('duration',e.target.value)}/>
        </p>
    </div>

   </section>
    
  )
}

export default InputUser