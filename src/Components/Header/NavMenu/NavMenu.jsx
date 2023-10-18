'use client';

import { Dropdown, Navbar, Avatar, DarkThemeToggle, Flowbite } from 'flowbite-react';
import { } from "flowbite-react";
import { useState } from 'react';

const NavMenu = () => {
  const [toggleLogo, setToggleLogo] = useState(false);

  const handleDarkMode = () => {
   
      setToggleLogo((current) => !current)
   
    console.log(toggleLogo);
  }
  return (
    <Navbar fluid>
      <Navbar.Brand href="/">        
        {
          toggleLogo ? <img src="/monaem-light.svg" className="mr-3 h-6 sm:h-9" alt="monaem Logo" /> : <img src="/monaem-dark.svg" className="mr-3 h-6 sm:h-9" alt="monaem Logo" />
        }
      </Navbar.Brand>


      <div className="flex md:order-2">

        <div onClick={handleDarkMode}>
          <Flowbite>
            <DarkThemeToggle className='mr-2' />
          </Flowbite>
        </div>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >

          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Shop</Navbar.Link>
        <Navbar.Link href="#">Blog</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <Navbar.Link href="#">My Cart</Navbar.Link>
        <Navbar.Link href="#">Add Product</Navbar.Link>
      </Navbar.Collapse>

    </Navbar>
  )
}




export default NavMenu;



