import React, { useEffect, useState } from "react";
import { ProceOverview, Map } from "../../../components";
import sanityClient from '../../../client'

export function ProceOverviewContainer() {
  const [procedure, setProdure] = useState([])

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "procedure"]{
      title,
      slug,
      mainImage{
        asset->{
                  url
        },
        alt
      },
      beforeAfterImages{
        asset->{
                  url
        },
        alt
      },
      procedureType,
      summary,
      eligibility,
      ProcedureBody,
      PreProcedureBody,
      PostProcedureBody,
      BeforeandAfter,
      Risk,
      Expectations,
      Disclaimers
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
            <p>{procedure.summary}</p>

            {procedure.BeforeandAfter.map((item, i) => (
              <div key={i}>
                {item.children.map((item) => (
                  <div key={item._key}>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            ))}

            {procedure.Disclaimers.map((item, i) => (
              <div key={i}>
                {item.children.map((item) => (
                  <div key={item._key}>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            ))}

            {procedure.Expectations.map((item, i) => (
              <div key={i}>
                {item.children.map((item) => (
                  <div key={item._key}>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            ))}

            {procedure.PreProcedureBody.map((item, i) => (
              <div key={i}>
                {item.children.map((item) => (
                  <div key={item._key}>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            ))}

            {procedure.PostProcedureBody.map((item, i) => (
              <div key={i}>
                {item.children.map((item) => (
                  <div key={item._key}>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            ))}

            {procedure.ProcedureBody.map((item, i) => (
              <div key={i}>
                {item.children.map((item) => (
                  <div key={item._key}>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            ))}

            <img src={procedure.mainImage.asset.url} alt="image" />
          </div>
        ))}
      </ProceOverview.Wrapper>
    </ProceOverview>
  );
}