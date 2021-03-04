import React from 'react';

const Searchbox = ({onchangesearch})=>{
    return(
        <div className='pa2'>
        <input className='pa3 ba b--green bg-lightest-blue' 
        type='search' 
        placeholder='Cari '
        onChange={onchangesearch}
        />
        </div>
    );
}

export default Searchbox;