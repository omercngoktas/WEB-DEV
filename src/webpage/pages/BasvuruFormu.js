import {NavBar as Header} from '../components/navTR';
import {CookieTR} from '../components/cookieTR';
import {Footer} from '../components';
import {BasvuruFormu} from '../components/isBasvuruFormu'
import React, { Component } from 'react';

class BasvuruForm extends Component  {
    render(){
        return(
            <>
                <Header/>
                <BasvuruFormu/>
                <CookieTR/>
                <Footer />
            </>
        )
    }
}

export default BasvuruForm;