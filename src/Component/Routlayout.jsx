import React from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'
import SubNav from './SubNav'

const Routlayout = () => {
    return (
        <div>
            <SubNav />
            <Navber />
            <Outlet />
        </div>
    )
}

export default Routlayout