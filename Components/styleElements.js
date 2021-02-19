import Link from 'next/link'
import styled from 'styled-components'

// const RedLink = styled.a`
//   color: white;
//   display: block;
//   margin-right: 4rem;
// `

// className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"

function NavLink({ href, name }) {
    // Must add passHref to Link
    return (
      <Link href={href} passHref>
        <a className="text-white ml-5 hover:bg-pink p-3">{name}</a>
      </Link>
    )
  }
  
  export default NavLink