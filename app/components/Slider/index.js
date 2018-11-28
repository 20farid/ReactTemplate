import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';

import ImageList from 'components/ImageList';
import './slick.css';

const SLiderContent = ({ results, config }) => {
  const SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const Slides = results.map(item => (
    <div key={item.id}>
      <img
        src={`${config.images.secure_base_url}original${item.backdrop_path}`}
      />
      <p>{item.title}</p>
    </div>
  ));

  return Slides.length > 0 && <Slider {...SliderSettings}>{Slides}</Slider>;
};

export default SLiderContent;
