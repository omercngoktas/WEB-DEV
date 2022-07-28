import {NavBar as Header} from '../components/nav';
import {SecPolicyEng, Footer, Cookie} from '../components';
import React, { Component } from 'react';

class ESGPolicy extends Component  {
    render(){
        return(
            <>
                <Header/>
                <SecPolicyEng />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default ESGPolicy;