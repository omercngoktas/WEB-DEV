import React, { Component } from 'react';
import { Segment, Table, Button } from 'semantic-ui-react';
import agent from '../../../axios/agent';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { NotificationError, NotificationSuccess,NotificationInfo,NotificationWarn } from '../../../webpage/components/notification';

class AquilaSuggestionsListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        agent.ProjectAquila.list()
            .then(response => {
                this.setState({
                    data: response.data
                })
            })
    }
    CheckStatus(stat) {
        let StatusText = (stat === '0') ? 'Bekleniyor' : (stat === '1') ? 'Kabul Edildi' : (stat === '2') ? 'Reddedildi' : 'Sistem Datası Yok, Web yöneticiniz ile iletişime geçin!'
        return StatusText;
    }
    handleOnClosePozitionsButton(e) {
        let today = new Date();
        let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear() + " / " + today.getHours() + " : " +  today.getMinutes() ;
       
        let FormStatus = {
            id: e,
            status: "2",
            lastChange : localStorage.getItem("UserEmail") + " / Sunucu Saati :  "+ date
        }
        agent.ProjectAquila.update(FormStatus).then((response) => {
            if (response.status === 200) {
                NotificationError("Öneri Reddedildi Statüsüne Alınıyor, İşlemler Uygulanıyor")
            }
            if (response.status === 500) {
                NotificationError("Öneri Daha Önce Reddedildi Statüsüne Getirildi yada İşlem Gerçekleştirilemiyor")
            }
        })
        setTimeout(() => {
            agent.ProjectAquila.list()
                .then(response => {
                    this.setState({
                        data: response.data
                    })
                })
        }, 3000);
    }
    handleOnOpenPozitionsButton(e) {
        console.log(e);
        let today = new Date();
        let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear() + " / " + today.getHours() + " : " +  today.getMinutes() ;
        let FormStatus = {
            id: e,
            status: "1",
            lastChange : localStorage.getItem("UserEmail") + " / Sunucu Saati :  "+ date
        }
        agent.ProjectAquila.update(FormStatus).then((response) => {
            console.log(response);
            response.status === 200 ?
                (NotificationInfo("Öneri Kabul Edildi Statüsüne Alınıyor, İşlemler Uygulanıyor"))
                :
                NotificationError("Pozisyon Daha Önce Açık Hale Getirildi yada İşlem Gerçekleştirilemiyor")
        })
        setTimeout(() => {
            agent.ProjectAquila.list()
                .then(response => {
                    this.setState({
                        data: response.data,
                    })
                })
        }, 3000);
    }
    handleOnHoldPozitionsButton(e) {
        let today = new Date();
        let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear() + " / " + today.getHours() + " : " +  today.getMinutes() ;
       
        console.log(e);
        let FormStatus = {
            id: e,
            status: "0",
            lastChange : localStorage.getItem("UserEmail") + " / Sunucu Saati :  "+ date
        }
        agent.ProjectAquila.update(FormStatus).then((response) => {
            console.log(response);
            response.status === 200 ?
                (NotificationWarn("Öneri Bekliyor Statüsüne Alınıyor, İşlemler Uygulanıyor"))
                :
                NotificationError("Pozisyon Daha Önce Açık Hale Getirildi yada İşlem Gerçekleştirilemiyor")
        })
        setTimeout(() => {
            agent.ProjectAquila.list()
                .then(response => {
                    this.setState({
                        data: response.data,
                    })
                })
        }, 3000);
    }


    render() {
        const tableDatas = this.state.data.map((item) => {
            return (
                <Table.Row>
                    <Table.Cell>{item.date.substring(11, 16)} | {item.date.substring(8, 10)}.{item.date.substring(5, 7)}.{item.date.substring(0, 4)}</Table.Cell>
                    <Table.Cell>{item.adSoyad}</Table.Cell>
                    <Table.Cell>{item.departman}</Table.Cell>
                    <Table.Cell>{item.oneri}</Table.Cell>
                    <Table.Cell>{this.CheckStatus(item.status)}</Table.Cell>
                    <Table.Cell>{item.lastChange}</Table.Cell>
                    <Table.Cell>
                        <Button inverted color='blue' fluid
                            onClick={() => { if (window.confirm('Öneri Durumunu "Açık" Olarak Değiştirmek İstediğinize Emin Misiniz?')) { this.handleOnOpenPozitionsButton(item.id) }; }}>
                            Kabul Et
                        </Button>
                    </Table.Cell>
                    <Table.Cell>
                        <Button inverted color='red' fluid
                            onClick={() => { if (window.confirm('Öneri Durumunu "Kapalı" Olarak Değiştirmek İstediğinize Emin Misiniz?')) { this.handleOnClosePozitionsButton(item.id) }; }}>
                            Reddet
                        </Button>
                    </Table.Cell>
                    <Table.Cell>
                        <Button inverted color='orange' fluid
                            onClick={() => { if (window.confirm('Öneri Durumunu "Bekleniyor" Olarak Değiştirmek İstediğinize Emin Misiniz?')) { this.handleOnHoldPozitionsButton(item.id) }; }}>
                            Bekleniyor
                        </Button>
                    </Table.Cell>
                </Table.Row>)
        })
        return (
            <Segment className={'paddingSideBar'}>
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="Aquila Öneri Listesi"
                    sheet="Aquila Öneri Listesi"
                    buttonText="Excell İndir" />
                <Table celled id="table-to-xls">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Tarih</Table.HeaderCell>
                            <Table.HeaderCell>Ad Soyad</Table.HeaderCell>
                            <Table.HeaderCell>Departman</Table.HeaderCell>
                            <Table.HeaderCell>Öneri</Table.HeaderCell>
                            <Table.HeaderCell>Öneri Durumu</Table.HeaderCell>
                            <Table.HeaderCell>Son Değişikliği Gerçekleştiren</Table.HeaderCell>
                            <Table.HeaderCell>Durumu Değiştir</Table.HeaderCell>
                            <Table.HeaderCell>Durumu Değiştir</Table.HeaderCell>
                            <Table.HeaderCell>Durumu Değiştir</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>{tableDatas}</Table.Body>
                </Table>
            </Segment>
        )
    }
}

export { AquilaSuggestionsListComponent }