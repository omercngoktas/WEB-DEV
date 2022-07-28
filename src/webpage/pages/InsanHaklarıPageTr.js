import {NavBar as Header} from '../components/navTR';
import {InsanHaklarıClass, Cookie} from '../components';
import React, { Component } from 'react';
import {Footer} from '../components/footerTR';

class InsanHaklarıTr extends Component  {
    render(){
        return(
            <>
                <Header/>
                <InsanHaklarıClass />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default InsanHaklarıTr;