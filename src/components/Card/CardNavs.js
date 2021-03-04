import React from 'react';
import iconalumni from '../../Media/image/topiwisuda-min.png';
import teacher from '../../Media/image/teacher-min.png';
import info from '../../Media/image/question-min.png';
import fasilitas from '../../Media/image/fasilitas-min.png';
import Card from './Card';


const list = [{ idtext : 'alumni', icon : iconalumni, route:'alumni'},
                {idtext: 'tutor', icon: teacher, route:'tentor'},
                {idtext: 'Info',   icon :info, route:'info' },
                {idtext: 'Fasilitas', icon:fasilitas, route:'fasilitas'}];

const CardNavs = ({onRouteChange})=>{
    return(
        <div className=" black bg-near-white"> 
        <div className="tc">
            {list.map((user, i) => {
                return (
                    <Card
                        key={i}
                        idtext={list[i].idtext}
                        icon={list[i].icon}
                        route={list[i].route}
                        onRouteChange={onRouteChange}
                    />
                );
            })}
        </div>
        </div>
    );
}

export default CardNavs;