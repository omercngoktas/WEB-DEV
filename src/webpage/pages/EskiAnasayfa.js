import {NavBar as Header, Slider, ThreeCards, Footer, Map, News, Cookie, VideoPlayer, StartModal} from '../components';
import React, { Component } from 'react';
import BotPopUp from '../components/botPopUp';
import axios from 'axios';

class Home extends Component  {
    constructor(props){
        super(props)

        axios.get("http://ip-api.com/json/")
        .then((response) => {
            localStorage.setItem("vCountry", response.data.country); 
            localStorage.setItem("vCity", response.data.city);
            localStorage.setItem("vCityCode", response.data.countryCode);
        })
    }

    render(){
        return(
            <>
                <StartModal/>
                <BotPopUp />
                <Header/>
                <Slider />
                <ThreeCards />
                <News />
                <Map />
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default Home;