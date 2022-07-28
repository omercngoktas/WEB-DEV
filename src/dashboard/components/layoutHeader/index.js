import React from 'react';
import { Segment , Header, Icon} from 'semantic-ui-react';

const LayoutHeader = (props) =>  { 
    return(
        <> 
            <Segment className={'paddingSideBar'}>
                <Header as='h2'>
                    <Icon name={props.icon} />
                    <Header.Content>
                        {props.header}
                            <Header.Subheader>{props.subheader}</Header.Subheader>
                    </Header.Content>
                </Header>
            </Segment>
        </>
    )
}

export {LayoutHeader};