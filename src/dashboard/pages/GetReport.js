import React from 'react';
import {LayoutHeader} from '../components/layoutHeader';
import {CustomerReportDocument} from '../components/customerReportDocument/superDoc';
import { Segment } from 'semantic-ui-react';

const GetReport = () =>  { 
    return(
        <> 
            <LayoutHeader icon='copy outline' header='Doküman ve Raporlar' subheader='Dokümanlar'/>
            
            <Segment className={'paddingSideBar'}>
                <CustomerReportDocument/>
            </Segment>
        </>
    )
}

export {GetReport};