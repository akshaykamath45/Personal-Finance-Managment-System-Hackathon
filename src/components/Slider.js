import React from "react";
import "./Slider.css";
import { useInView } from 'react-intersection-observer';

export const Slider = ({ imageSrc, title, subtitle, flipped }) => {
        const { ref, inView, entry } = useInView({
          /* Optional options */
          threshold: 0.4,
         
        });
  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="travel" className="slider_img"></img>
          <div className="slider_content">
            <h1 className="slider_title">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
      
          <div className="slider_content">
            <h1 className="slider_title">{title}</h1>
            <p>{subtitle}</p>
          </div>
          <img src={imageSrc} alt="travel" className="slider_img"></img>
        </>
      );
    }
  };

  return <div className={inView ?"slider slider--zoom" : "slider"} ref={ref} >
    {renderContent()}
  </div>;
};

