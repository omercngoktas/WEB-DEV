import {NavBar as Header} from '../components/navTR';
import {EnerjiPolitikasiClass, Cookie} from '../components';
import React, { Component } from 'react';
import {Footer} from '../components/footerTR';

class EnerjiPolitikasi extends Component  {
    render(){
        return(
            <>
                <Header/>
                <EnerjiPolitikasiClass />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default EnerjiPolitikasi;