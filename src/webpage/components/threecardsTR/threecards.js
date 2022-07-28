import React from 'react';
import { IconCard } from './cCard';
import {Row} from 'react-bootstrap';

const ThreeCards = () =>  {
  const CardTitle1 = 'PRİMER AMBALAJ ÜRETİMİ'
  const CardTitle2 = 'STERİL ENJEKTABL ÜRETİM VE GELİŞTİRME HİZMETİ'
  const CardTitle3 = 'DEPO VE LOJİSTİK HİZMETLERİ'

  const buttonsArr1 = ['Ampuller','Flakonlar']
  const buttonsArr2 = ['Ampul','Flakon',
  'Lyo Flakon', 
  'Kullanıma Hazır Şırınga (PFS)','Blow-Fill-Seal (BFS)',
   'Lab. Hizmetler', 'Paketleme', 'Serileştirme (ITS)',
   'Soğuk Zincir Yönetimi']
  const buttonsArr3 = ['Stok Yönetimi', 'Serbest Bırakma', 'Etiketleme', 'Paketleme', 'Serileştirme (ITS)']

  const color1 = '#0b4b93'
  const color2 = '#367244'
  const color3 = '#5fb4d1'

  return(
    <Row>
            <IconCard 
            title={CardTitle1} 
            buttons={buttonsArr1}
            color = {color1}
            />
          <IconCard 
            title={CardTitle2} 
            buttons={buttonsArr2}
            color= {color2}
          />
          <IconCard
            title={CardTitle3} 
            buttons={buttonsArr3}
            color= {color3}
           />
    </Row>
  )
}

export default ThreeCards;
