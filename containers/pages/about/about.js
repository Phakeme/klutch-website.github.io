import React from "react";
import Data from "./Data.json";
import { About } from "../../../components/";

export function AboutContainer({ children }) {
  return (
    <About>
      <About.Wrapper>
        <About.ImageSection></About.ImageSection>
        <div>
          {Data.map((item, index) => (
            <div key={item.title}>
              <div key={index}>
                <h2
                  style={{ marginTop: "0", marginBottom: "40px" }}
                  key={item.title}
                >
                  {item.title}
                </h2>
                {item.subSections.map((item, index) => (
                  <About.TextSection key={index}>
                    <div>{item.icon}</div>
                    <div>
                      <h3 style={{ color: "#d26f8f" }} key={item.subTitle}>
                        {item.subTitle}
                      </h3>
                      <p>{item.body}</p>
                    </div>
                  </About.TextSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </About.Wrapper>
    </About>
  );
}
{
  /* <div style={{ backgroundColor: "red" }}>{item.t}</div> */
}

// {data.map((item) => (
//     <div key={item.id}>
//       <p>{item.title}</p>
//       {item.types.map((item) => (
//         <div key={item.id}>
//           <h2>{item.title}</h2>
//           <ul key={item.id}>
//             {item.surgicalTypes.map((surgical) => (
//               <li key={surgical}>{surgical}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   ))}
