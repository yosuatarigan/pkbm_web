import React from 'react';

const Articlepage = ({title,coverurl,desc})=>{
    return(<div>
        <img src={coverurl} alt='image' width='auto' height='auto' maxWidth='600px'/>
    <p>{title}</p> 
    <p>{desc}</p>
    </div>)
}

export default Articlepage;