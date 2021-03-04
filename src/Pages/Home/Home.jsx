import React from 'react';
import Info from '../Info/Info';
import NoteKegiatan from '../Kegiatan/NoteKegiatan';
import Landing from '../../components/LandingImage/Landing';
import Cardfitur from '../../components/Cardfitur/Cardfitur';
import Article from '../../components/Article/ArticlePreview';

const Home = () => {
    return (
        <div>
            <div>
                <Landing/>
            </div>
            {/* <WellcomeText /> */}
            {/* <CardNavs  /> */}
            <Cardfitur/>
            <NoteKegiatan />
            <Article/>
            <Info />
        </div>
    )
}

export default Home;