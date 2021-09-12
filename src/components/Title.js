import React from "react";

const Title = ({ title, end }) => {
  return (
    <h3 className="font-bold">
      &lt; {title} {end ? <>&#47;</> : ""} &gt;
    </h3>
  );
};

export default Title;
