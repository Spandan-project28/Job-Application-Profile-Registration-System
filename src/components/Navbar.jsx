import React from 'react'

const Navbar = ({setIsFormOpen}) => {
  return (
    <nav className="w-full h-16 px-6 bg-zinc-900 border-b border-zinc-800 flex justify-between items-center ">
      <h1 className="text-lg font-bold tracking-wide">logo</h1>
      <h2 className="text-sm font-medium text-zinc-300 cursor-pointer hover:text-white">home</h2>
      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-2xl cursor-pointer transition-colors"
      onClick={()=>{
        setIsFormOpen((prev)=>{
        return !prev
      })
      }}>
        register
      </button>
    </nav>
  )
}

export default Navbar

