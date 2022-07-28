import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { Col, Row, Container, Button, Form } from 'react-bootstrap';
import agent from '../../../../axios/agent';
import { NotificationError, NotificationSuccess } from '../../../../webpage/components/notification';
import 'suneditor/dist/css/suneditor.min.css';
import { Redirect } from 'react-router-dom';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Font, Image } from '@react-pdf/renderer';
import Logo from './logo.png'

function refreshPage() {
  window.location.reload(false);
}

class EmployeeResultIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      FormStatus: '',
      ProccesStatus: '',
      WhoEmail: localStorage.getItem("UserEmail"),
      commentData: [],
      LogData: []
    }
    this.calculateAge = this.calculateAge.bind(this)
    this.HandleCommentAdd = this.HandleCommentAdd.bind(this)
    // this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }


  componentDidMount() {
    let data = this.props.data
    data.then((result) => {
      this.setState({
        id: result.id,
        CreationDateHours: result.creationDate.substring(11, 16),
        CreationDateDay: result.creationDate.substring(8, 10),
        CreationDateMounth: result.creationDate.substring(5, 7),
        CreationDateYear: result.creationDate.substring(0, 4),
        Link: result.link,
        PozitionFor: result.pozitionFor,
        NameSurname: result.nameSurname,
        TelNo: result.telNo,
        Address: result.address,
        Epost: result.epost,
        Gender: result.gender,
        MartialStatus: result.martialStatus,
        MilitaryServe: result.militaryServe,
        Birthday: result.birthday,
        BirthMounth: result.birthMounth,
        BirthYear: result.birthYear,
        EstatusOne: result.estatusOne,
        EschoolOne: result.eschoolOne,
        EdepartmentOne: result.edepartmentOne,
        EstartDateOne: result.estartDateOne,
        EFinishDateOne: result.eFinishDateOne,
        EstatusTwo: result.estatusTwo,
        EschoolTwo: result.eschoolTwo,
        EdepartmentTwo: result.edepartmentTwo,
        EstartDateTwo: result.estartDateTwo,
        EFinishDateTwo: result.eFinishDateTwo,
        CompanyNameOne: result.companyNameOne,
        PositionOne: result.positionOne,
        PstartMounthOne: result.pstartMounthOne,
        PstartYearOne: result.pstartYearOne,
        PFinishMounthOne: result.pFinishMounthOne,
        PFinishYearOne: result.pFinishYearOne,
        PositonDetailOne: result.positonDetailOne,
        CompanyNameTwo: result.companyNameTwo,
        PositionTwo: result.positionTwo,
        PstartMounthTwo: result.pstartMounthTwo,
        PstartYearTwo: result.pstartYearTwo,
        PFinishMounthTwo: result.pFinishMounthTwo,
        PFinishYearTwo: result.pFinishYearTwo,
        PositonDetailTwo: result.positonDetailTwo,
        CompanyNameThree: result.companyNameThree,
        PositionThree: result.positionThree,
        PstartMounthThree: result.pstartMounthThree,
        PstartYearThree: result.pstartYearThree,
        PFinishMounthThree: result.pFinishMounthThree,
        PFinishYearThree: result.pFinishYearThree,
        PositonDetailThree: result.positonDetailThree,
        CompanyNameFour: result.companyNameFour,
        PositionFour: result.positionFour,
        PstartMounthFour: result.pstartMounthFour,
        PstartYearFour: result.pstartYearFour,
        PFinishMounthFour: result.pFinishMounthFour,
        PFinishYearFour: result.pFinishYearFour,
        PositonDetailFour: result.positonDetailFour,
        CompanyNameFive: result.companyNameFive,
        PositionFive: result.positionFive,
        PstartMounthFive: result.pstartMounthFive,
        PstartYearFive: result.pstartYearFive,
        PFinishMounthFive: result.pFinishMounthFive,
        PFinishYearFive: result.pFinishYearFive,
        PositonDetailFive: result.positonDetailFive,
        Shift: result.shift,
        DaysofWeekShift: result.daysofWeekShift,
        Overtime: result.overtime,
        HealthProblem: result.healthProblem,
        Phisicald: result.phisicald,
        FamilarWorker: result.familarWorker,
        WantedSalary: result.wantedSalary,
        JstarTime: result.jstarTime,

      })
      agent.HrComments.list().then((response => {
        response.status === 200 ?
          this.setState({
            commentData: response.data
          }) :

          NotificationError("Yorumları Listelerken Hata Oluştu")
      }))
      agent.HrLogs.list().then((response => {
        response.status === 200 ?
          this.setState({
            LogData: response.data
          }) : NotificationError("Yorumları Listelerken Hata Oluştu")
      }))
      if (result.link === "0") {
        this.setState({
          FormStatus: 'Yeni Başvuru Listesinde',
        })
      }
      if (result.link === '1') {
        this.setState({
          FormStatus: 'Değerlendirme Listesinde'
        })
      }
      if (result.link === '2') {
        this.setState({
          FormStatus: 'Görüşecekler Listesinde',
        })
      }
      if (result.link === '3') {
        this.setState({
          FormStatus: 'İşe Alınacaklar Listesinde'
        })
      }
      if (result.link === '4') {
        this.setState({
          FormStatus: 'Uygun Bulunmayan / İmha Edilecek Listesi'
        })
      }
    }
    )

  }


  calculateAge = (BirthYear, BirthMounth) => {
    var today = new Date();
    var birthDate = new Date(BirthYear);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - BirthMounth;
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  }

  handleChange = (param, e) => {
    this.setState({
      [param]: e.target.value,
    })
  }
  handleOnConfirmButton(e) {
    console.log(e);
    let FormStatus = {
      id: this.state.id,
      link: e,
    }
    agent.HRApplication.update(FormStatus).then((response) => {
      response.status === 200 ?
        NotificationSuccess("Form Durumu Statüsü Değiştirildi") :
        console.log("API ERROR")
    })

    let LogStatus = {
      guiForRequestLogs: this.state.id,
      who: this.state.WhoEmail,
      process: e,
      date: new Date(),
    }
    agent.HrLogs.create(LogStatus).then((response) => {
      response.status === 200 ?
        console.log("Form Durumu Statüsü Değiştirildi") :
        console.log("API ERROR")
    })
    setTimeout(() => {
      refreshPage();
    }, 3000);
  }
  HandleCommentAdd(e) {
    e.preventDefault();
    const { comment, WhoEmail } = this.state;
    var today = new Date();
    let form = {
      guiForRequest: this.state.id,
      commentOwner: WhoEmail,
      comment: comment,
      date: today,
    }
    agent.HrComments.create(form).then((response => {
      response.status === 200 ?
        NotificationSuccess("Yorum Başarıyla Eklendi") :
        NotificationError("API Hatası Oluştu Lütfen IT Ekibiyle İletişme Geçin")
    }))
    setTimeout(() => {
      refreshPage();
    }, 3000);
  }

  // handleOnSubmit(event){
  //     event.preventDefault();
  //     let activity = {
  //         id: this.state.id,
  //         title: this.state.title,
  //         description: this.state.description,
  //         content: this.state.pageText,
  //         image: this.state.image,
  //         date: this.state.date,
  //     }
  //     agent.Activities.update(activity).then((response)=> {
  //       response.status == 200 ? 
  //       this.setState({success: true}):
  //       console.log("API ERROR")
  //     })
  // }

  render() {
    if (this.state.success === true) {
      return <Redirect to='/do' />
    }
    Font.register({
      family: "Roboto",
      fonts : [
        {src:"https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"},
        {src:"https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto_slab/robotoslab-bold-webfont.ttf", fontStyle: 'Bold'}
      ]
     
    });
    
    const styles = StyleSheet.create({
      page: { backgroundColor: 'white', fontFamily: "Roboto", fontSize: "11" },
      section: { color: 'black', margin: 30, },
      head: { color: 'green', textAlign: 'center', fontSize: "13", fontFamily : "Roboto", fontStyle: "Bold", fontWeight:'200' },
      subtitle: {
        color : '#012D9A',
        fontSize: "11",
        marginBottom: 2,
        marginTop: 2,
        fontFamily: 'Roboto',
        fontStyle : 'Bold'
      },
      textDefault : {color : '#012D9A'}
    });

    const MyDocument = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Image style={{ width: '100', height: '150' }} src={Logo} />
            <Text style={styles.head} >
              Başvuru Durumu
            </Text>
            <Text style={{
              borderBottomColor: 'black',
              marginTop: '10',
              marginBottom: '10',
              borderBottomWidth: 1,
            }}>
            </Text>
            <Text style={{ marginTop: '15' }}>
              Form Durumu : {this.state.FormStatus}
            </Text>
            <Text>
              Başvuru Tarihi : {this.state.CreationDateHours} | {this.state.CreationDateDay}.{this.state.CreationDateMounth}.{this.state.CreationDateYear}
            </Text>
            <Text>
              Başvurulan Pozisyon : {this.state.PozitionFor}
            </Text>
            <Text style={styles.head}>
              Kişisel Bilgiler
            </Text>
            <Text style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: '10',
              marginBottom: '10'
            }}></Text>
            <Text>
              İsim Soyisim : {this.state.NameSurname}
            </Text>
            <Text>
              Doğum Tarihi : {this.state.Birthday} / {this.state.BirthMounth} / {this.state.BirthYear} / Yaş : {this.calculateAge(this.state.BirthYear)}
            </Text>
            <Text>
              E-Posta : {this.state.Epost}
            </Text>
            <Text>
              Telefon : {this.state.TelNo}
            </Text>
            <Text>
              Talep Edilen Ücret : {this.state.WantedSalary}
            </Text>
            <Text>
              Cinsiyet : {this.state.Gender}
            </Text>
            <Text>
              Medeni Durum : {this.state.MartialStatus}
            </Text>
            <Text>
              Askerlik Durumu : {this.state.MilitaryServe}
            </Text>
            <Text>
              Adres : {this.state.Address}
            </Text>
            <Text>
              İş Başı Tarihi : {this.state.JstarTime}
            </Text>
            <Text style={styles.head}>
              Özel Bilgiler
            </Text>
            <Text style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: '10',
              marginBottom: '10'
            }}>
            </Text>
            <Text>
              Vardiyalı çalışabilir misiniz? : {this.state.Shift}
            </Text>
            <Text>
              Haftanın 6 günü çalışabilir misiniz? : {this.state.DaysofWeekShift}
            </Text>
            <Text>
              Fazla mesai yapabilir misiniz? : {this.state.Overtime}
            </Text>
            <Text>
              Sağlık sorununuz veya kronik bir rahatsızlığınız var mı? : {this.state.HealthProblem}
            </Text>
            <Text>
              Bedensel engeliniz var mı? : {this.state.Phisicald}
            </Text>
            <Text>
              Şirketimizde çalışan tanıdığınız var mı? : {this.state.FamilarWorker}
            </Text>
            <Text style={styles.head}>
              İş Deneyimi
            </Text>
            <Text style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: '10',
              marginBottom: '10'
            }}>
            </Text>
            <Text style={styles.subtitle}>
              İş Deneyimi I</Text>
            <Text>
              Şirket Ünvanı  : {this.state.CompanyNameOne}
            </Text>
            <Text>
              Başlangıç Tarihi : {this.state.PstartMounthOne} / {this.state.PstartYearOne}
            </Text>
            <Text>
              Bitiş Tarihi : {this.state.PFinishMounthOne} / {this.state.PFinishYearOne}
            </Text>
            <Text>
              Pozisyon : {this.state.PositionOne}
            </Text>
            <Text>
              Pozisyon Detayı   : {this.state.PositonDetailOne}
            </Text>
          </View>

        </Page>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Image style={{ width: '100', height: '150' }} src={Logo} />
            <Text style={styles.subtitle}>
              İş Deneyimi II
            </Text>
            <Text>
              Şirket Ünvanı  : {this.state.CompanyNameTwo}
            </Text>
            <Text>
              Başlangıç Tarihi : {this.state.PstartMounthTwo} / {this.state.PstartYearTwo}
            </Text>
            <Text>
              Bitiş Tarihi : {this.state.PFinishMounthTwo} / {this.state.PFinishYearTwo}
            </Text>
            <Text>
              Pozisyon : {this.state.PositionTwo}
            </Text>
            <Text>
              Pozisyon Detayı   : {this.state.PositonDetailTwo}
            </Text>
            <Text style={styles.subtitle}>
              İş Deneyimi III
            </Text>
            <Text>
              Şirket Ünvanı  : {this.state.CompanyNameThree}
            </Text>
            <Text>
              Başlangıç Tarihi : {this.state.PstartMounthThree} / {this.state.PstartYearThree}
            </Text>
            <Text>
              Bitiş Tarihi : {this.state.PFinishMounthThree} / {this.state.PFinishYearThree}
            </Text>
            <Text>
              Pozisyon : {this.state.PositionThree}
            </Text>
            <Text>
              Pozisyon Detayı   : {this.state.PositonDetailThree}
            </Text>
            <Text style={styles.subtitle}>
              İş Deneyimi IV
            </Text>
            <Text>
              Şirket Ünvanı : : {this.state.CompanyNameFour}
            </Text>
            <Text>
              Başlangıç Tarihi : {this.state.PstartMounthFour} / {this.state.PstartYearFour}
            </Text>
            <Text>
              Bitiş Tarihi : {this.state.PFinishMounthFour} / {this.state.PFinishYearFour}
            </Text>
            <Text>
              Pozisyon : {this.state.PositionFour}
            </Text>
            <Text>
              Pozisyon Detayı : {this.state.PositonDetailFour}
            </Text>
            <Text style={styles.subtitle}>
              İş Deneyimi V
            </Text>
            <Text>
              Şirket Ünvanı  : {this.state.CompanyNameFive}
            </Text>
            <Text>
              Başlangıç Tarihi : {this.state.PstartMounthFive} / {this.state.PstartYearFive}
            </Text>
            <Text>
              Bitiş Tarihi :{this.state.PFinishMounthFive} / {this.state.PFinishYearFive}
            </Text>
            <Text>
              Pozisyon : {this.state.PositionFive}
            </Text>
            <Text>
              Pozisyon Detayı  : {this.state.PositonDetailFive}
            </Text>
            <Text style={styles.head}>
              Eğitim Bilgileri
            </Text>
            <Text style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: '10',
              marginBottom: '10'
            }}>
            </Text>
            <Text style={styles.subtitle}>
              Eğitim Bilgileri I
            </Text>
            <Text>
              Eğitim Durumu : {this.state.EstatusOne}
            </Text>
            <Text>
              Okul Adı : {this.state.EschoolOne}
            </Text>
            <Text>
              Bölümü : {this.state.EdepartmentOne}
            </Text>
            <Text>
              Başlangıç Yılı : {this.state.EstartDateOne}
            </Text>
            <Text>
              Bitiş Yılı : {this.state.EFinishDateOne}
            </Text>
            <Text style={styles.subtitle}>
              Eğitim Bilgileri II
            </Text>
            <Text>
              Eğitim Durumu : {this.state.EstatusTwo}
            </Text>
            <Text>
              Okul Adı : {this.state.EschoolTwo}
            </Text>
            <Text>
              Bölümü : {this.state.EdepartmentTwo}
            </Text>
            <Text>
              Başlangıç Yılı : {this.state.EstartDateTwo}
            </Text>
            <Text>
              Bitiş Yılı : {this.state.EFinishDateTwo}
            </Text>
          </View>
        </Page>


      </Document>
    );

    let a = '';
    const LogData = this.state.LogData.filter(response => response.guiForRequestLogs === this.state.id).map((item) => {
      if (item.process === '0') {
        item.process = 'Yeni Başvuru Listesinde'
      }
      if (item.process === '1') {
        item.process = "Değerlendirme Listesinde"
      }
      if (item.process === '2') {
        item.process = "Görüşülecekler Listesinde"
      }
      if (item.process === '3') {
        item.process = "İşe Alınacaklar Listesinde"
      }
      if (item.process === '4') {
        item.process = "Uygun Bulunmayan Listesinde"
      }
      return (
        <Table.Row>
          <Table.Cell>{item.date.substring(11, 16)} | {item.date.substring(8, 10)}.{item.date.substring(5, 7)}.{item.date.substring(0, 4)}</Table.Cell>
          <Table.Cell>{item.who} Tarafından {a} {item.process} Aktarıldı</Table.Cell>
        </Table.Row>
      )
    })

    const commentDataTable = this.state.commentData.filter(response => response.guiForRequest === this.state.id).map((item) => {
      return (
        <Table.Row>
          <Table.Cell>{item.date.substring(11, 16)} | {item.date.substring(8, 10)}.{item.date.substring(5, 7)}.{item.date.substring(0, 4)}</Table.Cell>
          <Table.Cell>{item.commentOwner}</Table.Cell>
          <Table.Cell>{item.comment}</Table.Cell>
        </Table.Row>
      )
    })
    return (
      <div>
        <Container>
          <Row style={{ marginTop: "3rem" }}>
            <Col>
              <Row>
                <Col style={{ padding: "2rem" }}>
                  <Button variant="info" value="0" onClick={() => { if (window.confirm('Yeni Başvuru Listesine Taşımak İstediğinize Emin Misiniz?')) { this.handleOnConfirmButton("0") }; }} >Yeni Başvuru Listesine Taşı</Button>
                </Col>
                <Col style={{ padding: "2rem" }}>
                  <Button variant="secondary" value="1" onClick={() => { if (window.confirm('Değerlendime Listesine Taşımak İstediğinize Emin Misiniz?')) { this.handleOnConfirmButton("1") }; }}>Değerlendime Listesine Taşı</Button>
                </Col>
                <Col style={{ padding: "2rem" }}>
                  <Button value="2" onClick={() => { if (window.confirm('Görüşecekler Listesine Taşımak İstediğinize Emin Misiniz?')) { this.handleOnConfirmButton("2") }; }}>Görüşecekler Listesine Taşı</Button>
                </Col>
                <Col style={{ padding: "2rem" }}>
                  <Button variant="success" value="3" onClick={() => { if (window.confirm('İşe Alınacaklar Listesine Taşımak İstediğinize Emin Misiniz?')) { this.handleOnConfirmButton("3") }; }} >İşe Alınacaklar Listesine Taşı</Button>
                </Col>
                <Col style={{ padding: "2rem" }}>
                  <Button variant="danger" value="4" onClick={() => { if (window.confirm('Uygun Bulunmayan Taşımak İstediğinize Emin Misiniz?')) { this.handleOnConfirmButton("4") }; }}>Uygun Bulunmayan Listesine Taşı</Button>
                </Col>
              </Row>
              <h3>İşlem Durumu</h3>
              <PDFDownloadLink document={<MyDocument />} fileName={`${this.state.NameSurname}_Özgeçmişi_${this.state.CreationDateHours}|${this.state.CreationDateDay}.${this.state.CreationDateMounth}.${this.state.CreationDateYear}.pdf`}>
                {({ blob, url, loading, error }) =>
                  loading ? 'Döküman Hazırlanıyor...' : 'Özgeçmişi PDF olarak indir'
                }
              </PDFDownloadLink>
              <hr></hr>
              <p>Form Durumu : {this.state.FormStatus}</p>
              <p>Başvuru Tarihi : {this.state.CreationDateHours} | {this.state.CreationDateDay}.{this.state.CreationDateMounth}.{this.state.CreationDateYear}</p>
              <p><b>Başvurulan Pozisyon</b> : {this.state.PozitionFor}</p>
              <h3>Kişisel Bilgiler</h3>
              <hr></hr>

            </Col>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <Col>
              <p><b>İsim Soyisim</b> : {this.state.NameSurname}</p>

              <p><b>Doğum Tarihi</b> : {this.state.Birthday} / {this.state.BirthMounth} / {this.state.BirthYear} / Yaş : {this.calculateAge(this.state.BirthYear)}</p>

              <p><b>E-Posta</b> : {this.state.Epost}</p>

              <p><b>Telefon</b> : {this.state.TelNo}</p>

              <p><b>Talep Edilen Ücret</b> : {this.state.WantedSalary}</p>
            </Col>
            <Col>
              <p><b>Cinsiyet</b> : {this.state.Gender}</p>

              <p><b>Medeni Durum</b> : {this.state.MartialStatus}</p>

              <p><b>Askerlik Durumu</b> : {this.state.MilitaryServe}</p>

              <p><b>Adres</b> : {this.state.Address}</p>

              <p><b>İş Başı Tarihi</b> : {this.state.JstarTime}</p>
            </Col>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <Col>
              <h3>Özel Bilgiler</h3>
              <hr></hr>
              <Row>
                <Col>
                  <p><b>Vardiyalı çalışabilir misiniz?</b> : {this.state.Shift}</p>
                  <p><b>Haftanın 6 günü çalışabilir misiniz?</b> : {this.state.DaysofWeekShift}</p>
                  <p><b>Fazla mesai yapabilir misiniz?</b> : {this.state.Overtime}</p>
                </Col>
                <Col>
                  <p><b>Sağlık sorununuz veya kronik bir rahatsızlığınız var mı?</b> : {this.state.HealthProblem}</p>
                  <p><b>Bedensel engeliniz var mı?</b> : {this.state.Phisicald}</p>
                  <p><b>Şirketimizde çalışan tanıdığınız var mı?</b> : {this.state.FamilarWorker}</p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row style={{ marginTop: "1rem" }}>
            <Col>
              <h3>İş Deneyimi</h3>
              <hr></hr>
              <p>İş Deneyimi I</p>
              <Row>
                <Col>
                  <p><b>Şirket Ünvanı </b> : {this.state.CompanyNameOne}</p>
                  <p><b>Başlangıç Tarihi</b> : {this.state.PstartMounthOne} / {this.state.PstartYearOne} </p>
                  <p><b>Bitiş Tarihi</b> : {this.state.PFinishMounthOne} / {this.state.PFinishYearOne} </p>

                </Col>
                <Col>
                  <p><b>Pozisyon</b> : {this.state.PositionOne}</p>
                  <p><b>Pozisyon Detayı  </b> : {this.state.PositonDetailOne}</p>
                </Col>
              </Row>
              <hr></hr>
              <p>İş Deneyimi II</p>
              <Row style={{ marginTop: "1rem" }}>
                <Col>
                  <p><b>Şirket Ünvanı </b> : {this.state.CompanyNameTwo}</p>
                  <p><b>Başlangıç Tarihi</b> : {this.state.PstartMounthTwo} / {this.state.PstartYearTwo}</p>
                  <p><b>Bitiş Tarihi</b> : {this.state.PFinishMounthTwo} / {this.state.PFinishYearTwo}</p>

                </Col>
                <Col>
                  <p><b>Pozisyon</b> : {this.state.PositionTwo}</p>
                  <p><b>Pozisyon Detayı  </b> : {this.state.PositonDetailTwo}</p>
                </Col>
              </Row>
              <hr></hr>
              <p>İş Deneyimi III</p>
              <Row style={{ marginTop: "1rem" }}>
                <Col>
                  <p><b>Şirket Ünvanı </b> : {this.state.CompanyNameThree}</p>
                  <p><b>Başlangıç Tarihi</b> : {this.state.PstartMounthThree} / {this.state.PstartYearThree}</p>
                  <p><b>Bitiş Tarihi</b> : {this.state.PFinishMounthThree} / {this.state.PFinishYearThree}</p>

                </Col>
                <Col>
                  <p><b>Pozisyon</b> : {this.state.PositionThree}</p>
                  <p><b>Pozisyon Detayı  </b> : {this.state.PositonDetailThree}</p>
                </Col>
              </Row>
              <hr></hr>
              <p>İş Deneyimi IV</p>
              <Row style={{ marginTop: "1rem" }}>
                <Col>
                  <p><b>Şirket Ünvanı :</b> : {this.state.CompanyNameFour}</p>
                  <p><b>Başlangıç Tarihi</b> : {this.state.PstartMounthFour} / {this.state.PstartYearFour}</p>
                  <p><b>Bitiş Tarihi</b> : {this.state.PFinishMounthFour} / {this.state.PFinishYearFour}</p>

                </Col>
                <Col>
                  <p><b>Pozisyon</b> : {this.state.PositionFour}</p>
                  <p><b>Pozisyon Detayı : </b>{this.state.PositonDetailFour}</p>
                </Col>
              </Row>
              <hr></hr>
              <p>İş Deneyimi V</p>
              <Row style={{ marginTop: "1rem" }}>
                <Col>
                  <p><b>Şirket Ünvanı </b> : {this.state.CompanyNameFive}</p>
                  <p><b>Başlangıç Tarihi</b> : {this.state.PstartMounthFive} / {this.state.PstartYearFive}</p>
                  <p><b>Bitiş Tarihi</b> :{this.state.PFinishMounthFive} / {this.state.PFinishYearFive}</p>
                </Col>
                <Col>
                  <p><b>Pozisyon</b> : {this.state.PositionFive}</p>
                  <p><b>Pozisyon Detayı </b> : {this.state.PositonDetailFive}</p>

                </Col>
              </Row>
            </Col>
          </Row>

          <Row style={{ marginTop: "1rem" }}>
            <Col>
              <h3>Eğitim Bilgieri</h3>
              <hr></hr>
              <p>Eğitim Bilgileri I</p>
              <Row>
                <Col>
                  <p><b>Eğitim Durumu</b> : {this.state.EstatusOne}</p>
                  <p><b>Okul Adı</b> : {this.state.EschoolOne}</p>
                  <p><b>Bölümü</b> : {this.state.EdepartmentOne}</p>
                </Col>
                <Col>
                  <p><b>Başlangıç Yılı</b> : {this.state.EstartDateOne}</p>
                  <p><b>Bitiş Yılı</b> : {this.state.EFinishDateOne}</p>
                </Col>
              </Row>
              <hr></hr>
              <p>Eğitim Bilgileri II</p>
              <Row>
                <Col>
                  <p><b>Eğitim Durumu</b> : {this.state.EstatusTwo}</p>
                  <p><b>Okul Adı</b> : {this.state.EschoolTwo}</p>
                  <p><b>Bölümü</b> : {this.state.EdepartmentTwo}</p>
                </Col>
                <Col>
                  <p><b>Başlangıç Yılı</b> : {this.state.EstartDateTwo}</p>
                  <p><b>Bitiş Yılı</b> : {this.state.EFinishDateTwo}</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col>
              <h2 style={{ color: "teal" }}>Kişi Hakkındaki Yorumlar</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table celled id="table-to-xls" style={{ marginTop: '2rem' }}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Tarih</Table.HeaderCell>
                    <Table.HeaderCell>Yorum Sahibi</Table.HeaderCell>
                    <Table.HeaderCell>Yorumu</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body> {commentDataTable}</Table.Body>
              </Table>

            </Col>
          </Row>
          <Form onSubmit={e => this.HandleCommentAdd(e)} style={{ marginTop: '2rem' }}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Görüş bildirin</Form.Label>
              <Form.Control as="textarea" rows={3}
                value={this.state.comment}
                onChange={(e) => { this.setState({ comment: e.target.value }) }}
                placeholder='Görüşünüzü İletin...'
                style={{ minHeight: 100 }}
              />
            </Form.Group>
            <Button positive variant="primary" type="submit" value="send">Gönder</Button>
          </Form>
          <Row>
            <Col>
              <Table celled id="table-to-xls" style={{ marginTop: '2rem' }}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Tarih</Table.HeaderCell>
                    <Table.HeaderCell>İşlem</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body> {LogData}</Table.Body>
              </Table>

            </Col>
          </Row>

        </Container>

      </div>

    )
  }
}

export { EmployeeResultIndex }