import React, { useState } from "react";

const Faq = ({ id, title, desc }) => {
  const [Toggle, setToggle] = useState(false);
  return (
    <div>
      <div>
        <h1>{title}</h1>

        <button
          onClick={() => {
            setToggle(!Toggle);
          }}>
          {Toggle ? "-" : "+"}
        </button>
        {Toggle && <p>{desc}</p>}
      </div>
    </div>
  );
};

export default Faq;
