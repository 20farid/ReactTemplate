import React from 'react';
// import { Link } from 'react-router-dom';

// import Stats from '../Stats';
// import './styles.css';
const img = [];

export const ImageList = ({ images, config, loading }) => {
  const list = [];
  // img = [img, ...images];
  // img = [...img, ...images];
  // console.log('ini di img', img);
  if (loading) return null;
  images.map(image => {
    list.push(
      <li className="item" key={image.id}>
        <p>{image.title}</p>
        <img
          src={`${config.images.secure_base_url}w780${image.backdrop_path}`}
        />
      </li>,
    );
  });
  return list;
};

export default ImageList;
