import {NavBar as Header} from '../components/navTR';
import {Footer} from '../components/footerTR';
import {DownloadableContentTR} from '../components';
import React from 'react';
import {CookieTR} from '../components/cookieTR';
import { BotPopUpTR} from '../components';

const Indirmeler = () =>  {
    return(
        <>
            <Header />
            <BotPopUpTR/>
            <DownloadableContentTR/>
            <Footer/>
            <CookieTR/>
        </>
    )
}

export default Indirmeler;