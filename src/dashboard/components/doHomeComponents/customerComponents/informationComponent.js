import React from 'react';
import {VideoPlayer} from '../../../../webpage/components/';

const InformationComponent = (props) => {
    return(<VideoPlayer poster={props.poster} video={props.video}/>)
}

export default InformationComponent