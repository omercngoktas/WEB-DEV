import { NavBar as Header } from '../components/nav';
import { Footer, Cookie, EnerjiPolitikasiClassEng } from '../components';
import React, { Component } from 'react';

class EnerjiPolitikasiEng extends Component {
    render() {
        return (
            <>
                <Header />
                <EnerjiPolitikasiClassEng />
                <Footer />
                <Cookie />
            </>
        )
    }
}

export default EnerjiPolitikasiEng;