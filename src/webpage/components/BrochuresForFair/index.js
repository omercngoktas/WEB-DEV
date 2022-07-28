import React, { Component } from "react";
import {Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faDownload,faFileDownload } from '@fortawesome/free-solid-svg-icons';
import {onClickDownload} from '../helpers'

class BrochureForFairClass extends Component {
    render(){
        return(
        <Row style={{marginBottom:'-20px'}}>
            <Col onClick={event => onClickDownload(event, "/brochures/Birgi_Brochure_2021-4.pdf")} className="text-center hoverCard" xl={6} xs={12} style={{backgroundColor: 'rgb(11, 75, 147)', padding:'15vh' }} >
                <h2 style={{fontWeight:'bold', color: 'white', paddingTop: '5px'}}>
                    Birgi E-Brochure
                </h2>
                <h5 style={{ color: 'white', paddingTop: '5px'}}>
                    <FontAwesomeIcon icon={faDownload} color='white' style={{fontSize: '48px'}} />
                </h5>
            </Col>
            <Col onClick={event => onClickDownload(event, "/brochures/Mefar_Brochure_2021-4.pdf")} className="text-center hoverCard" xl={6} xs={12} style={{backgroundColor: 'rgb(54, 114, 68)',  padding:'15vh'}} >
                <h2 style={{fontWeight:'bold', color: 'white', paddingTop: '5px'}}>
                    Mefar E-Brochure
                </h2>
                <h5 style={{ color: 'white', paddingTop: '5px'}}>
                    <FontAwesomeIcon icon={faFileDownload} color='white' style={{fontSize: '48px'}} />
                </h5>
            </Col>
        </Row>
        )
    }
}

class BrochureForFairClassTr extends Component {
    render(){
        return(
            <Row style={{marginBottom:'-20px'}}>
            <Col onClick={event => onClickDownload(event, "brochures/birgibrochure.pdf")} className="text-center hoverCard" xl={6} xs={12} style={{backgroundColor: 'rgb(11, 75, 147)', padding:'15vh'}} >
                <h2 style={{fontWeight:'bold', color: 'white', paddingTop: '5zpx'}}>
                    Birgi E-Broşür
                </h2>
                <FontAwesomeIcon icon={faDownload} color='white' style={{fontSize: '48px'}} />
            </Col>
            <Col onClick={event => onClickDownload(event, "brochures/mefarbrochure.pdf")}className="text-center hoverCard" xl={6} xs={12} style={{backgroundColor: 'rgb(54, 114, 68)', padding:'15vh'}} >
                <h2 style={{fontWeight:'bold', color: 'white', paddingTop: '5px'}}>
                    Mefar E-Broşür
                </h2>
                <FontAwesomeIcon icon={faFileDownload} color='white' style={{fontSize: '48px'}} />  
            </Col>
        </Row>
        )
    }
}

export {BrochureForFairClass, BrochureForFairClassTr};