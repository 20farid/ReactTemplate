import React from 'react';
import { Link } from "react-router-dom";

//import Stats from '../Stats';
//import './styles.css';

export const ImageGrid = ({
    images
}) => {
        let list = [];
          images.map(image => {
            list.push(
              <div className={`item item-${Math.ceil(
                  image.height / image.width
              )}`} key={image.id}>
                <Link to={`/frontpage/photo/${image.id}`}>
                  {/*<Stats stats={imageStats[image.id]} />*/}
                  <img
                      src={image.urls.small}
                      alt={image.user.username}
                  />
                </Link>
              </div>
            )
          });
        return list;
}



export default ImageGrid;
