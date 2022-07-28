import React from 'react';
import {HESList} from '../components/hesList';
import {LayoutHeader} from '../components/layoutHeader';

const HesList = () =>  { 
    return(
        <> 
            <LayoutHeader icon='user doctor' header='HES Yönetimi' subheader='COVID-19 Personel Yönetimi'/>
            <HESList/>
        </>
    )
}

export {HesList};