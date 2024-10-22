import React from 'react'

const FooterList = ({ text, className }) => {
    return (
        <li className={`${className} list-none text-prh2 text-base py-[4px] px-[16px] rounded-[34px] font-semibold font-montserrat`}>{text}</li>
    )
}

export default FooterList