import React, { Component } from 'react';
import { Segment, Table, Button } from 'semantic-ui-react';
import agent from '../../../../axios/agent';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Container, Row, Col, FormControl, Modal, Form } from 'react-bootstrap';
import { NotificationError, NotificationSuccess } from '../../../../webpage/components/notification';

class ApplicationPoziton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      dataLogs: [],
      PageStatus: '',
      isOpen: false,
      WhoEmailLocal: localStorage.getItem("UserEmail"),
      informationId: null,
      informationPozition: null,
      PozitionsForLogs: ''
    }
  }

  componentDidMount() {
    agent.HrPozitions.list()
      .then(response => {
        this.setState({
          data: response.data,
        })
      })
    agent.HrLogs.list()
      .then(response => {
        this.setState({
          dataLogs: response.data
        })
      })
  }
  createPozitionHandler(event) {
    event.preventDefault();
    const { Pozition, WhoEmailLocal } = this.state;
    let newForm = {
      Pozition: Pozition,
      WhoAdded: WhoEmailLocal,
      date: new Date(),
      opened: "1"
    }
    agent.HrPozitions.create(newForm)
      .then(response => {
        this.setState({
          isOpen: false
        })
        NotificationSuccess("İşlem Başarılı");
        setTimeout(() => {
          agent.HrPozitions.list()
            .then(response => {
              this.setState({
                data: response.data,
                Pozition: '',
              })
            })
        }, 3000);
      })
  }
  handleOnClosePozitionsButton(e) {
    let FormStatus = {
      id: e,
      opened: "0",
    }
    agent.HrPozitions.update(FormStatus).then((response) => {
      response.status === 200 ?
        NotificationSuccess("Pozisyon Kapalı hale getirildi, İşlemler Uygulanıyor") :
        NotificationError("Pozisyon Daha Önce Açık Hale Getirildi yada İşlem Gerçekleştirilemiyor")
    })
    agent.HrPozitions.details(FormStatus).then((response) => {
      this.setState({
        PozitionsForLogs: response.pozition
      })
      console.log(this.state.PozitionsForLogs)
      response.status === 200 ?
        NotificationSuccess("Pozisyon Kapalı hale getirildi, İşlemler Uygulanıyor") :
        NotificationError("Pozisyon Daha Önce Açık Hale Getirildi yada İşlem Gerçekleştirilemiyor")
    })
    setTimeout(() => {
      agent.HrPozitions.list()
        .then(response => {
          this.setState({
            data: response.data,
            Pozition: '',
          })
        })
    }, 3000);
    let LogStatus = {
      guiForRequestLogs: e,
      who: this.state.WhoEmailLocal,
      process: this.state.WhoEmailLocal + " Tarafından " + this.state.PozitionsForLogs + "Kapalı Hale Getirildi",
      date: new Date(),
    }
    agent.HrLogs.create(LogStatus).then((response) => {
      response.status === 200 ?
        console.log("Form Durumu Statüsü Değiştirildi") :
        console.log("API ERROR")
    })
    agent.HrLogs.list()
      .then(response => {
        this.setState({
          dataLogs: response.data
        })
      })
  }
  handleOnOpenPozitionsButton(e) {
    console.log(e);
    let FormStatus = {
      id: e,
      opened: "1",
    }
    agent.HrPozitions.update(FormStatus).then((response) => {
      console.log(response);
      response.status === 200 ?
        NotificationSuccess("Pozisyon Açık hale getirildi, İşlemler Uygulanıyor") :
        NotificationError("Pozisyon Daha Önce Açık Hale Getirildi yada İşlem Gerçekleştirilemiyor")
    })
    setTimeout(() => {
      agent.HrPozitions.list()
        .then(response => {
          this.setState({
            data: response.data,
            Pozition: '',
          })
        })
    }, 3000);
    let LogStatus = {
      guiForRequestLogs: e,
      who: this.state.WhoEmailLocal,
      process: this.state.WhoEmailLocal + " Tarafından Açık Hale Getirildi",
      date: new Date(),
    }
    agent.HrLogs.create(LogStatus).then((response) => {
      response.status === 200 ?
        console.log("Log girdisi yapıldı") :
        console.log("API ERROR")
    })
    agent.HrLogs.list()
      .then(response => {
        this.setState({
          dataLogs: response.data
        })
      })
  }
  EditPozitionHandler(event, item) {
    console.log(event)
    event.preventDefault();
    const { informationId, informationPozition } = this.state;
    let newEditForm = {
      id: informationId,
      Pozition: informationPozition,
      WhoAdded: this.state.WhoEmailLocal
    }
    agent.HrPozitions.update(newEditForm)
      .then(response => {
        this.setState({
          isOpenEdit: false
        })
        NotificationSuccess("İşlem Başarılı Değişiklikler Uygulanıyor");
        setTimeout(() => {
          agent.HrPozitions.list()
            .then(response => {
              this.setState({
                data: response.data,
                Pozition: '',
              })
            })
        }, 3000);
      })
  }
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  isOpenEdit = (item) => {
    this.setState({
      isOpenEdit: true,
    });
    agent.HrPozitions.details(item).then(response => {
      this.setState({
        informationId: response.data.id,
        informationPozition: response.data.pozition
      })
    })

  }
  closeModalEdit = () => this.setState({ isOpenEdit: false });
  render() {
    const tableDatas = this.state.data.map((item) => {
      return (
        <Table.Row>
          <Table.Cell>
            {item.date.substring(11, 16)} | {item.date.substring(8, 10)}.{item.date.substring(5, 7)}.{item.date.substring(0, 4)}
          </Table.Cell>
          <Table.Cell>{item.pozition}</Table.Cell>
          <Table.Cell>{item.whoAdded}</Table.Cell>
          <Table.Cell>{item.opened === "0" ? "Kapalı" : "Açık"}</Table.Cell>
          <Table.Cell>
            {
              item.opened === "0" ?
                <Button inverted color='green' fluid
                  onClick={() => { if (window.confirm('Pozisyonu Açık Duruma istediğinize Emin Misiniz?')) { this.handleOnOpenPozitionsButton(item.id) }; }}>
                  Aç
                </Button>
                :
                <Button inverted color='red' fluid
                  onClick={() => { if (window.confirm('Pozisyonu Kapalı Duruma istediğinize Emin Misiniz?')) { this.handleOnClosePozitionsButton(item.id) }; }}>
                  Kapat
                </Button>
            }
          </Table.Cell>
          <Table.Cell>
            <Button inverted color='orange'
              onClick={() => this.isOpenEdit(item.id)}>
              Düzenle
            </Button>
          </Table.Cell>
        </Table.Row>)
    })
    return (

      <Segment className={'paddingSideBar'}>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="success"
          table="table-to-xls"
          filename="İletisim_formu"
          sheet="İletisim_formu"
          buttonText="Excell İndir"
          content='Primary' />

        <Button style={{ marginLeft: '2rem' }} inverted color='blue' onClick={this.openModal}>Yeni Pozisyon Ekle</Button>
        <Modal size="md" show={this.state.isOpen} onHide={this.closeModal} aria-labelledby="example-modal-sizes-title-xl">
          <Modal.Header closeButton>
            <Modal.Title>Yeni Başvuru Pozisyonu Ekliyorsunuz</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={event => this.createPozitionHandler(event)}>
              <Container>
                <Row style={{ marginTop: '1rem' }}>
                  <Col>
                    <FormControl
                      placeholder="Pozisyon İsmi Yazınız"
                      required
                      value={this.state.Pozition}
                      onChange={(event) => { this.setState({ Pozition: event.target.value }) }}
                    />
                  </Col>
                </Row>
                <hr></hr>
                <Button variant="primary" type="submit">
                  Ekle
                </Button>
              </Container>
            </Form>
          </Modal.Body>
        </Modal>
        {/* Edit Pozition */}
        <Modal size="md" show={this.state.isOpenEdit} onHide={this.closeModalEdit} aria-labelledby="example-modal-sizes-title-xl">
          <Modal.Header closeButton>
            <Modal.Title>Pozisyon Adı Düzenle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={event => this.EditPozitionHandler(event)}>
              <Container>
                <Row style={{ marginTop: '1rem' }}>
                  <Col>
                    <FormControl
                      placeholder="Firma İsmi Girin"
                      value={this.state.informationPozition}
                      onChange={(event) => { this.setState({ informationPozition: event.target.value }) }}
                    ></FormControl>
                  </Col>
                </Row>
                <Row style={{ marginTop: '1rem' }}>
                  <Col>
                    <FormControl
                      type="hidden"
                      placeholder="Firma İsmi Girin"
                      value={this.state.informationId}
                      onChange={(event) => { this.setState({ informationId: event.target.value }) }}
                    ></FormControl>
                  </Col>
                </Row>
                <hr></hr>
                <Button variant="primary" type="submit">
                  Kaydet
                </Button>
              </Container>
            </Form>
          </Modal.Body>
        </Modal>
        <Table celled id="table-to-xls">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Tarih</Table.HeaderCell>
              <Table.HeaderCell>Başvurduğu Pozisyon Adı</Table.HeaderCell>
              <Table.HeaderCell>Kim Ekledi</Table.HeaderCell>
              <Table.HeaderCell>Mevcut İşlem Durumu</Table.HeaderCell>
              <Table.HeaderCell>İşlemler</Table.HeaderCell>
              <Table.HeaderCell>Düzenle</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{tableDatas}</Table.Body>
        </Table>
        {/* <hr></hr>
                <h4>İşlem Logları</h4>
                <Table celled id="table-to-xls">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Tarih</Table.HeaderCell>
                      <Table.HeaderCell>İşlem Yapan</Table.HeaderCell>
                      <Table.HeaderCell>İşlem</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>{LogsTable}</Table.Body>
                </Table> */}
      </Segment>
    )
  }
}

export { ApplicationPoziton }