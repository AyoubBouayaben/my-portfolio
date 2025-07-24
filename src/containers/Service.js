import React from "react";
import "./Service.scss"; // We'll add styles after

const Service = () => {
  return (
    <div className="main service-section" id="service">
      <h1 className="service-title">Services</h1>
      <p className="service-subtitle">
        I provide machine learning-based prediction services for airlines and aviation partners.
      </p>

      <ul className="service-list">
        <li>
          ✈️ <strong>Inbound Flight Delay Prediction:</strong> Predict root and reactionary delays using quantile regression and SHAP.
        </li>
        <li>
          📉 <strong>Uncertainty Estimates:</strong> Give confidence bounds for delay values to support better decision-making.
        </li>
        <li>
          📦 <strong>Real-time Pipeline:</strong> FastAPI-based prediction endpoint that accepts raw BTS/airline data and returns delays.
        </li>
        <li>
          📊 <strong>SHAP Explainability:</strong> Visual and numeric insights into which features drive each prediction.
        </li>
        <li>
          💰 <strong>Pricing:</strong> First predictions free — then €0.50 per flight.
        </li>
      </ul>
    </div>
  );
};

export default Service;
