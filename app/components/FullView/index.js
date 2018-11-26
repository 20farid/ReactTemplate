import React from 'react';
import { Link } from "react-router-dom";

//import Stats from '../Stats';
import './styles.css';

export const FullView = ({loading,detail,error,}) => {

        if(detail !== false){
          return (
              <div className="content">
                      <p>{detail.id}</p>
                      <img
                        src={detail.urls.full}
                      />
                      <p>{detail.user.name}</p>
              </div>
          );
        }

        return null;


}



export default FullView;
