import React, { useContext, useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
import { SportsContext } from '../../contextApi/SportsContext'
import ThemeToogle from '../ThemeToogle/ThemeToogle'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const { users, userLogOut, currentUser, theme } = useContext(SportsContext)

    const userImg = users?.photoURL || currentUser?.photoURL;



    const links = <>


        <li><NavLink to='/' className={({ isActive }) =>
            `btn border-none shadow-none rounded-md ${isActive ? 'bg-orange-400 text-white' : 'bg-transparent text-black'
            }`}> Home</NavLink></li>
        <li><NavLink to='/alleqepment' className={({ isActive }) =>
            `btn border-none shadow-none rounded-md ${isActive ? 'bg-orange-400 text-white' : 'bg-transparent text-black'
            }`}>All Sports Equipment</NavLink></li>

        {
            users &&
            <div className='flex flex-col lg:flex-row items-center'>
                <li><NavLink to={'/addequipment'} className={({ isActive }) =>
                    `btn border-none shadow-none rounded-md ${isActive ? 'bg-orange-400 text-white' : 'bg-transparent text-black'
                    }`}>Add Equipment</NavLink></li>
                <li><NavLink to={'/myEquepment'} className={({ isActive }) =>
                    `btn border-none shadow-none rounded-md ${isActive ? 'bg-orange-400 text-white' : 'bg-transparent text-black'
                    }`}>My Equipment List</NavLink></li>
            </div>

        }

    </>

    return (
        <>
            <div className='text-center flex items-center justify-center md:hidden'>
                <Link className="btn text-3xl font-bold bg-transparent border-none hover:bg-transparent ">ProGear Sports</Link>
                <ThemeToogle ></ThemeToogle>
            </div>
            <div className={`navbar ${theme === 'dark' ? 'text-black' : 'text-black'}`} >

                <div className="navbar-start">

                    <div className="dropdown">
                        <div
                            onClick={() => { setShowMenu(!showMenu) }}
                            tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content bg-gray-400 rounded-box z-[1] mt-3 w-52 p-2 shadow ${showMenu ? 'block' : 'hidden'
                                }`}>
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link className="btn text-3xl font-bold bg-transparent border-none hover:bg-transparent hidden md:flex items-center">ProGear Sports</Link>
                </div>
                <div className={`navbar-center hidden lg:flex`}>
                    <ul className="menu menu-horizontal px-1  ">
                        {
                            links
                        }
                    </ul>
                </div>


                <div className="navbar-end gap-2 w-[280px] md:w-[100%] lg:w-[43%]">
                    <div className='hidden md:block'>
                        <ThemeToogle ></ThemeToogle>
                    </div>
                    <div className="tooltip tooltip-left" data-tip={users?.displayName || currentUser?.name || "Anonymous User"}>
                        {
                            // Check if either users or currentUser have a photoURL
                            // users?.photoURL || currentUser?.photoURL ?
                            users ? (
                                <img
                                    className="w-[50px] h-[50px] rounded-full"
                                    src={userImg}
                                    alt="user-photo"
                                />
                            ) : (
                                // If no photoURL, display default icon
                                <div className="bg-orange-300 w-[50px] h-[50px] rounded-full flex items-center justify-center">
                                    <FaUser className="text-xl" />
                                </div>
                            )
                        }
                    </div>
                    {
                        users?.email ? <Link onClick={() => { userLogOut() }} className={`${theme === 'dark' ? 'bg-dark text-light' : 'bg-slate-500 text-white'
                            } btn`}>LogOut</Link > : <Link to={'/login'} className={`${theme === 'dark' ? 'bg-dark text-light' : 'bg-slate-500 text-white'
                                } btn`}>Log In</Link >
                    }
                </div>
            </div >
        </>
    )
}

export default Navbar
