import {NavBar as Header, Footer, DownloadableContent, Cookie} from '../components';
import React from 'react';
import NewContactForm from '../components/NewContactForm';

const Downloads = () =>  {
    return(
        <>
            <Header />
            <DownloadableContent/>
            <Footer/>
            <Cookie/>
            <NewContactForm/>
        </>
    )
}

export default Downloads;