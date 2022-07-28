import {NavBar as Header} from '../components/navTR';
import {FECKClass, Cookie} from '../components';
import React, { Component } from 'react';
import {Footer} from '../components/footerTR';

class FECKpageTr extends Component  {
    render(){
        return(
            <>
                <Header/>
                <FECKClass />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default FECKpageTr;