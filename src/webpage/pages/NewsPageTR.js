import {NavBar as Header} from '../components/navTR';
import {Footer} from '../components/footerTR';
import React, {Component} from 'react';
import agent from '../../axios/agent';
import {NewContent} from '../components/news/newContent';
import {CookieTR} from '../components/cookieTR';

class NewsPageTR extends Component  {
    constructor(props){
        super(props);
        this.state={
            data:[],
            path: window.location.pathname.split("/").pop()
        }
    }

    componentDidMount(){
        const {path} = this.state
        agent.Aktiviteler.getLink(decodeURIComponent(path)).then(response => {
            this.setState({ data: response.data[0]}) })
    }

    render(){
        const {data} = this.state
        return(
            <>
                <Header />
                {data ? <NewContent newData={data}/> : null}
                <Footer />
                <CookieTR/>
            </>
        )
    }
}

export default NewsPageTR;