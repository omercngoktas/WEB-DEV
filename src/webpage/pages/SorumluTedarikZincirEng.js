import {NavBar as Header} from '../components/nav';
import {Footer, Cookie, STZClassEng} from '../components';
import React, { Component } from 'react';

class SorumluTadarikZincirPageEng extends Component  {
    render(){
        return(
            <>
                <Header/>
                <STZClassEng />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default SorumluTadarikZincirPageEng;