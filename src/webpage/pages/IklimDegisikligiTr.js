import {NavBar as Header} from '../components/navTR';
import {IklimDegisikligiClass, Cookie} from '../components';
import React, { Component } from 'react';
import {Footer} from '../components/footerTR';

class IklimDegisikligiTr extends Component  {
    render(){
        return(
            <>
                <Header/>
                <IklimDegisikligiClass />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default IklimDegisikligiTr;