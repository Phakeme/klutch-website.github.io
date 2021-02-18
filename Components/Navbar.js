import React from 'react'
import Image from 'next/image'
import { NavContacts } from './NavContacts'

export const Navbar = () => {
    return (
        <nav class="flex items-center flex-wrap  ">
        <div class="container px-6 mx-6 max-w-6xl max-w-screen-xl mx-auto ">  
        <NavContacts></NavContacts>
        <div class="flex justify-between p-6 items-center flex-no-shrink bg-black w-full">
        <Image src="/../public/brand-logo.svg" alt="me" width="auto" height="50%" />
          <div class="block lg:hidden">
          </div>
            <div class="">
              <div>
                <div class="text-sm lg:flex-grow">
                  <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                    Home
                  </a>
                  <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                    About
                  </a>
                  <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                  Treatments
                  </a>
                  <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                    Contacts
                  </a>
                </div>
              </div>
          </div>
        </div>
        </div> 
      </nav>
    )
}