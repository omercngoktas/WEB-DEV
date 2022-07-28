import React from 'react';
import { IconCard } from './cCard';
import {Row} from 'react-bootstrap';

const ThreeCards = () =>  {
  const CardTitle1 = 'PRIMARY PACKAGING MANUFACTURING'
  const CardTitle2 = 'STERILE INJECTABLE PRODUCTION AND DEVELOPMENT SERVICE'
  const CardTitle3 = 'WAREHOUSING & LOGISTICS'

  const buttonsArr1 = ['Empty Ampoules','Empty Vials']
  const buttonsArr2 = ['Ampoules','Vials',
   'Lyo Vials', 'Pre-Filled-Syringes (PFS)', 
   'Blow-Fill-Seal (BFS)', 'Lab. Services', 'Packaging', 
  'Serialization', 'Cold Chain Management']
  const buttonsArr3 = ['Stock Quarantine','Release Management', 'Labelling', 'Packaging','Serialization']

  const color1 = '#0b4b93'
  const color2 = '#367244'
  const color3 = '#5fb4d1'

  return(
    <Row>
          <IconCard 
            title={CardTitle1} 
            buttons={buttonsArr1}
            color = {color1}/>
          <IconCard 
            title={CardTitle2} 
            buttons={buttonsArr2}
            color= {color2}/>
          <IconCard
            title={CardTitle3} 
            buttons={buttonsArr3}
            color= {color3}/>
    </Row>
  )
}

export default ThreeCards;
