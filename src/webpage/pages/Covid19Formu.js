import {NavBar as Header} from '../components/navTR';
import {CookieTR} from '../components/cookieTR';
import {Covid19Form} from '../components/covid19Form'
import React, { Component } from 'react';

class Covid19Formu extends Component  {
    render(){
        return(
            <>
                <Header/>
                <Covid19Form/>
                <CookieTR/>
            </>
        )
    }
}

export default Covid19Formu;