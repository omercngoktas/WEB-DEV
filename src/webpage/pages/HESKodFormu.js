import {NavBar as Header} from '../components/navTR';
import {CookieTR} from '../components/cookieTR';
import {HesKodForm} from '../components/hesKodForm'
import React, { Component } from 'react';

class HESKodFormu extends Component  {
    render(){
        return(
            <>
                <Header/>
                <HesKodForm/>
                <CookieTR/>
            </>
        )
    }
}

export default HESKodFormu;