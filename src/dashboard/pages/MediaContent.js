import React from 'react';
import {ImagesTable} from '../components/ImagesTable';
import {LayoutHeader} from '../components/layoutHeader';

const MediaContent = () => {
        return(
            <> 
            <LayoutHeader icon='images outline' header='Medya Yönetimi' subheader='Medya Akışı'/>
            <ImagesTable/>
            </>
        )
}

export {MediaContent};