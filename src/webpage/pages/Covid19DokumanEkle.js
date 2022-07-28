import {NavBar as Header} from '../components/navTR';
import {CookieTR} from '../components/cookieTR';
import {Covid19DokumanıEkle} from '../components/covid19DokumanıEkle'
import React, { Component } from 'react';

class Covid19DokumanEkle extends Component  {
    render(){
        return(
            <>
                <Header/>
                <Covid19DokumanıEkle/>
                <CookieTR/>
            </>
        )
    }
}

export default Covid19DokumanEkle;