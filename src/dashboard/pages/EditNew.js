import React from 'react';
import agent from '../../axios/agent';
import {Segment} from 'semantic-ui-react'
import {NewEdit} from '../components/newEdit';
import {LayoutHeader} from '../components/layoutHeader';

const EditNew = ({ match }) => {
    let data = agent.Activities.details(match.params.id).then(response => {return(response.data)})
    return (
        <>
        <LayoutHeader icon='edit outline' header='Haber Düzenle' subheader='İçerik ve Resimler'/>
        <Segment className={'paddingSideBar'}>
            {data ? <NewEdit data={data}/>: null}
        </Segment>
        </>
    )
}

export {EditNew}