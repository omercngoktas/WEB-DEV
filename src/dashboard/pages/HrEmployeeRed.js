import React from 'react';
import {RiverIndex} from '../components/river/EmployeeRed';
import {LayoutHeader} from '../components/layoutHeader';

const HrEmployeeRed = () =>  { 
    return(
        <> 
            <LayoutHeader icon='wpforms' header='İş Başvurusu Formu' subheader='Web Sitesi üzerinden iş başvurusunda bulunan kişier listesi'/>
            <RiverIndex/>
        </>
    )
}
export {HrEmployeeRed};