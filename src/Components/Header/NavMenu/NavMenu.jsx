import { Dropdown, Navbar, Avatar, DarkThemeToggle, Flowbite } from 'flowbite-react';
import { } from "flowbite-react";
import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext';


const NavMenu = () => {
  const [toggleLogo, setToggleLogo] = useState(false);

  const { user, signOutUser } = useContext(AuthProvider)

  // console.log(user.displayName);
  const handleDarkMode = () => {
    setToggleLogo((current) => !current)
  }
  const handleSignOut = () => {
    // e.preventDefault()
    signOutUser()
      .then(succ => console.log(succ))
      .catch(error => console.log(error))
  }

  return (
    <Navbar fluid className='dark:bg-darkTheme dark:text-white'>
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
        {
          user ?
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={user?.photoURL} rounded />
              }
            >

              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">{user.email}</span>
              </Dropdown.Header>

              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
            </Dropdown>
            :
            <div className='grid justify-center items-center'>

              <NavLink to="/sign-in" className='font-semibold'>Sign In</NavLink>

            </div>
        }
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-500" : ""
          }>Home</NavLink>
        <NavLink to="/shop"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-500" : ""
          }>Shop</NavLink>
        <NavLink to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-500" : ""
          }>Blog</NavLink>
        <NavLink to="/my-cart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-500" : ""
          }>My Cart</NavLink>
        <NavLink to="/add-product"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-blue-500" : ""
          }>Add Product</NavLink>
        
      </Navbar.Collapse>

    </Navbar>
  )
}

export default NavMenu;



