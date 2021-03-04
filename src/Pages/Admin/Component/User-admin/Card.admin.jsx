import React from 'react';


const Card = ({nama,email}) => {
    return (
        <div>
        <section className=" tc pa1  pa3-ns ">
            <article className="hide-child relative ba b--black-20 mw5 center">
                <img src="https://i.pinimg.com/474x/fd/3c/7d/fd3c7dc8d83202904e53714bb63d127c.jpg" className="db" alt="oto of Jesse Grant" width='200px' height='200px'/>
                <div className="pa2 bt b--black-20">
    <a className="f6 db link dark-blue hover-blue" href="/">{nama}</a>
    <p className="f6 gray mv1">{email}</p>
                    <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="/">Edit</a>
                    <a className="link tc ph3 pv1 db bg-animate bg-dark-red hover-bg-red white f6 br1" href="/">Delete</a>
                </div>
                <a className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b" href="/">×</a>
            </article>
        </section> 
        </div>

    )
}

export default Card;