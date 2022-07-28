import React from 'react';
import {RiverIndex} from '../components/river/EmployeeDiscuss';
import {LayoutHeader} from '../components/layoutHeader';

const HrEmployeeDiscuss = () =>  { 
    return(
        <> 
            <LayoutHeader icon='wpforms' header='İş Başvurusu Formu' subheader='Web Sitesi üzerinden iş başvurusunda bulunan kişier listesi'/>
            <RiverIndex/>
        </>
    )
}
export {HrEmployeeDiscuss};