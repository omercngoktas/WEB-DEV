import {NavBar as Header, Footer, Map, Content, Cookie} from '../components';
import React from 'react';
import NewContactForm from '../components/NewContactForm';

const Companies = () =>  {
    return(
        <>
            <Header />
            <Content/>
            <Map />
            <Footer />
            <Cookie/>
            <NewContactForm/>
        </>
    )
}

export default Companies;