import React, { useState } from 'react'
import Container from "../container/Container"
import {Link} from "react-router-dom"
import LogoutBtn from './LogoutBtn'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from "../../assets/logo.png"
import close from "../../assets/icon-close.svg"
import hamburger from "../../assets/icon-hamburger.svg"


function Header() {
    const authStatus = useSelector((state) => state.auth.status)

    const [navOpen, setNavOpen] = useState(false)

    const closeNavbar = () => {
      setNavOpen(false)
    }
  
    const toggleNavbar =() => {
      setNavOpen(!navOpen)
    }

    const navigate = useNavigate()

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus
        },
        {
            name: "My Posts",
            slug: "/my-posts",
            active: authStatus
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus
        },
    ]

  return (
    <header className='py-3 bg-white shadow sticky top-0 z-50 px-0 md:px-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20'>
        <Container>
            <nav className='flex justify-between flex-wrap items-center'>
                <div className='mr-4'>
                    <Link to="/" onClick={closeNavbar}>
                        <img src={logo} alt="logo" className='w-[200px] h-[65px]' />
                    </Link>
                </div>
                
                <div className='md:hidden mr-4'>
                <button onClick={toggleNavbar}><img src={navOpen ? close : hamburger} alt="" /></button>
                </div>
                <ul className={`ml-auto md:w-auto md:items-center md:flex-row  md:flex ${navOpen? "w-full flex flex-col items-center" : "hidden" }`}>
                    {
                        navItems.map((item) => item.active ? (
                            <li key={item.name}>
                                <button
                                onClick={() => navigate(item.slug)}
                                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full font-Roboto'
                                >
                                    {item.name}
                                </button>
                            </li>
                        ) : null)
                    }
                    {authStatus && (
                        <li>
                            <LogoutBtn />
                        </li>
                    )}
                </ul>
            </nav>
        </Container>
    </header>
  )
}

export default Header