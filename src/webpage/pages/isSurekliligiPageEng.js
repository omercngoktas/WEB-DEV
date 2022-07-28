import {NavBar as Header} from '../components/nav';
import {Footer, Cookie, IsSurekliligiClassEng} from '../components';
import React, { Component } from 'react';

class isSurekliligiEng extends Component  {
    render(){
        return(
            <>
                <Header/>
                <IsSurekliligiClassEng />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default isSurekliligiEng;