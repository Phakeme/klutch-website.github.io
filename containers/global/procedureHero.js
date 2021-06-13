import React from 'react'
import { ProceHero } from "../../components/index";

export function ProceHeroContainer() {
    return (
        <ProceHero>
            <ProceHero.Wrapper>
                <ProceHero.Inner>
                    <ProceHero.Section>
                        <ProceHero.TextBox>
                            <ProceHero.H1>BODY COSMETIC SURGERY</ProceHero.H1>
                            <ProceHero.P>Body cosmetic surgery is a component of plastic surgery for those individuals who wish to improve an individual part or the overall cosmetic appearance of the body.</ProceHero.P>
                        </ProceHero.TextBox>
                    </ProceHero.Section>
                    <ProceHero.Section>
                        <ProceHero.Image src="/body-cosmetic-surgery-durban.jpg" alt="Text" />
                    </ProceHero.Section>
                </ProceHero.Inner>
            </ProceHero.Wrapper>
        </ProceHero>
    )
}