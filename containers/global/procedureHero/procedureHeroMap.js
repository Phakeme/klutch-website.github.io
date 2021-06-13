import React, { useEffect, useState } from 'react'
import { ProceHero } from "../../../components/index";
import sanityClient from '../../../client'

export function ProcedureHeroMap(props) {
    const [summary, setSummary] = useState([])

    useEffect(() => {
        sanityClient.fetch(
            `*[_type == "procedureTypes"]{
        title,
        summary,
        procedureType,
        image{
            asset->{
                      url
            },
            alt
          },
      }`).then(data => setSummary(data, console.log(data, "Data"))).catch(console.error)
    }, [])
    let procedureView = summary.filter(i => i.procedureType == props.currentPage)

    return (
        <>
            {procedureView.map((item, i) => (
                <ProceHero.Inner key={i}>
                    <ProceHero.Section>
                        <ProceHero.TextBox>
                            <ProceHero.H1 >{item.title}</ProceHero.H1>
                            <ProceHero.P>{item.summary}</ProceHero.P>
                        </ProceHero.TextBox>
                    </ProceHero.Section>
                    <ProceHero.Section>
                        <ProceHero.Image src={item.image.asset.url} alt={item.image.asset.url} />
                    </ProceHero.Section>
                </ProceHero.Inner>
            ))
            }
        </>
    )
}