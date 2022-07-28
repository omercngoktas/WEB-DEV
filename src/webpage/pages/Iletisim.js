import {Content} from '../components/contentTR';
import {NavBar as Header} from '../components/navTR';
import {Footer} from '../components/footerTR';
import Location from '../components/location';
import {ComplaintsFormTR} from '../components/';
import {CookieTR} from '../components/cookieTR';
import React from 'react';
import NewContactFormTR from '../components/NewContactFormTR';

const Iletisim = () =>  {
    return(
        <>
            <Header />
            <Content map={<Location/>}/>
            <ComplaintsFormTR />
            <Footer />
            <NewContactFormTR/>
            <CookieTR/>
        </>
    )
}

export default Iletisim;