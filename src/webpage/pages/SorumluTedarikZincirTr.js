import {NavBar as Header} from '../components/navTR';
import {STZClass, Cookie} from '../components';
import React, { Component } from 'react';
import {Footer} from '../components/footerTR';

class SorumluTadarikZincirPageTr extends Component  {
    render(){
        return(
            <>
                <Header/>
                <STZClass />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default SorumluTadarikZincirPageTr;