import {NavBar as Header} from '../components/navTR';
import {SustainabilityTR, Cookie} from '../components';
import React, { Component } from 'react';
import {Footer} from '../components/footerTR';

class Surdurulebilirlik extends Component  {
    render(){
        return(
            <>
                <Header/>
                <SustainabilityTR />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default Surdurulebilirlik;