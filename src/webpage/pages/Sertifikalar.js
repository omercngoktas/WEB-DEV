import React from 'react';
import {NavBar as Header} from '../components/navTR';
import {Footer} from '../components/footerTR';
import {CookieTR} from '../components/cookieTR';
import {CertificateTR} from '../components/certificate/certificateTR'
import { BotPopUpTR} from '../components';

const Sertifikalar = () => {
    return(
        <>
            <Header/>
            <BotPopUpTR/>
            <CertificateTR/>
            <Footer />
            <CookieTR/>
        </>
    )
}

export default Sertifikalar