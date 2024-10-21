import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ text, className, to }) => {
    return (
      <Link to={to}>
        <li className={`${className} list-none text-prh2 text-2xl py-[4px] px-[16px] rounded-[34px] font-semibold font-montserrat`}>{text}</li>
      </Link>
    )
}

export default List