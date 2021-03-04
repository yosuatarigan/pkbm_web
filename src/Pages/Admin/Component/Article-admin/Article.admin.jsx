import React from 'react';
import Daftararticle from './Daftararticle.admin';
import Addarticle from './AddArticle.admin';

const Article = ({emailuser})=>{
    return(
        <div flex  items-start>
            <Addarticle emailuser={emailuser}/>
           <Daftararticle emailuser={emailuser}/>
        </div>
    )
}

export default Article;