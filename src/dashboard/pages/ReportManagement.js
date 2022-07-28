import React from 'react';
import { Segment} from 'semantic-ui-react';
import {LayoutHeader} from '../components/layoutHeader';
import ReportTable from '../components/reportTable';

const ReportManagement = () =>  { 
    return(
        <> 
            <LayoutHeader icon='file alternate outline' header='Rapor Yönetimi' subheader='Rapor İşlemleri'/>
            <Segment className={'paddingSideBar'} style={{ paddingBottom: '55px'}}>
                <ReportTable/>
            </Segment>
        </>
    )
}

export {ReportManagement};