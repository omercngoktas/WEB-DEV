import {NavBar as Header, Slider, ThreeCards, Footer, Map, News, Cookie, StartModal} from '../components';
import React, { Component } from 'react';
import NewContactForm from '../components/NewContactForm';

class Home extends Component  {
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
                <Cookie/>
                <NewContactForm/>
            </>
        )
    }
}

export default Home;