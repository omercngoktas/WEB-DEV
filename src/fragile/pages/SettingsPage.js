import React from 'react';
import {NavbarFragile as Header} from '../components/navbar';
import Config from '../components/settings';
import {Container} from 'semantic-ui-react';

const SettingsPage = () =>  {
        return(
            <>
            <Header />
            <Container style={{marginTop: '8rem'}}>
                <Config>test</Config>
            </Container>
            </>
        )
    }
export {SettingsPage};