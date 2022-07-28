import {NavBar as Header, Sustainability, Footer, Cookie} from '../components';
import React, { Component } from 'react';

class Sustain extends Component  {
    render(){
        return(
            <>
                <Header/>
                <Sustainability/>
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default Sustain;