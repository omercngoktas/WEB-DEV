import {Content} from '../components/contentTR';
import React from 'react';
import {NavBar as Header} from '../components/navTR';
import {Footer} from '../components/footerTR';
import {CookieTR} from '../components/cookieTR';
//import { BotPopUpTR} from '../components';
import NewContactFormTR from '../components/NewContactFormTR';

const UrunlerHizmetler = () =>  {
    return(
        <>
            <Header />
            <Content/>
            <Footer/>
            <NewContactFormTR />
            <CookieTR/>
        </>
    )
}

export default UrunlerHizmetler;