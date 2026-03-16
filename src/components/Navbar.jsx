import React, { useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const MenuLink = ({ to, children, className = "" }) => (
    <Link
      smooth
      to={to}
      className={`text-white hover:text-gray-300 ${className}`}
      onClick={() => setOpen(false)}
    >
      {children}
    </Link>
  )

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[7vh] border-b border-[rgba(255,255,255,0.08)] bg-[#020617]/80 backdrop-blur-[12px] flex items-center px-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2 sm:gap-3 items-center">
          <img src="/Me.webp" alt="" className="h-[5vh] w-8 sm:w-10 rounded-full object-cover border border-white/20" />
          <p className="text-bold text-sm sm:text-lg md:text-2xl text-white font-bold truncate max-w-[120px] sm:max-w-none">Burhanuddin</p>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 px-5 text-sm sm:text-base">
          <MenuLink to="#home" className="hover:text-blue-400 transition-colors">Home</MenuLink>
          <MenuLink to="#about" className="hover:text-blue-400 transition-colors">About</MenuLink>
          <MenuLink to="#projects" className="hover:text-blue-400 transition-colors">Projects</MenuLink>
          <MenuLink to="#contact" className="hover:text-blue-400 transition-colors">Contact</MenuLink>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded hover:bg-white/10 transition-colors"
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
        <div className="md:hidden absolute right-4 top-[7vh] bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl py-4 px-6 flex flex-col gap-3 z-50">
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