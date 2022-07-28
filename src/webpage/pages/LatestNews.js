import {NavBar as Header, Footer, Cookie, NewsBlock} from '../components';
import React from 'react';

const News = () =>  {
    return (
            <>
                <Header />
                <NewsBlock/>
                <Footer />
                <Cookie/>
            </>
        )
}

export default News;