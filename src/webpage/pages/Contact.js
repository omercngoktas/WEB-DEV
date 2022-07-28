import {NavBar as Header, Footer, Content, Cookie, ComplaintsForm} from '../components';
import Location from '../components/location';
import React from 'react';
import NewContactForm from '../components/NewContactForm';

const Contact = () =>  {
    return(
        <>
            <Header />
            <Content map={ <Location/>}/>
            <ComplaintsForm />
            <Footer />
            <Cookie/>
            <NewContactForm/>
        </>
    )
}

export default Contact;