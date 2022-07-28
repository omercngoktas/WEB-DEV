import React, {Component} from 'react';
import {Spinner, Row, Col} from 'react-bootstrap';
import ShortCard from './shortCard';
import agent from '../../../axios/agent';
import {DateToDaily} from '../../../dashboard/components/helpers';
import { Container, Pagination } from 'semantic-ui-react';
//import BigCard from './bigCard';
import {scrollTo} from '../helpers';

class NewsListTR extends Component {
    constructor(props){
        super(props);
        this.state={
            items: null,
            pageCount: null,
            activePage: 1
        }
        this.getNews = this.getNews.bind(this);
    }

    componentDidMount(){
        agent.Activities.list().then(response => this.setState({pageCount: response.data.length}));
        this.getNews(this.state.activePage);
    }

    getNews(pageNum){
        scrollTo(document.body)
        agent.Activities.list12(pageNum).then((response)=> {
            if(response.status === 200)
              {
                this.setState({items: response.data.map(i => { return i})})
              }
          })
    }

    render(){
        const {paginationId, pageCount, items} = this.state;
        
        const listShortNews = items ? items.map(item => {return(
            <Col xl={6} xs={12}>
                    <ShortCard
                        link={'/news/' +decodeURIComponent(item.link)}
                        image={item.image}
                        title={item.title}
                        id={item.id}
                        date={DateToDaily(item.date)}
                        description={item.description}
                        buttonName={"Detaylar"}
                    />
            </Col>
        )}) : null

        const pageNumber = pageCount ? pageCount : null
        
        return(
            <>
                <h2 className={'m-3 text-center'} style={{color: 'rgb(0, 93, 171)'}}>NEWS</h2>
                {items ? 
                <Container fluid style={{width:'85%'}}>
                        <Row>{listShortNews}</Row>
                        <div class="d-flex justify-content-center">
                            <Pagination 
                                defaultActivePage={2} 
                                totalPages={Math.ceil(pageNumber/12)} 
                                onPageChange={(e, { activePage }) => this.getNews(activePage-1)} 
                                activePage={paginationId}/>
                        </div>
                </Container>: <div className={'text-center p-5 '}><Spinner animation="border"/></div>
                }
            </>
        )
    }
}

export default NewsListTR;