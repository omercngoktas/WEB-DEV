import {Map} from '../components';
import News from '../components/newsTR';
import {NavBar as Header} from '../components/navTR';
import {Slider} from '../components/sliderTR';
import {ThreeCards} from '../components/threecardsTR';
import {Footer} from '../components/footerTR';
import {CookieTR} from '../components/cookieTR';
import React, { Component } from 'react';
import {StartModal} from '../components';
import NewContactFormTR from '../components/NewContactFormTR';


class Anasayfa extends Component  {
    render(){
        return(
            <>
                {/* <StartModal/> */}
                <Header/>
                <Slider />
                <ThreeCards />
                <News />
                <Map />
                <Footer />
                <NewContactFormTR/>
                <CookieTR/>
            </>
        )
    }
}

export default Anasayfa;