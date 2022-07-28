import {NavBar as Header, Footer, Cookie, NewsList} from '../components';
import React from 'react';

const News = () =>  {
    return (
            <>
                <Header />
                <NewsList/>
                <Footer />
                <Cookie/>
            </>
        )
}

export default News;