import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Segment} from 'semantic-ui-react';
import PageTitle from '../content/pageTitle';
import ImageBox from './imageBox';

class CertificateTR extends Component {
    render(){
        return(
            <>
                <Container style={{paddingTop:"10px"}}>
                        <PageTitle pageName={'KALİTE POLİTİKASI'}/>
                </Container>
                <Segment>
                    <Container>
                    <h5>KALİTE POLİTİKASI</h5>
                    <ul>
                    <li>Tüm ürünlerimiz iyi üretim kuralları (cGMP) çerçevesinde ve kalitesinde üretilir. Bunun için;
                    <ul>
                    <li>Güncel kurallar ve teknoloji takip edilir</li>
                    <li>Sürekli iyileştirme ve geliştirme için gerekli tedbirler alınır</li>
                    <li>Müşteri beklentileri azami ölçüde karşılanır</li>
                    <li>Son kullanıcıların ürünlerimizi tam bir güven içinde kullanması sağlanır</li>
                    </ul>
                    </li>
                    <li>Şirket üst yönetimi, bu politika doğrultusunda kalite yönetim sistemi şartlarına eksiksiz uyar, etkinliğini sürekli artıracağını taahhüt eder</li>
                    <li>Bu taahhüdü yerine getirebilmek için, tüm proseslerde her yıl yeni hedefler belirler ve belirlenen bu hedefleri periyodik olarak değerlendirir</li>
                    <li>Şirket üst yönetimi;
                    <ul>
                    <li>Tedarikçiler, müşteriler ile olan ilişkilerinde şeffaf, adil ve dürüst olur</li>
                    <li>Şirket içinde demokratik ortamın gelişmesini sağlar</li>
                    <li>Yapılan tüm işlerde toplum yararlarına ve çevreyi korumaya öncelik verilir</li>
                    <li>Personelin sürekli eğitimini sağlar. İş sağlığı ve güvenliği için azami özeni gösterir</li>
                    </ul>
                    </li>
                    </ul>
                    
                    <p>Koordinasyon Üst Kurulu</p>
                    <p>Çıkış Tarihi: 26.10.2004</p>
                    <p>Düzeltme No: 05</p>
                    <Row>
                        <Col xl={3} xs={12}>
                        <ImageBox src={'/certificates/images/1.jpg'} width={'100%'}/>
                        </Col>
                        <Col xl={3} xs={12}>
                        <ImageBox src={'/certificates/images/2.jpg'} width={'100%'}/>
                        </Col>
                    </Row>
                    {/* <h5>Sağlık Emniyet Çevre Politikası</h5>
                    <p>Birgi Mefar Grup olarak, sürdürülebilir ve gelişmeye açık bir gelecek için her ortam ve koşulda, konularında uzman personelimiz ile faaliyetlerimizi yürüttüğümüz esnada;</p>
                    <ul>
                    <li>Sağlık, Emniyet Çevre ile ilgili tüm yasal ve diğer şartlara uymayı,</li>
                    <li>Çevre kirliliğinin kaynağında önlenmesini, atıkların azaltılmasını ve kaynağında ayrıştırarak biriktirip maksimum geri dönüşümünü sağlamayı</li>
                    <li>Enerji ve doğal kaynak kullanımını sürekli azaltmayı, iklim değişikliğini önlemeyi, biyoçeşitliliğin ve ekosistemlerin korunması için gerekli tedbirleri almayı,</li>
                    <li>Kazaların ve işe bağlı sağlık bozulmalarının önlenmesi için uygun çalışma ortamının yaratılmasını, tehlikelerin ortadan kaldırılmasını ve tüm faaliyetlerin minimum risk altında gerçekleştirilmesini sağlamayı,</li>
                    <li>Paydaşların Sağlık Emniyet Çevre ile ilgili mevcut ve gelişen ihtiyaç ve beklentilerini dikkate alarak değerlendirmeyi,</li>
                    <li>Sağlık Emniyet Çevre Yönetim Sistemlerinin tüm çalışanlarımızın katılımı ve danışması ile yaşam döngüsü bağlamında etkin olarak uygulanması ve sürekli iyileştirilmesi için gerekli kaynakları sağlamayı taahhüt ederiz,</li>
                    </ul>
                    <p>Bu taahhütlerimizi yerine getirebilmek için hedefler belirler ve bu hedefleri periyodik olarak değerlendiririz. Belirlenen hedeflere ulaşabilmek için;</p>
                    <ul>
                    <li>Gerekli izleme ve iyileştirme programını oluşturur.</li>
                    <li>Paydaşlarımızın Sağlık Emniyet Çevre konularındaki bilgi ve bilincini artırmak için çalışmalar yapar.</li>
                    <li>Güncel teknolojik yöntemlerden yararlanırız.</li>
                    </ul>

                    <p>Koordinasyon Üst Kurulu</p>
                    <p>Yayın Tarihi: 29.05.2018</p>
                    <p>Düzeltme No: 03</p> */}
                    <Row>
                        <Col xl={4}></Col>
                        <Col xl={4} xs={12}><ImageBox src={'/certificates/images/1(1).jpg'} width={'100%'}/></Col>
                        <Col xl={4}></Col>
                    </Row>
                    <Row>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/2(1).jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/3.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/4.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/5.jpg'} width={'100%'}/></Col>
                    </Row>
                    <Row>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/TSENISO_9001_2015.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/TSENISO_9001_2015_ek_1.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/TSENISO_13485_2016.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/TSENISO_13485_2016_EK_1.jpg'} width={'100%'}/></Col>
                    </Row>
                    <Row>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/Kalite_yonetim.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/Kalite_yonetim_ek_1.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/Tibbi_cihazlar.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/Tibbi_cihazlar_ek_1.jpg'} width={'100%'}/></Col>
                    </Row>
                    <h5>GMP Sertifikaları</h5>
                    <Row>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/1(2).jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/2(2).jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/3(1).jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/4(1).png'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/3(1).jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/6.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/7.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/8.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/9.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/10.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/11.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/12.jpg'} width={'100%'}/></Col>
                        <Col xl={3} xs={12}><ImageBox src={'/certificates/images/13.jpg'} width={'100%'}/></Col>
                    </Row>
                    <h5>BİLGİ GÜVENLİĞİ POLİTİKASI</h5>
                    <ul>
                    <li>BirgiMefar şirketler gurubu sürdürülebilir ve gelişmeye açık bir gelecek için her ortam ve koşulda konularında uzman personeliyle yürüttüğü tüm faaliyetlerini yaparken;</li>
                    <li>Bilgi güvenliği ihlalinden doğacak muhtemel kanuni yükümlülüklerden şirket üst yönetimi ve diğer tüm çalışanların etkilenmesini önlemeyi,</li>
                    <li>Bilgi sistemlerinde paylaşılmakta olan idari, mali ve teknik veriler ile kritik tüm verilerin güvenliğini sağlamayı,</li>
                    <li>İş devamlılığını sağlamayı,</li>
                    <li>Kurumumuz ve yatırımlarımız ile birlikte toplumun, tedarikçilerimizin ve müşterilerimizin itibarını korumayı taahhüt eder.</li>
                    <li>Bu amaçla; Güncel güvenlik teknolojileri ve kuralları takip edilir,</li>
                    <li>Sürekli iyileştirme ve geliştirme için tedbirler alınır,</li>
                    <li>Personelin sürekli eğitim ve sorumluluk alması sağlanır,</li>
                    <li>Bu taahhüdü yerine getirebilmek için tüm proseslerde her yıl yeni hedefler belirlenir ve bu hedefler periyodik olarak gözden geçirilir,</li>
                    </ul>
                    <p>Bilgi güvenliğinin sağlanması için azami özen gösterilir.</p>
                    <p>Çıkış tarihi:08.03.2016</p>

                    <h5>MÜŞTERİ MEMNUNİYETİ VE MÜŞTERİ ŞİKAYETLERİNİ ELE ALMA POLİTİKASI</h5>
                    <p>BirgiMefar şirketler grubu olarak firma kültürümüz gereği müşterilerimizin memnuniyeti ve son kullanıcının ürünlerimizi tam bir güven içerisinde kullanması asli önceliğimizdir.Bunun için;</p>
                    <ul>
                    <li>Müşterilerimizin ve son kullanıcıların şikayetleri, hızlı, özenli, yasalara ve mevzuatlara uygun şekilde, TS ISO 10002 standardına uygun olarak ele alnır.</li>
                    <li>Şikayet araştırmalarında her adım; şeffaflık, objektiflik, gizlilik ve adil olma ilkelerine uygun şekilde yürütülür.Hiçbir kişi, kurum ve zümreye aldatıcı, yanıltıcı bilgi verilmez.</li>
                    <li>Tüm şikayet ve talepler, firmamız için bir katma değer fırsatı ve sürekli iyileştirmenin bir parçası olarak görülür.Bu nedenle şikayetler etkili ve verimli bir şekilde değerlendirilerek mutlak bir sonuca ulaştırılır.</li>
                    <li>Şikayet konularının tekrar etmesinin önlenmesi için gereken düzeltici ve önleyici faaliyetler belirlenir ve gecikme olmaksızın uygulanır.</li>
                    <li>Şikayet yönetim sistemimiz periyodik aralıklarla düzenli olarak gözden geçirilir ve sistemin etkinliği firma yönetimine raporlanır.</li>
                    <li>Temel hedefimiz şikayet oluşmasına neden olabilecek her türlü durumun önlenmesidir.Bunun için gereken her türlü önlem alınır ve izlenir.</li>
                    </ul>
                    
                    <p>
                    <a href={'/certificates/mefarsertifikalari.pdf'}>Mefar Sertifikaları İçin Tıklayın</a>
                    </p>
                    <p>
                    <a href={'/certificates/birgisertifikalari.pdf'}>Birgi Sertifikaları İçin Tıklayın</a>
                    </p>
                    <p>
                    <a href={'/certificates/gmpsertifikalari.pdf'}>GMP Sertifikaları İçin Tıklayın</a>
                    </p>

                    <h5>BirgiMefar Ki̇şi̇sel Veri̇leri̇n Korunmasi Ve İşlenmesi̇ Poli̇ti̇kasi</h5>
                    <a href={'/kvkk/Mefar_KVKK_Politikası.pdf'}>Kişisel Verilerin Korunması ve İşlenmesi Politikası İçin Tıklayın</a>
                    
                </Container>
            </Segment>
        </>
        )
    }
}
export {CertificateTR}