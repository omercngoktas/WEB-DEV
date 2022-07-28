import {NavBar as Header} from '../components/navTR';
import {SecPolicyTR, Cookie} from '../components';
import React, { Component } from 'react';
import {Footer} from '../components/footerTR';

class SecPolitika extends Component  {
    render(){
        return(
            <>
                <Header/>
                <SecPolicyTR />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default SecPolitika;