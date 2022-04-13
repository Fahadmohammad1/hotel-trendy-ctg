import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Services = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  return (
    <div className="text-center mt-5">
      <h1>this is our services</h1>
      <button
        onClick={() => {
          navigate(`services/${serviceId}`);
        }}
      >
        Details
      </button>
    </div>
  );
};

export default Services;
