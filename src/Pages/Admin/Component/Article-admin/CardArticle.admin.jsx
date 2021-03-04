import React from 'react';

const CardArticle = () => {
  return (
    <section className="mw7 center avenir">

      <article className="bt bb b--black-10">
        <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
          <div className="flex flex-column flex-row-ns">
            <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
              <img src="http://mrmrs.github.io/photos/cpu.jpg" className="db" alt="oto of a dimly lit room with a computer interface terminal." />
            </div>
            <div className="w-100 w-60-ns pl3-ns">
              <h1 className="f3 fw1 baskerville mt0 lh-title">Tech Giant Invests Huge Money to Build a Computer Out of Science Fiction</h1>
              <p className="f6 f5-l lh-copy">
                The tech giant says it is ready to begin planning a quantum
                computer, a powerful cpu machine that relies on subatomic particles instead
                of transistors.
          </p>
              <p className="f6 lh-copy mv0">By Robin Darnell</p>

              <p className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="/">Edit</p>
              <p className="link tc ph3 pv1 db bg-animate bg-dark-red hover-bg-red white f6 br1" href="/">Delete</p>
            </div>
          </div>
        </a>
      </article>
    </section>

  )
}

export default CardArticle;