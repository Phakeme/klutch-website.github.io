import React from 'react'
import Link from 'next/link'
import { Categories } from '../../../components'

export function CategoriesContainer() {
    return (
        <Categories>
            <Categories.Wrapper className="margin">
                <Categories.Inner>
                    <Link href="/body-procedures">
                        <a>
                            <Categories.Card
                                style={{
                                    backgroundImage: "url('Body-Plastic-Surgery.jpg')",
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
                    <Link href="/breast-procedures">
                        <a>
                            <Categories.Card
                                style={{
                                    backgroundImage: "url('Breast-Lift-Surgery.jpg')",
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
                    <Link href="/face-procedures">
                        <a>
                            <Categories.Card
                                style={{
                                    backgroundImage: "url('Face-Plastic-Surgeon.jpg')",
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
                    <Link href="/skin-procedures">
                        <a>
                            <Categories.Card
                                style={{
                                    backgroundImage: "url('Skin-Dermal-Fillers.jpg')",
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
                </Categories.Inner>
            </Categories.Wrapper>
        </Categories>
    )
}
