import React from 'react';
import { Segment} from 'semantic-ui-react';
import {LayoutHeader} from '../components/layoutHeader';
import CustomerManagementTable from '../components/customerManagementTable';

const CustomerManagement = () =>  { 
    return(
        <> 
            <LayoutHeader icon='address book outline' header='Müşteri Yönetimi' subheader='Müşteri İşlemleri'/>
            <Segment className={'paddingSideBar'} style={{ paddingBottom: '55px'}}>
                <CustomerManagementTable/>
            </Segment>
        </>
    )
}

export {CustomerManagement};