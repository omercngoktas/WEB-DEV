import {NavBar as Header, Footer, News, Content, Cookie} from '../components';
import React from 'react';
import NewContactForm from '../components/NewContactForm';

const About = () =>  {
    return (
        <>
            <Header />
            <Content/>
            <News />
            <Footer />
            <Cookie/>
            <NewContactForm/>
        </>
    )
}

export default About;