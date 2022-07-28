import {NavBar as Header, Esg, Footer, Cookie} from '../components';
import React, { Component } from 'react';

class EnvironmentSocialGovernance extends Component  {
    render(){
        return(
            <>
                <Header/>
                <Esg/>
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default EnvironmentSocialGovernance;