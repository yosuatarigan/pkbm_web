import React from 'react';

const Cardtampil = ({nama,pesankritik}) => {
    return (
        <article className="center mw8 mw9-ns br3 hidden ba b--black-10 mv4">
            <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{nama}</h1>
            <div className="pa3 bt b--black-10">
                <p className="f6 f5-ns lh-copy measure">
                    {pesankritik}
    </p>
            </div>
        </article>

    );
}

export default Cardtampil;