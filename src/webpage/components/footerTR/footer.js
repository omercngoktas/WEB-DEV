import React from 'react';
import {Row} from 'react-bootstrap';
import { IconCard } from './iconCard';
import { Certificate } from './certificates';
import { Extend as Foot} from './extend';
import { faGlobeAsia , faFlask, faUsers, faChartPie } from '@fortawesome/free-solid-svg-icons';
import cert1 from '../../images/certs/certs1.png';
import cert2 from '../../images/certs/certs2.png';
import cert3 from '../../images/certs/certs3.png';
import cert4 from '../../images/certs/certs4.png';
import cert5 from '../../images/certs/certs5.png';
import cert6 from '../../images/certs/certs6.png';
import cert7 from '../../images/certs/certs7.png';
import cert8 from '../../images/certs/certs8.png';

const Footer = () =>  {

  const iText1 = 'Küresel ve Yerel Müşteriler';
  const iText2 = 'Çalışan Aktifler';
  const iText3 = 'Personel Sayisi';
  const iText4 = 'İhracat Oranı';
  
  const facebook = 'https://www.facebook.com/BirgiMefar-518882088477890/';
  const instagram = 'https://www.instagram.com/birgimefar';
  const linkedin = 'https://www.linkedin.com/company/the-birgimefar-group/';
  return (
    <>
    <Row style={{marginTop: '20px'}}>
          <IconCard text={iText1} color='#023675' icon={faGlobeAsia} counter='60' addon='+'/>
          <IconCard text={iText2} color='#0e57a9' icon={faFlask} counter='300' addon='+'/>
          <IconCard text={iText3} color='#3e83d4' icon={faUsers} counter='750' addon='+'/>
          <IconCard text={iText4} color='#669fe4' icon={faChartPie} counter='40' addon='+%'/>
    </Row>
    <Row>
          <Certificate cert={cert1} />
          <Certificate cert={cert2} />
          <Certificate cert={cert3} />
          <Certificate cert={cert4} />
          <Certificate cert={cert5} />
          <Certificate cert={cert6} />
          <Certificate cert={cert7} />
          <Certificate cert={cert8} />
    </Row>
    <Row style={{backgroundColor: '#367244'}}>
        <Foot facebook ={facebook} instagram={instagram} linkedin={linkedin} />
    </Row>
    </>
  )
}

export default Footer;
