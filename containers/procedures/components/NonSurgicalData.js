import React from "react";
import data from "../../../data/procedures/cosmetic/non-surgical.json";

const NonSurgicalData = () => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          {item.types.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <ul key={item.id}>
                {item.surgicalTypes.map((surgical) => (
                  <li key={surgical}>{surgical}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NonSurgicalData;
