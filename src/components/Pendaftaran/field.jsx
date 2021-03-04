import React from 'react';

const Field = ({labelfield,handlechange,namefield,value})=>{
    return(
        <div >
                        <label className="db fw6 lh-copy f6 " >{labelfield}</label>
                        <input className="pa1 input-reset ba bg-transparent hover-bg-black  w-100"
                            onChange={handlechange}
                            type="text" name={namefield} id={namefield} value={value} />
                    </div>
    )
}

export default Field;