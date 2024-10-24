import React from 'react'

const Button = ({ text, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`${className} py-[15px] px-[32px] cursor-pointer rounded-[118px] text-[16px] leading-[24px] border-[1px] font-bold`}>
            {text}
        </button>
    )
}

export default Button