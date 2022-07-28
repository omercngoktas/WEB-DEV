import React, {Component} from 'react';
import { Segment , Container } from 'semantic-ui-react';

class NewContent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const HtmlText = this.props.newData.map((page) => page.content)
        return (
            <Segment >
                <Container>
                    <body className="sun-editor-editable" style={{ fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif"}}  dangerouslySetInnerHTML={{ __html: HtmlText }}/>
                </Container>
            </Segment>
        )
    }
}

export {NewContent}