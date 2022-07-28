import React from 'react';
import {RiverIndex} from '../components/river/EmployeeList';
import {LayoutHeader} from '../components/layoutHeader';

const HrEmployeeList = () =>  { 
    return(
        <> 
            <LayoutHeader icon='wpforms' header='İş Başvurusu Formu' subheader='Web Sitesi üzerinden iş başvurusunda bulunan kişier listesi'/>
            <RiverIndex/>
        </>
    )
}
export {HrEmployeeList};