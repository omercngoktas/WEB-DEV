import React, { Component } from 'react';
import agent from '../../../axios/agent';
import { Segment, Checkbox, } from 'semantic-ui-react';
import { Form, Button, Container, Col, Modal, Row } from 'react-bootstrap';
import SuccessLogo from './tick.png';
import FalseLogo from './false.png';
import emailjs from 'emailjs-com';


class ComplaintsFormTR extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameSurname: null,
            phoneNumber: null,
            companyName: null,
            email: null,
            subject: null,
            description: null,
            date: new Date(),
            onFormGoing: true,
            formCanceled: false,
            isOpen: false,
            isOpen1: false,
            isSelectedDepartment: false,
            status: null,
        }
        this.createComplaintsHandler = this.createComplaintsHandler.bind(this)
    }

    createComplaintsHandler(event) {

        event.preventDefault();
        const { nameSurname, phoneNumber, companyName, email, subject, description, date, status } = this.state;

        let newForm = {
            nameSurname: nameSurname,
            phoneNumber: phoneNumber,
            companyName: companyName,
            email: email,
            subject: subject,
            description: description,
            date: date,
            Department: status,
        }
        let templateParams = {
            user_email: email,
            user_subject: subject,
            message: '<hr></hr> Ad Soyad : ' + nameSurname + '<hr></hr>' + 'Telefon: ' + phoneNumber + '<hr></hr>' + 'Şirket: ' + companyName + '<hr></hr>' + 'Mesaj: ' + description,
        }

        if (status === "T") {
            emailjs.send(
                'gmail_service',
                'template_h9kkxvm',
                templateParams,
                'user_sYzG1ti0KxwG2LJiHJmYg'
            )
        }
        if (status === "KG") {
            emailjs.send(
                'gmail_service',
                'template_zw6xrm4',
                templateParams,
                'user_sOKqCxFMmdQ8JfRVrXVcl'
            )
        }
        if (status === "ISG") {
            emailjs.send(
                'gmail_service',
                'template_thdjj0f',
                templateParams,
                'user_sOKqCxFMmdQ8JfRVrXVcl'
            )
        }
        if(status === "KRM")
        {
            emailjs.send(
                'service_d1crp93',
                'template_e2ddv8l',
                templateParams,
                'user_2hkfkWS8PblJqszGjiCuu'
            )
        }
        if (status === "IRF") {
            emailjs.send(
                'service_d1crp93',
                'template_2n2fpnj',
                templateParams,
                'user_2hkfkWS8PblJqszGjiCuu'
            )
        }

        
        agent.ComplaintsForm.create(newForm)
            .then(response => {
                if (response.status === 200)
                    this.setState({
                        onFormGoing: false
                    })
                else this.setState({
                    formCanceled: true
                })
            })
    }
    handleChange = (e, { value }) => {
        this.setState({ value })
        if (value === "T") {
            this.setState({
                status: "T",
                isSelectedDepartment: true,
            })
        }
        if (value === "KGD") {
            this.setState({
                status: "KG",
                isSelectedDepartment: true,
            })
        }
        if (value === "ISG") {
            this.setState({
                status: "ISG",
                isSelectedDepartment: true,
            })
        }
        if(value === "KRM"){
            console.log("KRM secildi");
            this.setState({
                status : "KRM",
                isSelectedDepartment: true,
            })
        }
        if (value === "IRF") {
            console.log("IRF secildi");
            this.setState({
                status: "IRF",
                isSelectedDepartment: true,
            })
        }
        

    }
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    openModal1 = () => this.setState({ isOpen1: true });
    closeModal1 = () => this.setState({ isOpen1: false });

    render() {
        const { formCanceled, onFormGoing, isSelectedDepartment } = this.state
        return (
            <Segment style={{ marginTop: '25px' }}>
                <h2 style={{
                    textAlign: 'center',
                    padding: '10px'
                }}>Paydaş İletişim Formu</h2>
                <h4 style={{ textAlign: 'center', padding: '10px' }}>Müşteri şikayetleri, çevre, iş sağlığı güvenliği, iş geliştirme ve satış konularındaki bildirimlerinizi iletmek için lütfen ilgili departmanı seçiniz</h4>

                <Container>
                    <Row>
                        <Form>
                            <Form.Group>
                                <Checkbox
                                    style={{ margin: '0.6rem' }}
                                    radio
                                    label='İş Geliştirme ve Satiş Departmanı'
                                    name='checkboxRadioGroup'
                                    value='T'
                                    checked={this.state.value === 'T'}
                                    onChange={this.handleChange}
                                />

                                <Checkbox
                                    style={{ margin: '0.6rem' }}
                                    radio
                                    label='Kalite Güvence Departmanı'
                                    name='checkboxRadioGroup'
                                    value='KGD'
                                    checked={this.state.value === 'KGD'}
                                    onChange={this.handleChange}
                                />

                                <Checkbox
                                    style={{ margin: '0.6rem' }}
                                    radio
                                    label='İş Sağlığı ve Güvenliği Departmanı'
                                    name='checkboxRadioGroup'
                                    value='ISG'
                                    checked={this.state.value === 'ISG'}
                                    onChange={this.handleChange}
                                />
                                <Checkbox
                                    style={{ margin: '0.6rem' }}
                                    radio
                                    label='Sürdürülebilirlik'
                                    name='checkboxRadioGroup'
                                    value='KRM' // Kurumsal İlişkiler
                                    checked={this.state.value === 'KRM'}
                                    onChange={this.handleChange}
                                />
                                 <Checkbox
                                    style={{ margin: '0.6rem' }}
                                    radio
                                    label='Bilgi Talep Etme Formu'
                                    name='checkboxRadioGroup'
                                    value='IRF' // Kurumsal İlişkiler
                                    checked={this.state.value === 'IRF'}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </Row>
                </Container>
                {isSelectedDepartment ? <div>
                    {onFormGoing ?
                        <Container>
                            <Segment>
                                <Form onSubmit={event => this.createComplaintsHandler(event)}>
                                    <Form.Group>
                                        <Form.Row style={{ marginTop: '25px' }} >
                                            <Col>
                                                <Form.Label>Ad Soyad</Form.Label>
                                                <Form.Control controlId="formBasicSubject"
                                                    placeholder="Ad Soyad"
                                                    value={this.state.nameSurname}
                                                    onChange={(event) => { this.setState({ nameSurname: event.target.value }) }}
                                                    required />
                                                <Form.Text className="text-muted"></Form.Text>
                                            </Col>
                                            <Col>
                                                <Form.Label>Telefon Numarası</Form.Label>
                                                <Form.Control controlId="formBasicSubject"
                                                    placeholder="Telefon Numarası"
                                                    value={this.state.phoneNumber}
                                                    onChange={(event) => { this.setState({ phoneNumber: event.target.value }) }}
                                                    maxlength={11}
                                                    required />
                                                <Form.Text className="text-muted"></Form.Text>
                                            </Col>
                                        </Form.Row>

                                        <Form.Row style={{ marginTop: '10px' }}>
                                            <Col>
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control controlId="formBasicSubject"
                                                    placeholder="Email"
                                                    value={this.state.email}
                                                    onChange={(event) => { this.setState({ email: event.target.value }) }}
                                                    required />
                                            </Col>
                                            <Col>
                                                <Form.Label>Şirket</Form.Label>
                                                <Form.Control controlId="formBasicSubject"
                                                    placeholder="Şirket İsmi"
                                                    value={this.state.companyName}
                                                    onChange={(event) => { this.setState({ companyName: event.target.value }) }}
                                                    required />
                                            </Col>
                                        </Form.Row>

                                        <Form.Row style={{ marginTop: '10px' }}>
                                            <Col>
                                                <Form.Label>Konu</Form.Label>
                                                <Form.Control controlId="formBasicSubject"
                                                    placeholder="Konu"
                                                    value={this.state.subject}
                                                    onChange={(event) => { this.setState({ subject: event.target.value }) }}
                                                    minlength={12}
                                                    required />
                                            </Col>
                                        </Form.Row>
                                        <Form.Label style={{ marginTop: '10px' }}>Açıklama</Form.Label>
                                        <Form.Control as="textarea" rows={3}
                                            placeholder="Konu"
                                            value={this.state.description}
                                            onChange={(event) => { this.setState({ description: event.target.value }) }}
                                            required />

                                    </Form.Group>
                                    <Button variant="primary" type="submit" value="send">
                                        Gönder
                                    </Button>
                                    <div style={{ float: 'right' }}
                                        className=""
                                    >

                                        <Button variant="secondary" onClick={this.openModal1}>
                                            Müşteri Şikayet Süreci
                                        </Button>
                                    </div>
                                    <div style={{ float: 'right', marginRight: '10px' }}
                                        className=""
                                    >
                                        <Button variant="secondary" onClick={this.openModal}>
                                            Veri Sahibi
                                        </Button>
                                    </div>

                                    <Modal size="xl" show={this.state.isOpen} onHide={this.closeModal} aria-labelledby="example-modal-sizes-title-xl" >
                                        <Modal.Header closeButton>
                                            <Modal.Title>Veri Sahibi</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <h5>BIRGI MEFAR İŞLETME GRUBU, VERİ SAHİBİ BAŞVURU FORMU</h5>
                                            <p>
                                                <p>
                                                    Kişisel verilerin işlenmesine ilişkin özel haklar, Kanun'un 11. Maddesinde, 567 sayılı Kişisel Verilerin Korunması Kanunu'nda ("Kanun") ilgili kişi olarak tanımlanan kişisel veri sahiplerine ("Veri Sahibi") tanınmıştır. 6698.
                                                </p>
                                                <p>
                                                    Kanunun 13 üncü maddesinin birinci fıkrası gereğince veri sorumlusu olan Şirketimize bu haklarla ilgili yapılacak başvurunun yazılı olması veya Kişisel Verilerin Korunması tarafından tanımlanan diğer yöntemlerle tarafımıza iletilmesi gerekmektedir. Board ("Board)". Bu çerçevede Şirketimize "yazılı" olarak yapılacak başvurular bu form kullanılarak fiziki ortamdan noter veya taahhütlü e-posta yoluyla tarafımıza iletilmelidir.
                                                </p>
                                                <p>
                                                    Tarafımıza iletilen başvurularınıza 13. maddenin 2. fıkrasına göre talebinizin niteliğine göre talebinizin bize ulaştığı tarihten itibaren "en geç otuz gün ve en kısa sürede" yanıtlanacaktır. cevaplar size Kanun'un 13. maddesi hükmü uyarınca elektronik ortamdan veya yazılı olarak iletilecektir.
                                                </p>
                                                <p>
                                                    Bu formun mahiyeti ve talebiniz gereği sizden talep edilen bilgi ve belgelerin doğru ve doğru bir şekilde tarafımıza ulaştırılması gerekmektedir. İstenilen bilgi ve belgelerin nasıl olması gerektiğine dair temin edilmediği durumlarda Şirketimizin talebi doğrultusunda yapılacak çalışmaların eksiksiz ve nitelikli bir şekilde yürütülmesinde arızalar yaşanabilir. Bu durumda şirketimizin yasal hakları saklıdır. Bu nedenle ilgili form, talebinize göre istenen bilgi ve belgeleri doğru b ir şekilde içerecek şekilde gönderilmelidir.
                                                </p>
                                            </p>
                                            <p>
                                                VERİ SAHİBİ BİLGİLERİ
                                            </p>
                                            <p>
                                                Sizinle iletişime geçebilmemiz ve kimliğinizi doğrulayabilmemiz için aşağıdaki alanları doldurunuz.
                                            </p>
                                            <p>
                                                Ad Soyad
                                            </p>
                                            <p>
                                                Türkiye Cumhuriyeti TC Kimlik Numarası:
                                            </p>
                                            <p>
                                                Adres
                                            </p>
                                            <p>
                                                Cep telefonu
                                            </p>
                                            <p>
                                                E-posta
                                            </p>
                                            <p>
                                                Şirketimizle ilişkiniz
                                            </p>
                                            <p>
                                                Müşteri
                                            </p>
                                            <p>
                                                Ziyaretçi
                                            </p>
                                            <p>
                                                İş ortağı
                                            </p>
                                            Diğer
                                            <p>
                                                Bunun yanı sıra yukarıda belirttiğiniz bilgileriniz başvurunuz ile ilgili daha detaylı bilgi almak, soruşturma süreciyle ilgili bilgilendirmek ve başvuru sonuçlarını iletmek için talep edilebilir.
                                            </p>
                                            <p>
                                                UYGULAMA İÇERİĞİ
                                            </p>
                                            <p>
                                                Lütfen talebinize konu olan kişisel verilerinizin ne olduğunu belirtin. Bu bağlamda kişisel verilere ilişkin talebinizi aşağıda belirtmenizi rica ederiz.
                                            </p>
                                            <p>
                                                BAŞVURU SAHİBİ BEYANI
                                            </p>
                                            <p>
                                                Yukarıda belirttiğim talepler doğrultusunda Şirketinize yapmış olduğum başvurum Kanunun 13. maddesi kapsamında değerlendirildikten sonra bilgilendirilmemi rica ederim.
                                            </p>
                                            <p>
                                                Bu başvuruda sizlere vermiş olduğum bilgi ve belgelerimin doğru ve güncel olduğunu, ek olarak Kurul tarafından belirlenen ücreti ödemem gerektiği konusunda aydınlatılmış olduğumu taahhüt ve beyan ederim. Şirketin başvurumu sonuçlandırması için ücret talep edilebilir ve ek bilgi talep edilebilir.
                                            </p>
                                            <p>
                                                Cevabın Bölüm 2'de verdiğim posta adresime gönderilmesini istiyorum.
                                            </p>
                                            <p>
                                                Cevapların Bölüm 2'de verdiğim e-posta adresime gönderilmesini istiyorum.
                                            </p>
                                            <p>
                                                İlgili Başvuru Sahibi Kişi (Kişisel Veri Sahibi)
                                            </p>
                                            <p>
                                                Ad Soyad:
                                            </p>
                                            <p>
                                                Uygulama tarihi:
                                            </p>
                                            <p>
                                                İmza:
                                            </p>
                                        </Modal.Body>
                                    </Modal>

                                    <Modal size="xl" show={this.state.isOpen1} onHide={this.closeModal1} aria-labelledby="example-modal-sizes-title-xl">
                                        <Modal.Header closeButton>
                                            <Modal.Title>Müşteri Şikayet Süreci</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p>
                                                <b>BİRGİ MEFAR MÜŞTERİ ŞİKAYET SÜRECİ</b>
                                            </p>
                                            <p>
                                                <b>Şikayetlerin bildirilmesi</b>
                                            </p>
                                            <p>
                                                Şikayetler yazılı olarak bildirilmelidir. Bu amaçla web adresimizde tanımlanan "müşteri şikayetleri bildirim formu" doldurulabilir. Bu bağlantı ile gönderilen şikayet doğrudan Birgi Satış departmanına bildirilecektir.
                                            </p>
                                            <p>
                                                <b>
                                                    Şikayetin alınması:
                                                </b>
                                            </p>
                                            <p>
                                                Satış departmanı yetkilisi şikayetten haberdar edildiğinde Müşteri Şikayet Değerlendirme formunun "şikayeti gönderen" ve "şikayeti bildiren" kısımlarını doldurur. Müşteri tarafından gönderilen bir form / e-posta varsa, değerlendirme formuna eklenecektir. Şikayet değerlendirme formu şikayetin alındığı gün Kalite Sistem Yöneticisine gönderilir.
                                            </p>
                                            <p>
                                                <b>
                                                    Müşteriye şikayetin alındığına dair ön cevap mektubunun gönderilmesi
                                                </b>
                                            </p>
                                            <p>
                                                Kalite Sistem Yöneticisi şikayeti ve gönderilmişse örneklerini inceler. Numuneler gönderilmemişse numunelerin gerekli olup olmadığını değerlendirir. Şikayetin alınmasını takip eden en geç bir iş günü içerisinde Kalite Sistem Yöneticisi tarafından müşteriye şikayetin alındığını ve soruşturmanın başlatıldığını açıklayan kısa bir bilgilendirme mektubu gönderilir. Gerekirse şikayet değerlendirmesi için numune talep edilir.
                                            </p>
                                            <p>
                                                <b>
                                                    Şikayetin değerlendirilmesi için gerçekleştirilecek süreçlerin planlanması:
                                                </b>
                                            </p>
                                            <p>
                                                Kalite Sistem Yöneticisi şikayetin özelliğine göre yapılacak inceleme ve araştırmaları belirler. Yapılacak incelemeler değerlendirme formunda belirtilir. Sorumluluk ve her eylemin hedef tarihi tanımlanır. Müşteri değerlendirme formunun aslı, şikayetin alınmasını takip eden en geç bir iş günü içerisinde incelemeleri yapacak departmana gönderilir. Aynı zamanda müşteri değerlendirme formu bilgi için ilgili diğer departmanlara e-posta ile dağıtılır.
                                            </p>
                                            <p>
                                                <b>
                                                    Şikayetin araştırılmasına ilişkin ara raporun müşteriye gönderilmesi:
                                                </b>
                                            </p>
                                            <p>
                                                Şikayetler, şikayetlerin bildirildiği tarihten itibaren en geç 5 iş günü içerisinde sonuçlandırılır. Yapılan incelemelerin kapsamına göre bu süre içinde sonuçlanamayan şikayet ile ilgili olarak Kalite Sistem Yöneticisi tarafından ara rapor müşteriye gönderilir. Bu tarihe kadar devam eden çalışmalar ve yapılan araştırmalar ara raporda açıklanır.
                                            </p>
                                            <p>
                                                <b>
                                                    Şikayetin sonuçlandırılması:
                                                </b>
                                            </p>
                                            <p>
                                                Şikayete yol açan uygunsuzluğun nedeni, yapılan inceleme ve değerlendirmelerle tespit edilir. Şikayetin Birgi'den kaynaklanıp kaynaklanmadığı netleştirilir. Elde edilen sonuç objektif olarak müşteriye yazılı olarak gönderilir. Şikayetin Birgi'den açıkça ortaya çıktığı tespit edilen durumlarda, şikayetin tekrar oluşmaması için belirlenen düzeltme işlemleri müşteriye bildirilir. Şikayetin Açıkça Birgi'den kaynaklanmadığı tespit edilen durumlarda, yapılan incelemelerin sonuçları müşteriye açıklanır. Sorunun Birgi'den kaynaklandığına dair bir bulgu olup olmadığı açıklandı. Şikayetin cevap yazısında müşteriye yapılacak ek soruşturma ile ilgili taleplerinin olması istenir.
                                            </p>
                                        </Modal.Body>
                                    </Modal>

                                </Form>
                            </Segment>
                        </Container>

                        : <div style={{ textAlign: 'center', marginTop: '25px' }}>
                            {
                                formCanceled ?
                                    <>
                                        <img src={FalseLogo} style={{ maxHeight: '200px' }} alt='' />
                                        <h1 style={{ color: 'red' }}>Bir hata oluştu.</h1>
                                    </>
                                    :
                                    <>
                                        <img src={SuccessLogo} style={{ maxHeight: '200px' }} alt='' />
                                        <h1 style={{ color: '#32c671' }}>Mesaj Gönderildi.</h1>
                                    </>
                            }
                        </div>
                    }
                </div> : null}
            </Segment>
        )
    }
}

export { ComplaintsFormTR }