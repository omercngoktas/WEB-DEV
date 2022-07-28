import {NavBar as Header, Footer, Cookie} from '../components';
import React, {Component} from 'react';
import agent from '../../axios/agent';
import {NewContent} from '../components/news/newContent';

class NewsPage extends Component  {
    constructor(props){
        super(props);
        this.state={
            data:[],
            path: window.location.pathname.split("/").pop()
        }
    }

    componentDidMount(){
        const {path} = this.state
        agent.Activities.getLink(decodeURIComponent(path)).then(response => 
            this.setState({ data: response.data[0]}) )
    }

    render(){
        const {data} = this.state
        return(
            <>
                <Header />
                <NewContent newData={data}/>
                <Footer />
                <Cookie/>
            </>
        )
    }
}

export default NewsPage;