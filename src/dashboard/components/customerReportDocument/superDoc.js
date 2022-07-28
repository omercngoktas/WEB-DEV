import React, { Component } from 'react';
import { Calendar } from 'react-date-range';
import { Dropdown , Button, Grid, Icon, Input} from 'semantic-ui-react';
import {tumRaporlar} from '../customerManagementTable/options'
//import agent from '../../../axios/agent';
import axios from 'axios';
import {makeLinkDate} from '../helpers';
import FileDownload from 'js-file-download';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import LoaderCircle from '../layoutLoader';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

class CustomerReportDocument extends Component{
    constructor(props){
        super(props)
        this.state={
            customerReports: [],
            dropdownValue: null,
            startDate: null,
            endDate: null,
            date: null,
            firm: null,
            firmNo: null,
            productType: null,
            file: null,
            wait: null,
            excelUrl: null,
            excellWait: null,
            permission: null,
            noValue: null,
            uri:null
        }
        this.dateConf = this.dateConf.bind(this)
        this.onClickSend = this.onClickSend.bind(this)
        this.downloadExcellFile = this.downloadExcellFile.bind(this)
    }

    dateConf(date) {
        let day = ("0" + (date.getDate())).slice(-2)
        let month = ("0" + (date.getMonth() + 1)).slice(-2)
        let year = date.getFullYear()
        return (day + "." + month + "." + year)
    }
    
    onClickSend(e, fileType){
        e.preventDefault();
        const {firmNo, startDate, endDate, productType, value, date} = this.state
        
        fileType === "pdf" ?
        this.setState({
            wait: true
        }):
        this.setState({
            excellWait: true
        })
        
        let x =  date === "true" ? ("-" + this.dateConf(endDate)) : ""
        var formdata = new FormData();
        formdata.append("CustomerName", localStorage.getItem("Username"));
        formdata.append("Report_Number", value);
        formdata.append("Company", 0);
        formdata.append("FileType", fileType);
        formdata.append("Parameters", "Tarih:" + this.dateConf(startDate) + x + ";stokG1:" + productType + ";stokG2:"+ firmNo);
        
        var requestOptions = {method: 'POST', body: formdata, redirect: 'follow'};
        fetch(process.env.REACT_APP_API_URL + "/reportclaims", requestOptions)
        .then(response => response.json())
        .then(data => fileType === "pdf" ? this.setState({file: data.url}) : this.setState({excelUrl: data.url}))
        .catch(error => console.log('error', error));
    }

    downloadExcellFile(fileUrl){
        axios({method:'GET',url: fileUrl, responseType: 'blob', headers: {'content-type': 'application/vnd.ms-excel;charset=UTF-8'}
        }).then((response) => {FileDownload(response.data, `Mefar-Report-Doc-${makeLinkDate()}.xls`);});
    }
    
    render(){
    const { value , date, startDate, firmNo, productType, file, wait, excelUrl, excellWait} = this.state
    //let musteriRaporlar = this.state.customerReports;
    return(
            <Grid columns={1}>
                    <Grid.Row >
                    {
                        file ?
                        <div style={{height: '80vh', width: '180vh', paddingLeft:'10px'}}>
                            {
                                excelUrl? 
                                <><Button color="green" onClick={this.downloadExcellFile(excelUrl)} style={{display:'none'}}><a href="!#" style={{padding: '10px'}}>İndir</a><Icon name="download"/></Button>
                                <a href="!#"><Icon color="green" name="check circle"/>Excell Dosyası İndirildi..</a></>
                                :
                                <>
                                <Button 
                                color='green' 
                                onClick={(e) => {this.onClickSend(e, "xls")}}
                                disabled={excellWait ? true : false}>
                                    {excellWait ? 
                                    <>Döküman hazırlanıyor...</>
                                    : <><a href="!#" style={{padding: '10px', marginBottom:'10px'}}>Excel</a><Icon name="file excel outline"/></>}
                                </Button>
                                </>
                            }
                            <Button color="blue" onClick={(e) => {e.preventDefault();window.location.reload()}}><a href="!#" style={{padding: '10px'}}>Yeni Rapor Al</a><Icon name="copy outline"/></Button>
                            {file ? file.length > 50 ?  
                            <div style={{ margin: 'auto', width: '50%'}}>
                            <h1 style={{margin:'20px'}}><br/><Icon color="yellow" name="question"/>{file}</h1>
                            <ul>
                                <li><h3>Girilen tarih aralığı minimum 10 gün olmalıdır.</h3></li>
                                <li><h3>İstenilen rapor cari yıl içerisinde olmalıdır.</h3></li>
                                <li><h3>Girilen tarih aralığında, sisteme kayıtlı bir veri bulunamamasından kaynaklıdır.</h3></li>
                            </ul>
                            </div>  : null : file }
                         </div>:
                        <Grid.Column>
                            <Input
                                value={this.state.productType}
                                onChange={(event) => this.setState({productType: event.target.value})}
                                placeholder='Stok Grup 1 (HA, HM, YM)'
                                fluid
                                required/>
                            <Input
                                value={this.state.firmNo}
                                onChange={(event) => this.setState({firmNo: event.target.value})}
                                placeholder='Stok Grup 2 (01, 184)'
                                fluid
                                required/>
                            <Dropdown
                                placeholder='Lütfen Rapor Seçiniz / Please, Choose your report type'
                                fluid
                                selection
                                value={value}
                                onChange={(e, { value }) => {
                                    tumRaporlar.find(item => {
                                        this.setState({
                                            date: item.date,
                                            value: value}) 
                                        return (value === item.key)} )
                                }}
                                options={tumRaporlar}
                            />
                            {
                            value ? 
                            <>
                                {
                                date === "true" ? 
                                <>
                                    <Calendar
                                        onChange={item => this.setState({startDate: item})}
                                        date={this.state.startDate}
                                        style={{minWidth: '86vh', fontSize: "16px"}}
                                    />
                                    <Calendar  
                                        onChange={item => this.setState({endDate: item})}
                                        date={this.state.endDate}
                                        style={{minWidth: '86vh', fontSize: "16px"}}
                                    />
                                </>:
                                <Calendar 
                                    onChange={item => this.setState({startDate: item})}
                                    date={this.state.startDate}
                                    style={{minWidth: '178vh', fontSize: "16px"}}
                                />
                                }
                                {
                                wait ? 
                                <div><LoaderCircle content={file ? file.length > 50 ? file : 'Tahmini süre 15-30 saniyedir. Zaman aşımı durumunda sayfayı yenileyin.' : 'Tahmini süre 15-30 saniyedir. Zaman aşımı durumunda sayfayı yenileyin.'}/></div>: 
                                <Button className={'blockButton'} 
                                primary 
                                onClick={(e) => {this.onClickSend(e, "pdf")}}
                                disabled={startDate && productType && firmNo ? false : true}>
                                    Dökümanı Göster
                                </Button>
                                }
                            </>:
                            <>
                                <h4><Icon color="red" name="warning"/>Lütfen, Almak istediğiniz rapor tipini seçin.</h4>
                            </>
                            }
                        </Grid.Column>
                        }
                </Grid.Row>
                </Grid>
        )
    }
}

export {CustomerReportDocument}