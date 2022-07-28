import React, { useState } from 'react';
import {Carousel} from 'react-bootstrap';
import first from '../../images/slider/1.jpg';
import second from '../../images/slider/2.jpg';
import third from '../../images/slider/3.jpg';
import fourth from '../../images/slider/4.jpg';
import fifth from '../../images/slider/5.jpg';

const Slider = ({text2, text3, text4, text5, desc2, desc3, desc4, desc5}) =>  {
    const [index, setIndex] = useState(0);
    const text1 = <p className={'d-none d-sm-none d-md-none d-lg-block'} style={{fontSize: '48px', textAlign: 'left',fontWeight: '800'}}>Excellence in Global Contract Development Manufacturing in Sterile Products</p>
    const desc1 = <p className={'d-none d-sm-none d-md-none d-lg-block'} style={{fontSize: '24px', textAlign: 'left'}}>Since 1963 for more than fifty years, the Birgi Mefar Group has been committed to health. The health of patients... The health of our customers businessess. Healthy relationships with all the members of the Birgi family and our suppliers. So, here's to many happy, healthy, returns.</p>
    const mobileText =  <Carousel.Caption style={{left:'10%',right:'10%'}}>
          <p className={'d-block d-sm-none'} style={{marginBottom: '5px',fontSize: '20px', textAlign: 'left',fontWeight: '800'}}>Excellence in Global Contract Development Manufacturing in Sterile Products</p>
          <p className={'d-block d-sm-none'} style={{fontSize: '14px', textAlign: 'left',marginBottom: '0px'}}>Since 1963 for more than fifty years, the Birgi Mefar Group has been committed to health. The health of patients... The health of our customers businessess. Healthy relationships with all the members of the Birgi family and our suppliers. So, here's to many happy, healthy, returns.</p>
      </Carousel.Caption>
  
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

  return (
        <Carousel fade={true} slide={true} activeIndex={index} className={'Slider'} onSelect={handleSelect} style={{marginRight: '-15px', width: '120% !important'}}>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={first}
              alt="First slide"
            />
            <Carousel.Caption style={{bottom:'20%', left:'20%',right: '25%'}}>
              {text1}
              {desc1}
            </Carousel.Caption>
              {mobileText}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-bot slider-img"
              src={second}
              alt="Second slide"
            />
            <Carousel.Caption style={{bottom:'20%', left:'20%',right: '25%'}}>
              {text1}
              {desc1}
            </Carousel.Caption>
              {mobileText}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-bot slider-img"
              src={third}
              alt="Third slide"
            />
            <Carousel.Caption style={{bottom:'20%', left:'20%',right: '25%'}}>
              {text1}
              {desc1}
            </Carousel.Caption>
              {mobileText}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={fourth}
              alt="Fourth slide"
            />
            <Carousel.Caption style={{bottom:'20%', left:'20%',right: '25%'}}>
              {text1}
              {desc1} 
            </Carousel.Caption>  
              {mobileText}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slider-img"
              src={fifth}
              alt="Fifth slide"
            />
            <Carousel.Caption style={{bottom:'20%', left:'20%',right: '25%'}}>
              {text1}
              {desc1}
            </Carousel.Caption>
              {mobileText}
          </Carousel.Item>
        </Carousel>
  );
}

export default Slider;
