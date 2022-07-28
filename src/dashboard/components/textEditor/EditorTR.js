import React, {Component} from 'react';
import {Button} from 'semantic-ui-react'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; 
import agent from '../../../axios/agent';

class EditorTR extends Component {
    constructor(props){
        super(props)
        this.state={ pageText: ''}
        this.setState({ pageText: this.props.pageText})
        
        this.handleChange = this.handleChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleChange(pageText){
        this.setState({
            pageText: pageText
        })
    }

    handleOnSubmit(event){
        event.preventDefault();
        let page = {
            pageText: this.state.pageText,
            Id: this.props.Id
        }
        agent.Sayfalar.update(page).then((response)=> {
            response.status === 200 ?
            window.location.reload():
            console.log('API ERRROR')
        })
    }

    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                <SunEditor 
                    setContents={this.props.pageText}
                    onChange={this.handleChange}
                    setOptions={{height: '70vh',
                    buttonList: [['undo', 'redo','align',
                    'font','fontColor','fontSize','formatBlock',
                    'hiliteColor','horizontalRule','lineHeight',
                    'list','paragraphStyle','table', 'textStyle',
                    'codeView','image','link','video','preview']],}}/>
                <Button primary type="submit" value="Submit">Kaydet</Button>
            </form>
        )
    }
} 

export {EditorTR}