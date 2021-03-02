import React from "react";
import data from "../../../data/procedures/reconstructive/reconstructive.json";

const ReconstructiveData = () => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <ul key={item.title}>
            {item.types.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ReconstructiveData;
