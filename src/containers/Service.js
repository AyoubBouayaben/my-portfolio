import React, { useContext } from "react";
import "./Service.scss";
import { Fade } from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import serviceLottie from "../../assets/lottie/codingPerson"; // reuse or replace with a new one

const Service = () => {
  const { isDark } = useContext(StyleContext);

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="service">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <DisplayLottie animationData={serviceLottie} />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
              Services
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              Machine learning-based prediction services for airlines and aviation partners.
            </p>

            <ul className="service-list">
              <li>
                ✈️ <strong>Inbound Flight Delay Prediction:</strong> Predict root and reactionary delays using quantile regression and SHAP.
              </li>
              <li>
                📉 <strong>Uncertainty Estimates:</strong> Provide confidence bounds for delay values to support better decisions.
              </li>
              <li>
                📦 <strong>Real-time Pipeline:</strong> FastAPI-based prediction endpoint that accepts raw BTS or airline data and returns delays.
              </li>
              <li>
                📊 <strong>SHAP Explainability:</strong> Visual and numeric insights into what features drive each prediction.
              </li>
              <li>
                💰 <strong>Pricing:</strong> First predictions free, then €0.50 per flight.
              </li>
            </ul>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Service;
