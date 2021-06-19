import React, { useEffect, useState } from 'react'
import { ProceHero } from "../../../components/index";
import sanityClient from '../../../client'

export function ProcedureHeroMap({ currentPage }) {
    const [summary, setSummary] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        sanityClient.fetch(
            `*[_type == "procedureTypes"]{
        title,
        summary,
        procedureType,
        image{asset->{url},alt},
      }`).then(data => setSummary(data, console.log(data, "Data")), setLoading(false)).catch(console.error, setLoading(false))
    }, [])

    let procedureView = summary.filter(i => i.procedureType == currentPage)

    return (
        <>
            {loading ? <h1>Loading...</h1> : procedureView.map(({ title, summary, image }, i) => (
                <ProceHero.Inner key={i}>
                    <ProceHero.Section>
                        <ProceHero.TextBox>
                            <ProceHero.H1>{title}</ProceHero.H1>
                            <ProceHero.P>{summary}</ProceHero.P>
                        </ProceHero.TextBox>
                    </ProceHero.Section>
                    <ProceHero.Section>
                        <ProceHero.Image
                            src={image.asset.url}
                            alt={image.asset.url}
                        />
                    </ProceHero.Section>
                </ProceHero.Inner>
            ))}
        </>
    )
}