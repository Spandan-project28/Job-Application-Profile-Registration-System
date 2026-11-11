import React from 'react'

const Card = ({user,id,deleteUser,setUpdatedUser, setIsFormOpen}) => {
  return (
    <div className="w-full h-fit sm:w-80 bg-zinc-900 border border-zinc-800 rounded-3xl p-5 text-white shadow-xl flex flex-col justify-between gap-4">
      <div>
        {/* Header: Avatar + Name + Age */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-linear-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-lg text-white shadow-md">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="text-base font-semibold leading-tight text-white">
              {user.name}
            </h3>
            <span className="text-xs text-zinc-400">
              {user.age}
            </span>
          </div>
        </div>

        {/* Badges: Job Role & Education */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium rounded-xl">
           { user.jobRole}
          </span>
          <span className="px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-medium rounded-xl uppercase">
           { user.education}
          </span>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-2 text-xs text-zinc-400 bg-zinc-950/60 p-3 rounded-2xl border border-zinc-800/80">
          <div className="flex items-center gap-2 truncate">
            <span className="text-zinc-500 font-medium">Email:</span>
            <span className="text-zinc-200 truncate">{user.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-500 font-medium">Phone:</span>
            <span className="text-zinc-200">{user.phone}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-2 border-t border-zinc-800/80">
        <button
          type="button"
          className="flex-1 py-2 px-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          onClick={()=>{
            setUpdatedUser(user)
            setIsFormOpen((prev)=>{
            return !prev
        })
          }}
        >
          Edit
        </button>
        <button
          type="button"
          className="flex-1 py-2 px-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          onClick={()=>{
            deleteUser(id)
          }}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Card
