import React, { useEffect, useState } from "react";
import { ProceOverview, Map } from "../../../components";
import sanityClient from '../../../client'

export function ProceOverviewContainer() {
  const [procedure, setProdure] = useState([])

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "procedure"]{
      title,
    }`).then(data => setProdure(data, console.log(data, "Data"))).catch(console.error)
  }, [])

  return (
    <ProceOverview>
      <ProceOverview.Wrapper>
        {procedure.map((procedure, index) => (
          <div key={index}>
            <p>{procedure.title}</p>
            <p>{procedure.slug.current}</p>
            <p>{procedure.procedureType}</p>
          </div>
        ))}
      </ProceOverview.Wrapper>
    </ProceOverview>
  );
}