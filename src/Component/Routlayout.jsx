import React from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'
import SubNav from './SubNav'
import FooterPart from './FooterPart'

const Routlayout = () => {
    return (
        <div>
            <SubNav />
            <Navber />
            <Outlet />
            <FooterPart />
        </div>
    )
}

export default Routlayout