import React from 'react';
import {MainPageContactForm} from '../components/MainPageContactForm';
import {LayoutHeader} from '../components/layoutHeader';

const MPContactForm = () =>  { 
    return(
        <> 
            <LayoutHeader icon='wpforms' header='İletişim Formu' subheader='İletişim Formu detayları'/>
            <MainPageContactForm/>
        </>
    )
}

export {MPContactForm};