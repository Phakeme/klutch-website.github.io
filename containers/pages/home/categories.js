import React from 'react'
import { Categories } from '../../../components'

export function CategoriesContainer() {
    return (
        <Categories>
            <Categories.Wrapper className="margin">
                <Categories.Inner>
                    <a href="#">
                        <Categories.Card
                            style={{
                                backgroundImage: "url('Body-Plastic-Surgery.jpg')",
                                backgroungPosition: "center",
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                        </Categories.Card>
                    </a>
                    <a href="#">
                        <Categories.Card
                            style={{
                                backgroundImage: "url('Breast-Lift-Surgery.jpg')",
                                backgroungPosition: "center",
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                        </Categories.Card>
                    </a>
                    <a href="#">
                        <Categories.Card
                            style={{
                                backgroundImage: "url('Face-Plastic-Surgeon.jpg')",
                                backgroungPosition: "center",
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                        </Categories.Card>
                    </a>
                    <a href="#">
                        <Categories.Card
                            style={{
                                backgroundImage: "url('Skin-Dermal-Fillers.jpg')",
                                backgroungPosition: "center",
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                        </Categories.Card>
                    </a>
                </Categories.Inner>
            </Categories.Wrapper>
        </Categories>
    )
}
