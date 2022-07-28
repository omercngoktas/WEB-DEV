import React from 'react';
import {NavBar as Header} from '../components/navTR';
import {Footer} from '../components/footerTR';
import {CookieTR} from '../components/cookieTR';
import NewsListTR from '../components/newsList/NewsListTR'; 

const Haberler = () =>  {
    return(
        <>
            <Header />
            <NewsListTR />
            <Footer/>
            <CookieTR/>
        </>
    )
}

export default Haberler;