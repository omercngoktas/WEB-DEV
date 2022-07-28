import React from 'react';
import {ApplicationPoziton} from '../components/river/ApplicationPozition/index';
import {LayoutHeader} from '../components/layoutHeader';

const ApplicationPozitons = () =>  { 
    return(
        <> 
            <LayoutHeader icon='wpforms' header='İş Başvurusu Formu' subheader='Web Sitesi üzerinden iş başvurusunda bulunan kişier listesi'/>
            <ApplicationPoziton/>
        </>
    )
}
export {ApplicationPozitons};