import React from 'react';


const Card = ({idtext, icon,route,onRouteChange})=>{
    return(
        
        <div className="tc bg-light-green dib br3 pa2 mv0 ma1 bw3 mh2 ph2   shadow-5 grow">
            <img src={icon} width="50" height="50" alt="card" onClick={()=>onRouteChange(route)} />
            <div>
            <p className="f6 " onClick={()=>onRouteChange(route)}>{idtext}</p>
           
            </div>
        </div>
        
    );
}

export default Card;