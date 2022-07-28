import React from 'react';
import { Segment } from 'semantic-ui-react';
import {TextEditor} from '../components/textEditor';
import {LayoutHeader} from '../components/layoutHeader';

const CustomizePage = () =>  { 
    return(
        <> 
            <LayoutHeader icon='edit outline' header='İçerik Yöneticisi' subheader='Sayfalar ve İçerikler'/>
            <Segment className={'paddingSideBar'}>
                <TextEditor/>
            </Segment>
        </>
    )
}

export {CustomizePage};