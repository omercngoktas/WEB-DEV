import { NavBar as Header } from '../components/nav';
import { Footer, Cookie, QualityPolicyClass } from '../components';
import React, { Component } from 'react';

class QualityPolicyWeb extends Component {
    render() {
        return (
            <>
                <Header />
                <QualityPolicyClass />
                <Footer />
                <Cookie />
            </>
        )
    }
}

export default QualityPolicyWeb;