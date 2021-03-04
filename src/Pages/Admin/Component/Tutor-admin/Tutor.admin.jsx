import React from 'react';
import Daftartutor from './Daftartutor.admin';
import Addtutor from './Addtutor.admin';

const Article = ()=>{
    return(
        <div flex  items-start>
            <Addtutor/>
           <Daftartutor/>
        </div>
    )
}

export default Article;