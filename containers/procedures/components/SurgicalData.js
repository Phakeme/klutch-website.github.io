import React from "react";
import data from "../../../data/procedures/cosmetic/surgical.json";

const SurgicalData = () => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          {item.types.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <ul>
                {item.surgicalItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SurgicalData;

{
  /* <p>{item.title}</p> */
}

{
  /* <ul key={item.id}>
              {item.surgicalTypes.map((surgical) => (
                <li key={surgical}>{surgical}</li>
              ))}
            </ul> */
}
