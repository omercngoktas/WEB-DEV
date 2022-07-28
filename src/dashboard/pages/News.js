import React from 'react';
import {NewsList} from '../components/newsList';
import {LayoutHeader} from '../components/layoutHeader';

const NewsEdit = () =>  { 
    return(
        <> 
            <LayoutHeader icon='paper plane outline' header='Haber Yönetimi' subheader='Haberler'/>
            <NewsList/>
        </>
    )
}

export {NewsEdit};