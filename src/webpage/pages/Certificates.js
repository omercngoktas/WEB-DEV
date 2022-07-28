import {NavBar as Header, Certificate, Footer, Cookie} from '../components';
import React, { Component } from 'react';

class Certificates extends Component  {
    render(){
        return(
            <>
                <Header/>
                <Certificate/>
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default Certificates;