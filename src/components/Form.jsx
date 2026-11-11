import React from 'react'
import { useForm } from "react-hook-form"
import { nanoid } from 'nanoid';

const Form = ({setUsers, users, setIsFormOpen,updatedUser,setUpdatedUser}) => {

    let{register,reset,handleSubmit,formState:{errors}}=useForm(
      {mode: "onChange",
        defaultValues: updatedUser
      }
    )

   
    
  return (
    <div className="flex justify-center items-center w-full min-h-screen p-4 bg-zinc-950 text-white">
      <div className="w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Job Registration
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            Please enter your details to register for the job role.
          </p>
        </div>

        {/* Form UI */}
        <form className="flex flex-col gap-4"
        onSubmit={ handleSubmit((data)=>{

          if(updatedUser){

            let updatedUserArray= users.map((user)=>{
          if (user.id===updatedUser.id){

            return {...data,id:updatedUser.id}

          }else{
            return user
          }
      })

      localStorage.setItem("users",JSON.stringify(updatedUserArray))

      setUsers(updatedUserArray)

      setUpdatedUser("")

          }else{
        console.log(data)

        let userArray=[...users,{...data,id:nanoid()}]

          localStorage.setItem("users",JSON.stringify(userArray))

        setUsers(userArray)
          }

        reset()
        setIsFormOpen((prev)=>{
            return !prev
        })
    })}>
          {/* Row 1: Name & Age */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. John Doe"
                className="w-full bg-zinc-800/80 border border-zinc-700 rounded-2xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                {...register("name",
                    {required: "name required!"}
                )
                }
              />
              {errors.name && <p className='text-red-500 relative left-20'>{errors.name.message}</p>}
              
            </div>

            {/* Age */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="age" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                placeholder="e.g. 23"
                className="w-full bg-zinc-800/80 border border-zinc-700 rounded-2xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                {...register("age",
                    {required: "age required!"}
                )}
              />
              {errors.age && <p className='text-red-500 relative left-20'>{errors.age.message}</p>}
            </div>
          </div>

          {/* Row 2: Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="e.g. 9876543210"
                className="w-full bg-zinc-800/80 border border-zinc-700 rounded-2xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                {...register("phone",
                    {minLength:{

                        value:10,
                        message:"minimum 10 characters"
                    },
                    maxLength:{

                        value:10,
                        message:"maxiumum 10 characters"

                    },

                    required:"phone number required!"
                }
                )}
              />
              {errors.phone && <p className='text-red-500 relative left-20'>{errors.phone.message}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="e.g. john@example.com"
                className="w-full bg-zinc-800/80 border border-zinc-700 rounded-2xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                {...register("email",
                    {required:"email id required!",
                        pattern:{
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address!"

                    }}
                )}
              />
              {errors.email && <p className='text-red-500 relative left-20'>{errors.email.message}</p>}
            </div>
          </div>

          {/* Row 3: Education & Job Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Education */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="education" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Education
              </label>
              <select
                id="education"
                name="education"
                defaultValue=""
                className="w-full bg-zinc-800/80 border border-zinc-700 rounded-2xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
                {...register("education",
                    {required:"education required!"}
                )}
              >
                {errors.education && <p className='text-red-500 relative left-20'>{errors.education.message}</p>}

                <option value="" disabled className="bg-zinc-900 text-zinc-500">
                  Select Education
                </option>
                <option value="btech" className="bg-zinc-900 text-white">B.Tech</option>
                <option value="mtech" className="bg-zinc-900 text-white">M.Tech</option>
                <option value="phd" className="bg-zinc-900 text-white">PhD</option>
                <option value="bca" className="bg-zinc-900 text-white">BCA</option>
                <option value="bsc" className="bg-zinc-900 text-white">B.Sc</option>
                <option value="mca" className="bg-zinc-900 text-white">MCA</option>
                <option value="msc" className="bg-zinc-900 text-white">M.Sc</option>
              </select>
            </div>

            {/* Job Role */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="jobRole" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                Job Role
              </label>
              <select
                id="jobRole"
                name="jobRole"
                defaultValue=""
                className="w-full bg-zinc-800/80 border border-zinc-700 rounded-2xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
                {...register("jobRole",
                    {required:"job role required!"}
                )}
              >
                {errors.jobRole && <p className='text-red-500 relative left-20'>{errors.jobRole.message}</p>}

                <option value="" disabled className="bg-zinc-900 text-zinc-500">
                  Select Role
                </option>
                <option value="Frontend Developer" className="bg-zinc-900 text-white">Frontend Developer</option>
                <option value="Backend Developer" className="bg-zinc-900 text-white">Backend Developer</option>
                <option value="Full Stack Developer" className="bg-zinc-900 text-white">Full Stack Developer</option>
                <option value="UI/UX Designer" className="bg-zinc-900 text-white">UI/UX Designer</option>
                <option value="DevOps Engineer" className="bg-zinc-900 text-white">DevOps Engineer</option>
                <option value="Data Analyst / Scientist" className="bg-zinc-900 text-white">Data Analyst / Scientist</option>
                <option value="Mobile App Developer" className="bg-zinc-900 text-white">Mobile App Developer</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4 pt-2">
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-2xl shadow-lg shadow-blue-600/30 transition-all cursor-pointer text-sm"
            >
              Register Candidate
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form

