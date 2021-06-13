import React from 'react'
import { Header } from '../../../components'
import { useRouter } from 'next/router'
import Link from 'next/link'

export function HeaderMap(props) {
    const router = useRouter()
    return (
        <Header.LinkItem>
            <Link href={props.to}>
                <li
                    className={router.pathname == props.to ? "active" : "not-active"}
                >
                    <a>{props.label}</a>
                </li>
            </Link>
        </Header.LinkItem>
    )
}