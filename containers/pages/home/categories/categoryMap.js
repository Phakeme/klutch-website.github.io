import React from 'react'
import Link from 'next/link'
import { Categories } from '../../../../components'

export function CategoryMap({ to, bg }) {
    return (
        <>
            <Link href={to}>
                <a>
                    <Categories.Card
                        style={{
                            backgroundImage: `url(${bg})`,
                            backgroungPosition: "center",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}>
                        <Categories.InnerBox>
                            <Categories.Text>
                                Learn more
                            </Categories.Text>
                        </Categories.InnerBox>
                    </Categories.Card>
                </a>
            </Link>
        </>
    )
}