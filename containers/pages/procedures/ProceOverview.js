import React, { useEffect, useState } from "react";
import { ProceOverview } from "../../../components";
import sanityClient from '../../../client'

export function ProceOverviewContainer() {
  const [procedure, setProdure] = useState([])

  useEffect(() => {
    sanityClient.fetch(`*[_type == "post"]{
      title,
      slug,
    }`).then(data => setProdure(data)).catch(console.error)
  }, [])
  return (
    <ProceOverview>
      <ProceOverview.Wrapper>
        {procedure.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
          </div>
        ))}
      </ProceOverview.Wrapper>
    </ProceOverview>
  );
}
