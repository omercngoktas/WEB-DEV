import {Map} from '../components';
import {Content} from '../components/contentTR';
import {NavBar as Header} from '../components/navTR';
import {Footer} from '../components/footerTR';
import React from 'react';
import {CookieTR} from '../components/cookieTR';
import NewContactFormTR from '../components/NewContactFormTR';

const Musteriler = () =>  {
    return(
        <>
            <Header />
            <Content/>
            <Map />
            <Footer/>
            <NewContactFormTR />
            <CookieTR/>
        </>
    )
}

export default Musteriler;