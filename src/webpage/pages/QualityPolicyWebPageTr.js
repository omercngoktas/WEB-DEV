import {NavBar as Header} from '../components/navTR';
import { Cookie,QualityPolicyClassTr} from '../components';
import React, { Component } from 'react';
import {Footer} from '../components/footerTR';

class EnerjiPolitikasi extends Component  {
    render(){
        return(
            <>
                <Header/>
                <QualityPolicyClassTr />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default EnerjiPolitikasi;