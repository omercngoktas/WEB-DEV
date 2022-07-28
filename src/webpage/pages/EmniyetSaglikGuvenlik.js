import {NavBar as Header} from '../components/navTR';
import {EsgTR, Cookie} from '../components';
import React, { Component } from 'react';
import {Footer} from '../components/footerTR';

class EmniyetSaglikGuvenlik extends Component  {
    render(){
        return(
            <>
                <Header/>
                <EsgTR />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default EmniyetSaglikGuvenlik;