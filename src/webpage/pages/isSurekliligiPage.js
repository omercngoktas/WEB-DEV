import {NavBar as Header} from '../components/navTR';
import {IsSurekliligiClass, Cookie} from '../components';
import React, { Component } from 'react';
import {Footer} from '../components/footerTR';

class isSurekliligi extends Component  {
    render(){
        return(
            <>
                <Header/>
                <IsSurekliligiClass />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default isSurekliligi;