import { NavBar as Header } from '../components/nav';
import { Footer, Cookie, InsanHaklarıClassEng } from '../components';
import React, { Component } from 'react';

class InsanHaklarıEng extends Component {
    render() {
        return (
            <>
                <Header />
                <InsanHaklarıClassEng />
                <Footer />
                <Cookie />
            </>
        )
    }
}

export default InsanHaklarıEng;