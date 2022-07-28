import React from 'react';
import {RiverIndex} from '../components/river/EmployeeAll';
import {LayoutHeader} from '../components/layoutHeader';

const HrEmployeeAll = () =>  { 
    return(
        <> 
            <LayoutHeader icon='wpforms' header='İş Başvurusu Formu' subheader='Web Sitesi üzerinden iş başvurusunda bulunan kişier listesi'/>
            <RiverIndex/>
        </>
    )
}
export {HrEmployeeAll};