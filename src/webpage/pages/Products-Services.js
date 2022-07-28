import {NavBar as Header, Footer, Content, Cookie} from '../components';
import React from 'react'
import NewContactForm from '../components/NewContactForm';

const ProductServices = () =>  {
    return(
        <>
            <Header />
            <Content/>
            <Footer/>
            <Cookie/>
            <NewContactForm />
        </>
    )
}

export default ProductServices;