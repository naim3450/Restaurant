import React from 'react'

const Button = ({ text, className }) => {
    return (
        <button className={`${className} py-[20px] px-[32px] rounded-[118px] text-[16px] leading-[24px] border-[1px] font-bold`}>
            {text}
        </button>
    )
}

export default Button