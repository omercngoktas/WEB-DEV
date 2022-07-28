import React from 'react';
import {RiverIndex} from '../components/river/EmployeeHire';
import {LayoutHeader} from '../components/layoutHeader';

const HrEmployeeHire = () =>  { 
    return(
        <> 
            <LayoutHeader icon='wpforms' header='İş Başvurusu Formu' subheader='Web Sitesi üzerinden iş başvurusunda bulunan kişier listesi'/>
            <RiverIndex/>
        </>
    )
}
export {HrEmployeeHire};