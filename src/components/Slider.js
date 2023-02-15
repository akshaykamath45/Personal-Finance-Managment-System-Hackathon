import React from "react";
import "./Slider.css";
export const Slider = ({ imageSrc, title, subtitle, flipped }) => {
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

  return <div className="slider">
    {renderContent()}
  </div>;
};

