'use client'

import React from 'react'

const Header = () => {
  return (
    <>
        <header className="text-base-content navbar shadow-sm bg-base-100 [grid-area:header]">
            <button className="btn btn-square btn-ghost">
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
            </button>
            <h1>Header</h1>
      </header>
    </>
  )
}

export default Header