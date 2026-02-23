import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const MenuLink = ({ to, children }) => (
    <Link
      smooth
      to={to}
      className="text-white hover:text-gray-300"
      onClick={() => setOpen(false)}
    >
      {children}
    </Link>
  )

  return (
    <nav className="relative h-[7vh] border-b-[0.01px] border-white flex items-center px-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-3 items-center">
          <img src="/Me.webp" alt="" className="h-[5vh] rounded" />
          <p className="text-bold text-lg md:text-2xl text-white font-bold">Burhanuddin AliAsghar</p>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 px-5">
          <MenuLink to="#home">Home</MenuLink>
          <MenuLink to="#about">About</MenuLink>
          <MenuLink to="#projects">Projects</MenuLink>
          <MenuLink to="#contact">Contact</MenuLink>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded hover:bg-white/5"
          onClick={() => setOpen(v => !v)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden absolute right-4 top-[7vh] bg-black/80 border border-white/10 rounded shadow-lg py-4 px-6 flex flex-col gap-3 z-50">
          <MenuLink to="#home">Home</MenuLink>
          <MenuLink to="#about">About</MenuLink>
          <MenuLink to="#projects">Projects</MenuLink>
          <MenuLink to="#contact">Contact</MenuLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar