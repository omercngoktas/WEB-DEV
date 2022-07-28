import {NavBar as Header} from '../components/nav';
import {Footer, Cookie, MGPclassEng} from '../components';
import React, { Component } from 'react';

class MusteriGizliligiPageEng extends Component  {
    render(){
        return(
            <>
                <Header/>
                <MGPclassEng />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default MusteriGizliligiPageEng;