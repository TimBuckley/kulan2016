import React from 'react';
import {IndexLink, Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';

var Slider = require('react-slick');

export default class Home extends React.Component{
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 2500,
      fade: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
        <div className="center pageContainer">
          <div className="carouselContainer">
            <Slider {...settings}>
              <div><img src="img/slides/slide1.jpg"/></div>
              <div><img src="img/slides/slide2.jpg"/></div>
              <div><img src="img/slides/slide3.jpg"/></div>
              <div><img src="img/slides/slide4.jpg"/></div>
            </Slider>
          </div>
        </div>
    );
  }
}