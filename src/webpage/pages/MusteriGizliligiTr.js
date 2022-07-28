import {NavBar as Header} from '../components/navTR';
import { Cookie, MGPclass} from '../components';
import React, { Component } from 'react';
import {Footer} from '../components/footerTR';

class MusteriGizliligiPageTr extends Component  {
    render(){
        return(
            <>
                <Header/>
                <MGPclass />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default MusteriGizliligiPageTr;