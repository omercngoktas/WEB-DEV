//import { Row } from 'react-bootstrap';
import React from 'react';

const PageTitle = (props) => {
    return (<h2 className={'text-center'} style={{textTransform : 'uppercase', color: '#005dab'}}>{props.pageName}</h2>)
}

export default PageTitle;

