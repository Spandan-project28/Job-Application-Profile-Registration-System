import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Card from './components/Card'

const App = () => {

    const [isFormOpen,setIsFormOpen]=useState(false)
    const [users,setUsers]=useState(()=>{
      return JSON.parse(localStorage.getItem("users"))||[]
    })

    console.log(users)

    const deleteUser=(id)=>{
      let filteredUser=users.filter((user)=>{
        return id!==user.id
      })

      localStorage.setItem("users",JSON.stringify(filteredUser))

      setUsers(filteredUser)

      console.log(filteredUser)
    }

    const [updatedUser,setUpdatedUser]=useState()

   
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white p-2 flex flex-col gap-4">
      <Navbar setIsFormOpen={setIsFormOpen} />
      <main>
        { isFormOpen?<Form setUsers={setUsers} users={users} setIsFormOpen={setIsFormOpen} updatedUser={updatedUser} setUpdatedUser={setUpdatedUser}/>:
        (<div className="card-Container h-screen w-full flex flex-row gap-2 flex-wrap">
          {users.map((user)=>{
          return <Card user={user} key={user.id} id={user.id} deleteUser={deleteUser} setUpdatedUser={setUpdatedUser} setIsFormOpen={setIsFormOpen}/>
        })}
        </div>) }
      </main>
    </div>
  )
}

export default App
