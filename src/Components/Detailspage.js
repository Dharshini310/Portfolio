import React from "react";
import { useParams } from "react-router-dom";
import Resume from "./Resume"; // Ensure these paths are correct
import Contact from "./Contact";

const DetailsPage = () => {
  const { info } = useParams();

  const details = {
    "contact": Contact,
    "resume": Resume
  };

  const InfoComponent = details[info] || (() => <div>Information Not Found</div>);

  return (
    <div>
      <InfoComponent />
    </div>
  );
};

export default DetailsPage;
