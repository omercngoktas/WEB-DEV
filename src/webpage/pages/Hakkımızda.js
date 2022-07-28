import News from '../components/newsTR';
import {Content} from '../components/contentTR';
import {NavBar as Header} from '../components/navTR';
import {Footer} from '../components/footerTR';
import React from 'react';
import {CookieTR} from '../components/cookieTR';
import NewContactFormTR from '../components/NewContactFormTR';

const Hakkımızda = () =>  {
    return (
        <>
            <Header />
            <Content/>
            <News />
            <Footer />
            <NewContactFormTR/>
            <CookieTR/>
        </>
    )
}

export default Hakkımızda;