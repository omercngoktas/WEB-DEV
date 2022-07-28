import React from 'react';
import agent from '../../axios/agent';
import {Segment} from 'semantic-ui-react'
import {EmployeeResultIndex} from '../components/river/EmployeeDetail/index';
import {LayoutHeader} from '../components/layoutHeader';

const EmpList = ({ match }) => {
    let data = agent.HRApplication.detail(match.params.id).then(response => {return(response.data)})
    return (
        <>
        <LayoutHeader icon='edit outline' header='Kişi Detayları' subheader='Tüm Kişi Detayları'/>
        <Segment className={'paddingSideBar'}>
            {data ? <EmployeeResultIndex data={data}/>: null}
        </Segment>
        </>
    )
}

export {EmpList}