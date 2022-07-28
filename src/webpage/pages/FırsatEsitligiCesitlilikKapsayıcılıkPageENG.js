import { NavBar as Header } from '../components/nav';
import { Footer, Cookie, FECKClassEng } from '../components';
import React, { Component } from 'react';

class FECKpageENG extends Component {
    render() {
        return (
            <>
                <Header />
                <FECKClassEng />
                <Footer />
                <Cookie />
            </>
        )
    }
}

export default FECKpageENG;