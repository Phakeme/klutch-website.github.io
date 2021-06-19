import React from 'react'
import { Categories } from '../../../../components'
import { CategoryMap } from './categoryMap'

export function CategoriesContainer() {
    return (
        <Categories>
            <Categories.Wrapper className="margin">
                <Categories.Inner>
                    <CategoryMap
                        to="procedure/body"
                        bg="Body-Plastic-Surgery.jpg"
                    />
                    <CategoryMap
                        to="procedure/breast"
                        bg="Breast-Lift-Surgery.jpg"
                    />
                    <CategoryMap
                        to="procedure/face"
                        bg="Face-Plastic-Surgeon.jpg"
                    />
                    <CategoryMap
                        to="procedure/skin"
                        bg="Skin-Dermal-Fillers.jpg"
                    />
                </Categories.Inner>
            </Categories.Wrapper>
        </Categories>
    )
}