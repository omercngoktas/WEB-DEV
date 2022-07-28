import React, { Component } from 'react';
import { Button, Form, Input, TextArea, Message, Select, Segment, Container, Checkbox } from 'semantic-ui-react';
import { Jumbotron, Col, Row, Modal } from 'react-bootstrap';
import agent from '../../../axios/agent';
import { Cinsiyet, MedeniDurum, AskelikDurumu, Durum, Days, Months, Years, Status, Value, EgitimDurumu } from '../constantArrays';
import emailjs from 'emailjs-com';


class BasvuruFormu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            topic: '',
            link: '',
            onFormGoing: true,
            role: '',
            date: new Date(),
            sendActivity: true,
            martialStatus: '',
            estatusOneStatus: '',
            schoolNameOneStatus: '',
            departmentNameOneStatus: '',
            estartDateOneStatus: '',
            esFinishDateOneStatus: '',
            birthdayStatus: '',
            birthmounthStatus: '',
            birthyearStatus: '',
            militaryServeStatus: '',
            shiftOneStatus: '',
            daysOfWeekStatus: '',
            OvertimeStatus: '',
            HealthProblemStatus: '',
            PhisicaldStatus: '',
            FamilarWorkerStatus: '',
            WantedSalaryStatus: '',
            JstarTimeStatus: '',
            basVurPozStatus: '',
            errorArrayList: [],
            data: [],
            checkSent: false,
            isOpen: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCheck = this.handleCheck.bind(this);
    }

    componentDidMount() {
        agent.HrPozitions.list()
            .then(response => {
                this.setState({
                    data: response.data,
                })
            })
    }
    handleSubmit(e) {
        e.preventDefault()
        const { basVurPoz, nameSurname, phoneNumber, ePosta, addres, gender, martial, militaryServe,
            birthday, birthmounth, birthyear, estatusOne, schoolNameOne, departmentNameOne,
            estartDateOne, esFinishDateOne, estatusTwo, schoolNameTwo, departmentNameTwo,
            estartDateTwo, esFinishDateTwo, companyOne, positionOne, jStartMounthOne, jStartYearOne,
            jFinishMounthOne, jFinishYearOne, positionDetailOne, companyTwo, positionTwo, jStartMounthTwo,
            jStartYearTwo, jFinishMounthTwo, jFinishYearTwo, positionDetailTwo, companyThree, jStartMounthThree,
            positionThree, jStartYearThree, jFinishMounthThree, jFinishYearThree, positionDetailThree,
            companyFour, positionFour, jStartMounthFour, jStartYearFour, jFinishMounthFour, jFinishYearFour,
            positionDetailFour, companyFive, positionFive, jStartMounthFive, jStartYearFive, jFinishMounthFive,
            jFinishYearFive, positionDetailFive, overTime, daysOfWeek, shiftOne, healthProblem, phisicald, familarW,
            wantedSalary, jStartTime, date, checkSent, someinfo
        } = this.state
        if (!(basVurPoz) || !(schoolNameOne) || !(departmentNameOne) || !(estartDateOne) || !(esFinishDateOne)
            || !(birthday) || !(birthmounth) || !(birthyear) || !(shiftOne) || !(daysOfWeek) || !(overTime) || !(healthProblem)
            || !(phisicald) || !(familarW) || !(wantedSalary) || !(jStartTime) || !(militaryServe)) {
            this.setState({
                sendActivity: false,
            })
            if (!basVurPoz) {
                this.setState({
                    basVurPozStatus: "Başvurduğunuz Pozisyon Kısmı Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.basVurPozStatus)
            } else {
                this.state.errorArrayList.splice(1)
            }
            if (!schoolNameOne) {
                this.setState({
                    schoolNameOneStatus: "Okul Adı Kısmı Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.schoolNameOneStatus)
            } else {
                this.state.errorArrayList.splice(2)
            }
            if (!departmentNameOne) {
                this.setState({
                    departmentNameOneStatus: "Bölüm Adı Kısmı Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.departmentNameOneStatus)
            } else {
                this.state.errorArrayList.splice(3)
            }
            if (!estartDateOne) {
                this.setState({
                    estartDateOneStatus: "Eğitim Durumu Başlama Tarihi Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.estartDateOneStatus)
            } else {
                this.state.errorArrayList.splice(4)
            }
            if (!esFinishDateOne) {
                this.setState({
                    esFinishDateOneStatus: "Eğitim Durumu Bitiş Tarihi Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.esFinishDateOneStatus)
            } else {
                this.state.errorArrayList.splice(5)
            } if (!birthday) {
                this.setState({
                    birthdayStatus: "Doğum Günü Gün Seçeneği Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.birthdayStatus)
            } else {
                this.state.errorArrayList.splice(6)
            } if (!birthmounth) {
                this.setState({
                    birthmounthStatus: "Doğum Günü Ay Seçeneği Tarihi Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.birthmounthStatus)
            } else {
                this.state.errorArrayList.splice(7)
            } if (!birthyear) {
                this.setState({
                    birthyearStatus: "Doğum Günü Yıl Seçeneği Tarihi Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.birthyearStatus)
            } else {
                this.state.errorArrayList.splice(8)
            } if (!shiftOne) {
                this.setState({
                    shiftOneStatus: "Vardiyalı çalışabilir misiniz? Seçeneği Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.shiftOneStatus)
            } else {
                this.state.errorArrayList.splice(9)
            } if (!daysOfWeek) {
                this.setState({
                    daysOfWeekStatus: "Haftanın 6 günü çalışabilir misiniz? Seçeneği Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.daysOfWeekStatus)
            } else {
                this.state.errorArrayList.splice(10)
            } if (!overTime) {
                this.setState({
                    OvertimeStatus: "Fazla mesai yapabilir misiniz? Seçeneği Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.OvertimeStatus)
            } else {
                this.state.errorArrayList.splice(11)
            } if (!healthProblem) {
                this.setState({
                    HealthProblemStatus: "Sağlık sorununuz veya kronik bir rahatsızlığınız var mı? Seçeneği Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.HealthProblemStatus)
            } else {
                this.state.errorArrayList.splice(12)
            } if (!phisicald) {
                this.setState({
                    PhisicaldStatus: "Bedensel engeliniz var mı? Seçeneği Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.PhisicaldStatus)
            } else {
                this.state.errorArrayList.splice(13)
            } if (!familarW) {
                this.setState({
                    FamilarWorkerStatus: "Şirketimizde çalışan tanıdığınız var mı? Seçeneği Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.FamilarWorkerStatus)
            } else {
                this.state.errorArrayList.splice(14)
            } if (!wantedSalary) {
                this.setState({
                    WantedSalaryStatus: "Ücret Beklentiniz Seçeneği Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.WantedSalaryStatus)
            } else {
                this.state.errorArrayList.splice(15)
            } if (!jStartTime) {
                this.setState({
                    JstarTimeStatus: "İşe Başlayabileceğiniz Tarih Seçeneği Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.JstarTimeStatus)
            } else {
                this.state.errorArrayList.splice(16)
            }
            if (!militaryServe) {
                this.setState({
                    militaryServeStatus: "Askerlik Durumu Seçeneği Boş Bırakılamaz",
                })
                this.state.errorArrayList.push(this.state.militaryServeStatus)
            } else {
                this.state.errorArrayList.splice(17)
            }
            console.log(this.state.errorArrayList)

        } else {
            this.setState({
                sendActivity: true,
            })
            let form = {
                CreationDate: date,
                PozitionFor: basVurPoz,
                NameSurname: nameSurname,
                TelNo: phoneNumber,
                Epost: ePosta,
                Address: addres,
                Gender: gender,
                MartialStatus: martial,
                MilitaryServe: militaryServe,
                Birthday: birthday,
                BirthMounth: birthmounth,
                BirthYear: birthyear,
                EstatusOne: estatusOne,
                EschoolOne: schoolNameOne,
                EdepartmentOne: departmentNameOne,
                EstartDateOne: estartDateOne,
                EFinishDateOne: esFinishDateOne,
                EstatusTwo: estatusTwo,
                EschoolTwo: schoolNameTwo,
                EdepartmentTwo: departmentNameTwo,
                EstartDateTwo: estartDateTwo,
                EFinishDateTwo: esFinishDateTwo,
                CompanyNameOne: companyOne,
                PositionOne: positionOne,
                PstartMounthOne: jStartMounthOne,
                PstartYearOne: jStartYearOne,
                PFinishMounthOne: jFinishMounthOne,
                PFinishYearOne: jFinishYearOne,
                PositonDetailOne: positionDetailOne,
                CompanyNameTwo: companyTwo,
                PositionTwo: positionTwo,
                PstartMounthTwo: jStartMounthTwo,
                PstartYearTwo: jStartYearTwo,
                PFinishMounthTwo: jFinishMounthTwo,
                PFinishYearTwo: jFinishYearTwo,
                PositonDetailTwo: positionDetailTwo,
                CompanyNameThree: companyThree,
                PositionThree: positionThree,
                PstartMounthThree: jStartMounthThree,
                PstartYearThree: jStartYearThree,
                PFinishMounthThree: jFinishMounthThree,
                PFinishYearThree: jFinishYearThree,
                PositonDetailThree: positionDetailThree,
                CompanyNameFour: companyFour,
                positionFour: positionFour,
                PstartMounthFour: jStartMounthFour,
                PstartYearFour: jStartYearFour,
                PFinishMounthFour: jFinishMounthFour,
                PFinishYearFour: jFinishYearFour,
                PositonDetailFour: positionDetailFour,
                CompanyNameFive: companyFive,
                PositionFive: positionFive,
                PstartMounthFive: jStartMounthFive,
                PstartYearFive: jStartYearFive,
                PFinishMounthFive: jFinishMounthFive,
                PFinishYearFive: jFinishYearFive,
                PositonDetailFive: positionDetailFive,
                Shift: shiftOne,
                DaysofWeekShift: daysOfWeek,
                Overtime: overTime,
                HealthProblem: healthProblem,
                Phisicald: phisicald,
                FamilarWorker: familarW,
                WantedSalary: wantedSalary,
                JstarTime: jStartTime,
                AddingSomeInfo: someinfo,
                KvkkConfirm: checkSent,
            }


            let templateParams = {
                Request_Pozition: basVurPoz,
                Name_Surname: nameSurname,
                Tel_No: phoneNumber,
            }
            emailjs.send(
                'gmail_service',
                'template_gjBh8dYZ',
                templateParams,
                'user_sYzG1ti0KxwG2LJiHJmYg'
            )

            agent.HRApplication.create(form)
                .then(response => {
                    console.log(response)
                    if (response.status === 200)
                        this.resetForm()
                })
        }
    }
    handleCheck() {
        if (this.state.checkSent === true)
            this.setState({
                checkSent: false,
            });
        if (this.state.checkSent === false) {
            this.setState({
                checkSent: true,
            });
        }
        console.log(this.state.checkSent);
    }
    resetForm() {
        this.setState({
            Request_Pozition: '',
            Name_Surname: '',
            Tel_No: '',
            onFormGoing: false,
        })
    }
    handleChange = (param, e) => {
        this.setState({
            [param]: e.target.value,
        })
        //    console.log(param);
    }
    handleSelectChange = (value, e) => this.setState({ [value]: e.target.textContent })

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() {
        const { onFormGoing, sendActivity, data, checkSent } = this.state
        const BasPozisyon = data.filter(response => response.opened === '1').map((item) => { return <option key={item.id} value={item.pozition}>{item.pozition}</option> })
        return (

            <Segment>
                <Jumbotron >
                    <Container>
                        <h1>İş Başvurusu Formu</h1>
                        <p>
                            Bu formda vereceğiniz bilgiler sizinle çalışabilmemiz için ilk adımı oluşturacaktır.
                            Bizimle çalışmaya başladığınız durumda verdiğiniz bilgiler dosyanızda kalıcı olacaktır.
                            Lütfen eksiksiz bir şekilde doldurunuz
                </p>
                    </Container>
                </Jumbotron>
                <Container>
                    {
                        onFormGoing ?
                            <Form style={{ marginTop: '1rem' }}
                                onSubmit={this.handleSubmit.bind(this)}>
                                <Col>
                                    <Form.Field required>
                                        <label className="text-muted">Başvurulan Pozisyon</label>
                                        {/* <select  class="ui dropdown"
                        placeholder='Lütfen Başvurmak İstediğiniz Pozisyonu Seçin' 
                        name="basVurPoz"
                        value={this.state.basVurPoz || ''}
                        onChange={this.handleSelectChange.bind(this, 'basVurPoz')}
                        options={BasPozisyon} >{BasPozisyon}</select> */}
                                        <select value={this.state.basVurPoz} onChange={(event) => this.setState({ basVurPoz: event.target.value })}>
                                            <option value="">Başvurmak istediğiniz pozisyonu seçin</option>
                                            {BasPozisyon}
                                        </select>
                                    </Form.Field>
                                </Col>
                                <h3>1 - Kişisel Bilgiler</h3>
                                <Row>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">İsim Soyisim</label>
                                            <Input
                                                type="text"
                                                name="nameSurname"
                                                value={this.state.nameSurname || ''}
                                                onChange={this.handleChange.bind(this, 'nameSurname')}
                                                placeholder="İsim Soyisim Giriniz.."

                                            />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Cep Telefonu Numarası</label>
                                            <Input
                                                type="text"
                                                name="phoneNumber"
                                                value={this.state.phoneNumber || ''}
                                                onChange={this.handleChange.bind(this, 'phoneNumber')}
                                                placeholder="Cep Telefonu Giriniz.. "
                                                maxLength="11"
                                                minLength="11"

                                            />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">E-posta Adresi</label>
                                            <Input
                                                type="email"
                                                name="ePosta"
                                                value={this.state.ePosta || ''}
                                                onChange={this.handleChange.bind(this, 'ePosta')}
                                                placeholder="E-posta Adresinizi Girin"
                                            />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Cinsiyet</label>
                                            <Select class="ui dropdown"
                                                placeholder='Cinsiyet Seçiniz'
                                                name="gender"
                                                value={this.state.gender || ''}
                                                onChange={this.handleSelectChange.bind(this, 'gender')}
                                                options={Cinsiyet}
                                            />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Medeni Durum</label>
                                            <Select placeholder='Medeni Durumunuz'
                                                name="martial"
                                                value={this.state.martial || ''}
                                                onChange={this.handleSelectChange.bind(this, 'martial')} options={MedeniDurum} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Askerlik Durumu</label>
                                            <Select placeholder='Askerlik Durumunuzu Seçin'
                                                name="militaryServe"
                                                value={this.state.militaryServe || ''}
                                                onChange={this.handleSelectChange.bind(this, 'militaryServe')}
                                                options={AskelikDurumu} />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>

                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Doğum Tarihi / Gün</label>
                                            <Select placeholder='Lütfen Doğum Gününüzü Seçin'
                                                name="birthday"
                                                value={this.state.birthday || ''}
                                                onChange={this.handleSelectChange.bind(this, 'birthday')}
                                                options={Days} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Doğum Tarihi / Ay</label>
                                            <Select placeholder='Lütfen Doğum Ayınızı Seçin'
                                                name="birthmounth"
                                                value={this.state.birthmounth || ''}
                                                onChange={this.handleSelectChange.bind(this, 'birthmounth')}
                                                options={Months} />
                                        </Form.Field>

                                    </Col>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Doğum Tarihi / Yıl</label>
                                            <Select placeholder='Lütfen Doğum Yılınızı Seçin'
                                                name="birthyear"
                                                value={this.state.birthyear || ''}
                                                onChange={this.handleSelectChange.bind(this, 'birthyear')}
                                                options={Years} />
                                        </Form.Field>


                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">İkametgah Adresi</label>
                                            <TextArea
                                                name="addres"
                                                className="text-primary"
                                                value={this.state.addres || ''}
                                                onChange={this.handleChange.bind(this, 'addres')}
                                                placeholder="Lütfen İkametgah Adresini Giriniz"

                                            />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <h3>2 - Eğitim Bilgileri</h3>
                                <h4>En Son Mezun Olduğunuz Eğitim Seviyesi</h4>
                                <p>*Lütfen Eğitim seviyenizi sondan başa doğru sıralayınız </p>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Eğitim Durumu</label>
                                            <Select placeholder='Eğitim Durumu'
                                                name="estatusOne"
                                                value={this.state.estatusOne || ''}
                                                onChange={this.handleSelectChange.bind(this, 'estatusOne')}
                                                options={EgitimDurumu} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Okul Adı</label>
                                            <Input
                                                type="text"
                                                name="schoolNameOne"
                                                value={this.state.schoolNameOne || ''}
                                                onChange={this.handleChange.bind(this, 'schoolNameOne')}
                                                placeholder="Mezun Olduğunuz Okul Adını Yazınız"
                                                required

                                            />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Bölümü</label>
                                            <Input
                                                type="text"
                                                name="departmentNameOne"
                                                value={this.state.departmentNameOne || ''}
                                                onChange={this.handleChange.bind(this, 'departmentNameOne')}
                                                placeholder="Mezun Olduğunuz Bölümü Yazın"
                                                required
                                            />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Başlangıç Tarihi</label>
                                            <Select placeholder='Başlangıç Tarihi Seçin'
                                                name="estartDateOne"
                                                value={this.state.estartDateOne || ''}
                                                onChange={this.handleSelectChange.bind(this, 'estartDateOne')}
                                                options={Years} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Bitiş Tarihi</label>
                                            <Select placeholder='Bitiş Tarihi Seçin'
                                                name="esFinishDateOne"
                                                value={this.state.esFinishDateOne || ''}
                                                onChange={this.handleSelectChange.bind(this, 'esFinishDateOne')}
                                                options={Years} />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Eğitim Durumu</label>
                                            <Select placeholder='Eğitim Durumu'
                                                name="estatusTwo"
                                                value={this.state.estatusTwo || ''}
                                                onChange={this.handleSelectChange.bind(this, 'estatusTwo')}
                                                options={EgitimDurumu} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Okul Adı</label>
                                            <Input
                                                type="text"
                                                name="schoolNameTwo"
                                                value={this.state.schoolNameTwo || ''}
                                                onChange={this.handleChange.bind(this, 'schoolNameTwo')}
                                                placeholder="Mezun Olduğunuz Okul Adını Yazınız"

                                            />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Bölümü</label>
                                            <Input
                                                type="text"
                                                name="departmentNameTwo"
                                                value={this.state.departmentNameTwo || ''}
                                                onChange={this.handleChange.bind(this, 'departmentNameTwo')}
                                                placeholder="Mezun Olduğunuz Bölümü Yazın"

                                            />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Başlangıç Tarihi</label>
                                            <Select placeholder='Başlangıç Tarihi Seçin'
                                                name="estartDateTwo"
                                                value={this.state.estartDateTwo || ''}
                                                onChange={this.handleSelectChange.bind(this, 'estartDateTwo')}
                                                options={Years} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Bitiş Tarihi</label>
                                            <Select placeholder='Bitiş Tarihi Seçin'
                                                name="esFinishDateTwo"
                                                value={this.state.esFinishDateTwo || ''}
                                                onChange={this.handleSelectChange.bind(this, 'esFinishDateTwo')}
                                                options={Years} />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <h3>3 - İş Deneyimi</h3>
                                <p>*Lütfen deneyimlerinizi sondan başa doğru sıralayınız </p>
                                <h4>İş Deneyimi I</h4>

                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Şirket Unvanı</label>
                                            <Input
                                                type="text"
                                                name="companyOne"
                                                value={this.state.companyOne || ''}
                                                onChange={this.handleChange.bind(this, 'companyOne')}
                                                placeholder="Lütfen Şirket isminizi yazınız"

                                            />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Pozisyon</label>
                                            <Input
                                                type="text"
                                                name="positionOne"
                                                value={this.state.positionOne || ''}
                                                onChange={this.handleChange.bind(this, 'positionOne')}
                                                placeholder="Lütfen Görev Aldığınız Pozisyonu Yazın"
                                            />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Başlangıç Tarihi / Ay</label>
                                            <Select placeholder=' Başlangıç Tarihi Seçin'
                                                name="jStartMounthOne"
                                                value={this.state.jStartMounthOne || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jStartMounthOne')}
                                                options={Months} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Başlangıç Tarihi / Yıl</label>
                                            <Select placeholder=' Başlangıç Tarihi Seçin'
                                                name="jStartYearOne"
                                                value={this.state.jStartYearOne || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jStartYearOne')}
                                                options={Years} />
                                        </Form.Field>
                                    </Col>

                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Bitiş Tarihi / Ay</label>
                                            <Select placeholder=' Bitiş Tarihi Seçin'
                                                name="jFinishMounthOne"
                                                value={this.state.jFinishMounthOne || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jFinishMounthOne')}
                                                options={Months} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Bitiş Tarihi / Yıl</label>
                                            <Select placeholder=' Başlangıç Tarihi Seçin'
                                                name="jFinishYearOne"
                                                value={this.state.jFinishYearOne || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jFinishYearOne')}
                                                options={Years} />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>

                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Görev Aldığınız Pozisyonu Açıklayın</label>
                                            <TextArea
                                                name="positionDetailOne"
                                                className="text-primary"
                                                value={this.state.positionDetailOne || ''}
                                                onChange={this.handleChange.bind(this, 'positionDetailOne')}
                                                placeholder="Örnek: idari işler sorumlusuydum, bina bakım onarımı tekliflerini üzerine çalıştım"

                                            />
                                        </Form.Field>

                                    </Col>
                                </Row>

                                <h4>İş Deneyimi II</h4>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Şirket Ünvanı</label>
                                            <Input
                                                type="text"
                                                name="companyTwo"
                                                value={this.state.companyTwo || ''}
                                                onChange={this.handleChange.bind(this, 'companyTwo')}
                                                placeholder="Lütfen Şirket isminizi yazınız"

                                            />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Pozisyon</label>
                                            <Input
                                                type="text"
                                                name="positionTwo"
                                                value={this.state.positionTwo || ''}
                                                onChange={this.handleChange.bind(this, 'positionTwo')}
                                                placeholder="Lütfen Görev Aldığınız Pozisyonu Yazın"

                                            />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Başlangıç Tarihi / Ay</label>
                                            <Select placeholder=' Başlangıç Tarihi Seçin'
                                                name="jStartMounthTwo"
                                                value={this.state.jStartMounthTwo || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jStartMounthTwo')}
                                                options={Months} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Başlangıç Tarihi / Yıl</label>
                                            <Select placeholder=' Başlangıç Tarihi Seçin'
                                                name="jStartYearTwo"
                                                value={this.state.jStartYearTwo || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jStartYearTwo')}
                                                options={Years} />
                                        </Form.Field>
                                    </Col>

                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Bitiş Tarihi / Ay</label>
                                            <Select placeholder=' Başlangıç Tarihi Seçin'
                                                name="jFinishMounthTwo"
                                                value={this.state.jFinishMounthTwo || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jFinishMounthTwo')}
                                                options={Months} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Bitiş Tarihi / Yıl</label>
                                            <Select placeholder=' Başlangıç Tarihi Seçin'
                                                name="jFinishYearTwo"
                                                value={this.state.jFinishYearTwo || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jFinishYearTwo')}
                                                options={Years} />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>

                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Görev Aldığınız Pozisyonu Açıklayın</label>
                                            <TextArea
                                                name="positionDetailTwo"
                                                className="text-primary"
                                                value={this.state.positionDetailTwo || ''}
                                                onChange={this.handleChange.bind(this, 'positionDetailTwo')}
                                                placeholder="Örnek: idari işler sorumlusuydum, bina bakım onarımı tekliflerini üzerine çalıştım"

                                            />
                                        </Form.Field>

                                    </Col>
                                </Row>
                                <h4>İş Deneyimi III</h4>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Şirket Ünvanı</label>
                                            <Input
                                                type="text"
                                                name="companyThree"
                                                value={this.state.companyThree || ''}
                                                onChange={this.handleChange.bind(this, 'companyThree')}
                                                placeholder="Lütfen Şirket isminizi yazınız"

                                            />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Pozisyon</label>
                                            <Input
                                                type="text"
                                                name="positionThree"
                                                value={this.state.positionThree || ''}
                                                onChange={this.handleChange.bind(this, 'positionThree')}
                                                placeholder="Lütfen Görev Aldığınız Pozisyonu Yazın"

                                            />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Başlangıç Tarihi / Ay</label>
                                            <Select
                                                placeholder=' Başlangıç Tarihi Seçin'
                                                name="jStartMounthThree"
                                                value={this.state.jStartMounthThree || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jStartMounthThree')}
                                                options={Months} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Başlangıç Tarihi / Yıl</label>
                                            <Select placeholder=' Başlangıç Tarihi Seçin'
                                                name="jStartYearThree"
                                                value={this.state.jStartYearThree || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jStartYearThree')}
                                                options={Years} />
                                        </Form.Field>
                                    </Col>

                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Bitiş Tarihi / Ay</label>
                                            <Select
                                                placeholder=' Bitiş Tarihi Seçin'
                                                name="jFinishMounthThree"
                                                value={this.state.jFinishMounthThree || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jFinishMounthThree')}
                                                options={Months} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Bitiş Tarihi / Yıl</label>
                                            <Select
                                                placeholder=' Başlangıç Tarihi Seçin'
                                                name="jFinishYearThree"
                                                value={this.state.jFinishYearThree || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jFinishYearThree')}
                                                options={Years} />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>

                                    <Col>
                                        <Form.Field>
                                            <label className="text-muted">Görev Aldığınız Pozisyonu Açıklayın</label>
                                            <TextArea
                                                name="positionDetailThree"
                                                className="text-primary"
                                                value={this.state.positionDetailThree || ''}
                                                onChange={this.handleChange.bind(this, 'positionDetailThree')}
                                                placeholder="Örnek: idari işler sorumlusuydum, bina bakım onarımı tekliflerini üzerine çalıştım"

                                            />
                                        </Form.Field>

                                    </Col>
                                </Row>
                                <h4>İş Deneyimi IV</h4>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Şirket Ünvanı</label>
                                            <Input
                                                type="text"
                                                name="companyFour"
                                                value={this.state.companyFour || ''}
                                                onChange={this.handleChange.bind(this, 'companyFour')}
                                                placeholder="Lütfen Şirket isminizi yazınız"

                                            />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Pozisyon</label>
                                            <Input
                                                type="text"
                                                name="positionFour"
                                                value={this.state.positionFour || ''}
                                                onChange={this.handleChange.bind(this, 'positionFour')}
                                                placeholder="Lütfen Görev Aldığınız Pozisyonu Yazın"

                                            />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Başlangıç Tarihi / Ay</label>
                                            <Select
                                                placeholder=' Başlangıç Tarihi Seçin'
                                                name="jStartMounthFour"
                                                value={this.state.jStartMounthFour || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jStartMounthFour')}
                                                options={Months} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Başlangıç Tarihi / Yıl</label>
                                            <Select
                                                placeholder=' Başlangıç Tarihi Seçin'
                                                name="jStartYearFour"
                                                value={this.state.jStartYearFour || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jStartYearFour')}
                                                options={Years} />
                                        </Form.Field>
                                    </Col>

                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Bitiş Tarihi / Ay</label>
                                            <Select placeholder=' Bitiş Tarihi Seçin'
                                                name="jFinishMounthFour"
                                                value={this.state.jFinishMounthFour || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jFinishMounthFour')}
                                                options={Months} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Bitiş Tarihi / Yıl</label>
                                            <Select
                                                placeholder=' Başlangıç Tarihi Seçin'
                                                name="jFinishYearFour"
                                                value={this.state.jFinishYearFour || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jFinishYearFour')}
                                                options={Years} />
                                        </Form.Field>
                                    </Col>

                                </Row>
                                <Row style={{ marginTop: '1rem' }}>

                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Görev Aldığınız Pozisyonu Açıklayın</label>
                                            <TextArea
                                                name="positionDetailFour"
                                                className="text-primary"
                                                value={this.state.positionDetailFour || ''}
                                                onChange={this.handleChange.bind(this, 'positionDetailFour')}
                                                placeholder="Örnek: idari işler sorumlusuydum, bina bakım onarımı tekliflerini üzerine çalıştım"

                                            />
                                        </Form.Field>

                                    </Col>
                                </Row>
                                <h4>İş Deneyimi V</h4>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Şirket Ünvanı</label>
                                            <Input
                                                type="text"
                                                name="companyFive"
                                                value={this.state.companyFive || ''}
                                                onChange={this.handleChange.bind(this, 'companyFive')}
                                                placeholder="Lütfen Şirket isminizi yazınız"

                                            />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Pozisyon</label>
                                            <Input
                                                type="text"
                                                name="positionFive"
                                                value={this.state.positionFive || ''}
                                                onChange={this.handleChange.bind(this, 'positionFive')}
                                                placeholder="Lütfen Görev Aldığınız Pozisyonu Yazın"

                                            />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Başlangıç Tarihi / Ay</label>
                                            <Select placeholder=' Başlangıç Tarihi Seçin'
                                                name="jStartMounthFive"
                                                value={this.state.jStartMounthFive || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jStartMounthFive')}
                                                options={Months} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Başlangıç Tarihi / Yıl</label>
                                            <Select placeholder=' Başlangıç Tarihi Seçin'
                                                name="jStartYearFive"
                                                value={this.state.jStartYearFive || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jStartYearFive')}
                                                options={Years} />
                                        </Form.Field>
                                    </Col>

                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Bitiş Tarihi / Ay</label>
                                            <Select
                                                placeholder=' Bitiş Tarihi Seçin'
                                                name="jFinishMounthFive"
                                                value={this.state.jFinishMounthFive || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jFinishMounthFive')}
                                                options={Months} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Bitiş Tarihi / Yıl</label>
                                            <Select
                                                placeholder=' Başlangıç Tarihi Seçin'
                                                name="jFinishYearFive"
                                                value={this.state.jFinishYearFive || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jFinishYearFive')}
                                                options={Years} />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>

                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Görev Aldığınız Pozisyonu Açıklayın</label>
                                            <TextArea
                                                name="positionDetailFive"
                                                className="text-primary"
                                                value={this.state.positionDetailFive || ''}
                                                onChange={this.handleChange.bind(this, 'positionDetailFive')}
                                                placeholder="Örnek: idari işler sorumlusuydum, bina bakım onarımı tekliflerini üzerine çalıştım"

                                            />
                                        </Form.Field>

                                    </Col>
                                </Row>
                                <h3>4 - Özel Bilgiler</h3>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Vardiyalı çalışabilir misiniz?</label>
                                            <Select
                                                placeholder='Evet/Hayır'
                                                name="shiftOne"
                                                value={this.state.shiftOne || ''}
                                                onChange={this.handleSelectChange.bind(this, 'shiftOne')}
                                                options={Durum} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Haftanın 6 günü çalışabilir misiniz?</label>
                                            <Select
                                                placeholder='Evet/Hayır'
                                                name="daysOfWeek"
                                                value={this.state.daysOfWeek || ''}
                                                onChange={this.handleSelectChange.bind(this, 'daysOfWeek')}
                                                options={Durum} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Fazla mesai yapabilir misiniz?</label>
                                            <Select
                                                placeholder='Evet/Hayır'
                                                name="overTime"
                                                value={this.state.overTime || ''}
                                                onChange={this.handleSelectChange.bind(this, 'overTime')}
                                                options={Durum} />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Sağlık sorununuz veya kronik bir rahatsızlığınız var mı?</label>
                                            <Select
                                                placeholder='Evet/Hayır'
                                                name="healthProblem"
                                                value={this.state.healthProblem || ''}
                                                onChange={this.handleSelectChange.bind(this, 'healthProblem')}
                                                options={Durum} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Bedensel engeliniz var mı?</label>
                                            <Select
                                                placeholder='Evet/Hayır'
                                                name="phisicald"
                                                value={this.state.phisicald || ''}
                                                onChange={this.handleSelectChange.bind(this, 'phisicald')}
                                                options={Durum} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Şirketimizde çalışan tanıdığınız var mı?</label>
                                            <Select
                                                placeholder='Evet/Hayır'
                                                name="familarW"
                                                value={this.state.familarW || ''}
                                                onChange={this.handleSelectChange.bind(this, 'familarW')}
                                                options={Durum} />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">Ücret Beklentisi (Net) </label>
                                            <Select
                                                placeholder='Lütfen Ücret Beklentinizi Belirtin'
                                                name="wantedSalary"
                                                value={this.state.wantedSalary || ''}
                                                onChange={this.handleSelectChange.bind(this, 'wantedSalary')}
                                                options={Value} />
                                        </Form.Field>
                                    </Col>
                                    <Col>
                                        <Form.Field required>
                                            <label className="text-muted">İşe Başlayabileceğiniz Tarih</label>
                                            <Select
                                                placeholder='İşe Başlayabileceğiniz Tarih'
                                                name="jStartTime"
                                                value={this.state.jStartTime || ''}
                                                onChange={this.handleSelectChange.bind(this, 'jStartTime')}
                                                options={Status} />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: '1rem' }}>
                                    <Col>
                                        <Form.Field >
                                            <label className="text-muted">Eklemek istediğiniz herhangi bir bilgi mevcut mudur? (sertifika bilgisi, kurs, eğitim, seminer vs )</label>
                                            <TextArea
                                                name="someinfo"
                                                className="text-primary"
                                                value={this.state.someinfo}
                                                onChange={this.handleChange.bind(this, 'someinfo')}
                                                placeholder="Ek olarak eklemek istediğiniz bilgi varsa yazabilirsiniz..."
                                            />
                                        </Form.Field>
                                    </Col>
                                </Row>
                                <br></br>
                                <><Checkbox style={{ marginTop: '1rem' }} onClick={this.handleCheck} label="KVKK Metnini Okudum Anladım, Kabul Ediyorum" /></>   <Button onClick={this.openModal}>KVKK METNiNİ GÖRMEK İÇİN TIKLAYIN</Button>
                                <Modal size="md" show={this.state.isOpen} onHide={this.closeModal} aria-labelledby="example-modal-sizes-title-xl">
                                    <Modal.Header closeButton>
                                        <Modal.Title>Kişisel Verilerin Korunması Kanunu</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form onSubmit={event => this.createPozitionHandler(event)}>
                                            <Container>
                                                <p>
                                                    İş talebinde bulunan kişi, 07.04.2016 tarihli 29677 sayılı Resmi Gazete’ de yayımlanan 6698 sayılı Kişisel Verilerin Korunması Kanunu ile diğer ilgili mevzuat kapsamında; işveren ile işe başvuru süreci kapsamında bu formla birlikte paylaşmış olduğu kişisel verilerini (isim, soy isim, cep telefon numaraları, doğum tarihi, adres bilgileri, cinsiyet vb.) ile özel nitelikli kişisel verilerini (sendika/dernek/vakıf üyeliklerine ilişkin bilgiler, ceza mahkûmiyeti, güvenlik tedbirleriyle ilgili veriler vb.) işveren  tarafından Kanun’a uygun şekilde saklanmasına, kaydedilmesine, güncellenmesine, sınıflandırılmasına ve Kanun’da sayılan şekillerde işlenebilmesine izin verdiğini kabul, beyan ve taahhüt etmiştir.
                            </p>
                                            </Container>
                                        </Form>
                                    </Modal.Body>
                                </Modal>
                                <br></br>
                                <hr></hr>
                                {
                                    checkSent ?
                                        <div>
                                            <Button positive variant="primary" type="submit" value="send">
                                                Gönder
                        </Button>
                                        </div> :
                                        <div>
                                            <Button positive variant="primary" disabled type="submit" value="send">
                                                Gönder
                        </Button>
                                        </div>
                                }
                            </Form>

                            : <><Message
                                success
                                header='Başvurunuz Başarıyla Alındı'
                                content='Başvurunuz İnsan Kaynakları Departmanımıza iletilmiştir. Sağlıklı Günler Dileriz.'
                            /></>
                    }
                    {
                        sendActivity ?
                            <div>
                            </div>
                            :
                            <>
                                <Message
                                    error
                                    header='Bazı eksiklikler var lütfen doldurunuz'
                                    list={[this.state.errorArrayList[0], this.state.errorArrayList[1], this.state.errorArrayList[2], this.state.errorArrayList[3], this.state.errorArrayList[4], this.state.errorArrayList[5],
                                    this.state.errorArrayList[6], this.state.errorArrayList[7], this.state.errorArrayList[8], this.state.errorArrayList[9], this.state.errorArrayList[10], this.state.errorArrayList[11],
                                    this.state.errorArrayList[12], this.state.errorArrayList[13], this.state.errorArrayList[14], this.state.errorArrayList[15], this.state.errorArrayList[16], this.state.errorArrayList[17]]}
                                ></Message>
                            </>

                    }
                </Container>

            </Segment>

        )
    }
}

export { BasvuruFormu }
