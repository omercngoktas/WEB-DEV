import React, { Component } from 'react';
import { Calendar } from 'react-date-range';
import { Dropdown , Button, Grid } from 'semantic-ui-react';
import {tumRaporlar} from '../customerManagementTable/options'
import agent from '../../../axios/agent';
import axios from 'axios';
import {makeLinkDate} from '../helpers';
import FileDownload from 'js-file-download';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
//import LoaderCircle from '../../components/layoutLoader';
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
            valuefileType: null,
            proccessingText:null,
        }
        this.dateConf = this.dateConf.bind(this)
        this.onClickSend = this.onClickSend.bind(this)
        this.downloadExcellFile = this.downloadExcellFile.bind(this)
        this.getFileFromCustomerPDFS = this.getFileFromCustomerPDFS.bind(this)
        this.downloadPdfFile = this.downloadPdfFile.bind(this)
    }

    componentDidMount(){
        let customerName = localStorage.getItem("Username");
        agent.Customers.list().then(response => {
          response.data.find(item => {
            if(item.reportType == null) 
            {
                return this.setState({
                        noValue: true
                })
            } 
            return(item.customerName === customerName ? 
                    this.setState({
                        customerReports: item.reportType.split(','),
                        firm: item.firm,
                        firmNo: item.firmNo,
                        productType: item.productType
                      })
              :null)
          })
        })
    }

    dateConf(date) {
        let day = ("0" + (date.getDate())).slice(-2)
        let month = ("0" + (date.getMonth() + 1)).slice(-2)
        let year = date.getFullYear()
        return (day + "." + month + "." + year)
    }
    
    onClickSend(e){
        e.preventDefault();
        const {firmNo, startDate, endDate, productType, value, date, valuefileType} = this.state
        let dateOnceOrTwice =  date === "true" ? ("-" + this.dateConf(endDate)) : ""
        this.setState({
            proccessingText: "Please wait, datas sended / Lütfen Bekleyiniz, Veriler işleniyor."
        })
        
        let formData = {
            customerName: localStorage.getItem("Username"),
            report_Number: value,
            company: "0",
            fileType: valuefileType,
            parameters: `Tarih:${this.dateConf(startDate)}${dateOnceOrTwice};stokG1:${productType};stokG2:${firmNo}`
        }

        agent.ReportClaim.create(formData).then(response => {response.data.url ? 
            this.setState({
                dataFileName: response.data.url,
                proccessingText: "Please wait, datas succesfully sended/ Lütfen bekleyiniz, Veriler başarıyla gönderildi"}) : 
            this.setState({proccessingText: "Something went wrong on API/ Bir hata oluştu, API "})})
    }

    getFileFromCustomerPDFS(dataFileName){
        this.state.valuefileType === 'xls' ?
        this.downloadExcellFile(`/reportclaims/download/${dataFileName}`) : 
        this.downloadPdfFile(`/reportclaims/download/${dataFileName}`)
    }

    downloadExcellFile(fileUrl){
        axios({method:'GET',url: fileUrl, responseType: 'blob', headers: {'content-type': 'application/vnd.ms-excel;charset=UTF-8'}
        }).then((response) => {FileDownload(response.data, `Mefar-Report-Doc-${makeLinkDate()}.xls`);});
    }
    
    downloadPdfFile(fileUrl){
        axios({method:'GET',url: fileUrl, responseType: 'blob', headers: {'content-type': 'application/pdf;charset=UTF-8'}
        }).then((response) => {FileDownload(response.data, `Mefar-Report-Doc-${makeLinkDate()}.pdf`);});
    }
    
    render(){
    const { value , date, noValue } = this.state
    let musteriRaporlar = this.state.customerReports;
    
    let x = tumRaporlar.filter((item) => {
        if(musteriRaporlar.includes(item.key)) 
        return item 
    })

    if(this.state.dataFileName)
        this.getFileFromCustomerPDFS(this.state.dataFileName)
        
    return(
            <Grid columns={1}>
                {
                    noValue ?
                    <Grid.Row>
                        <Grid.Column>Bu alan için yetkiniz bulunmamaktadır. Yetki talebi için 
                            <a href="mailto:it-mefar@mefar.com"> it-mefar@mefar.com </a> iletişime geçin.
                            </Grid.Column>
                    </Grid.Row>:
                    <Grid.Row >
                        <Grid.Column>
                            {this.state.proccessingText ? this.state.proccessingText :
                            <>
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
                                    options={x}/>
                                <Dropdown
                                    placeholder='Lütfen, Dosya Tipini Seçiniz / Please, Choose file type for download'
                                    fluid
                                    selection
                                    value={this.state.valuefileType}
                                    onChange={(e, { value }) => {this.setState({valuefileType: value})}} 
                                    options={[{'key' : 'xls', 'text': 'Excell', 'value': 'xls'},{'key' : 'pdf', 'text': 'Pdf', 'value': 'pdf'}]}
                                    style={{marginTop:'15px'}}/>
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
                                <Button 
                                    disabled={this.state.startDate == null} 
                                    className={'blockButton'} primary onClick={(e) => {this.onClickSend(e)}}>
                                            {this.state.startDate == null ? "Lütfen tarih seçiniz": "Dökümanı Göster"}
                                </Button>
                            </>
                        }
                        </Grid.Column>
                </Grid.Row>
                }
                </Grid>
        )
    }
}

export {CustomerReportDocument}