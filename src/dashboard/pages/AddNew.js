import React from 'react';
import { Segment } from 'semantic-ui-react';
import {CreateNew} from '../components/newCreate';
import {LayoutHeader} from '../components/layoutHeader';

const AddNew = () =>  { 
    return(
        <> 
            <LayoutHeader icon='paper plane outline' header='Haber Yönetimi' subheader='Yeni Haber Ekle'/>
            <Segment className={'paddingSideBar'} style={{ marginBottom: '55px'}}>
                <CreateNew/>
            </Segment>
        </>
    )
}

export {AddNew};