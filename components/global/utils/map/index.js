import React, { Children } from "react";

function Map(props, children) {
  return (
    <>
      {
        props.data.map((item, index) => (
          <div key={index}>

          </div>
        ))
      }
    </>
  );
}

export default Map;
