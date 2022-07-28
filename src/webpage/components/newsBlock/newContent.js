import React, {Component} from 'react';
import { Segment , Container } from 'semantic-ui-react';
import {Spinner} from 'react-bootstrap';
import {DateToDaily} from '../../../dashboard/components/helpers';

class NewContent extends Component {
    render(){
        const {content, date} = this.props.newData
        return (
            <Segment >
                {this.props.newData ? 
                <Container style={{paddingBottom:'20px'}}>
                    <body className="sun-editor-editable" 
                    style={{ fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}} 
                    dangerouslySetInnerHTML={{ __html: content }}/>
                    <p style={{float:'right'}}>{date ? DateToDaily(date) : null}</p>
                </Container>
                :<div className={'text-center p-5 '}><Spinner animation="border"/></div>
                }
            </Segment>
        )
    }
}

export {NewContent}