import { NavBar as Header } from '../components/nav';
import { Footer, Cookie, IklimDegisikligiClassEng } from '../components';
import React, { Component } from 'react';

class IklimDegisikligiEng extends Component {
    render() {
        return (
            <>
                <Header />
                <IklimDegisikligiClassEng />
                <Footer />
                <Cookie />
            </>
        )
    }
}

export default IklimDegisikligiEng;