import React from "react";
import CustomerDocs from './customerDocs';
import {Segment, Button, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const AdminComponents = () => {
    return(
        <>
        <div className={'paddingSideBar'}>
        <Button icon as={Link} to="/do/add/new" labelPosition='left' color='orange' size='small'>
             <Icon name='plus' /> Hızlı Haber Ekle</Button>
        <Button icon as={Link} to="/do/get/report" labelPosition='left' color='blue' size='small'>
             <Icon name='copy outline' /> Hızlı Doküman Al</Button>
        </div>
        
        <Segment className={'paddingSideBar'} style={{ paddingBottom: '55px'}}>
            <CustomerDocs/>
        </Segment>
        </>
    )
}

export default AdminComponents