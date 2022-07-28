import React from 'react';
import {RiverIndex} from '../components/river/EmployeeAssessment';
import {LayoutHeader} from '../components/layoutHeader';

const HrEmployeeAssesment = () =>  { 
    return(
        <> 
            <LayoutHeader icon='wpforms' header='İş Başvurusu Formu' subheader='Web Sitesi üzerinden iş başvurusunda bulunan kişier listesi'/>
            <RiverIndex/>
        </>
    )
}
export {HrEmployeeAssesment};