import React from 'react';
import { Segment} from 'semantic-ui-react';
import {LayoutHeader} from '../components/layoutHeader';
import DoTable  from '../components/userTable';

const UserManagement = () =>  { 
    return(
        <> 
            <LayoutHeader icon='user outline' header='Kullanıcı Yönetimi' subheader='Kullanıcı İşlemleri'/>
            <Segment className={'paddingSideBar'} style={{ paddingBottom: '55px'}}>
                <DoTable/>
            </Segment>
        </>
    )
}

export {UserManagement};