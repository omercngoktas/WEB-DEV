import React from 'react';
import {ComplaintsListForm} from '../components/complaintsList';
import {LayoutHeader} from '../components/layoutHeader';

const ComplaintsList = () =>  { 
    return(
        <> 
            <LayoutHeader icon='discussions icon' header='Müşteri Şikayetleri Yönetimi' subheader='Müşteri Şikayetleri Yönetimi'/>
            <ComplaintsListForm/>
        </>
    )
}
export {ComplaintsList};