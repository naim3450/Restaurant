import React, { useContext, useState } from 'react'
import Context from '../Context/Context'

const CardThead = ({ item }) => {

    const { id, name, price, quantity, image, Variation } = item

    const [cartQu, setcartQu] = useState(quantity)

    const { removeCart, increment, decrement } = useContext(Context)
    return (
        <tbody>
            <tr>
                <td className="py-4 pl-4 border-b flex items-center">
                    <img src={image} alt="Product Image" className="w-16 h-16 object-cover mr-2" />
                    <span className='text-[16px] font-semibold'>{name}</span>
                </td>

                <td className="py-4 px-4 border-b">${price}</td>

                <td className="py-4 px-4 border-b">
                    <div className="flex items-center">
                        <button onClick={() => decrement(id)} className="bg-gray-200 px-4 h-[36px] rounded">
                            -
                        </button>

                        <span className="px-4 h-[36px] border flex items-center justify-center">{quantity}</span>

                        <button onClick={() => increment(id)} className="bg-gray-200 px-4 h-[36px] rounded">+</button>
                    </div>
                </td>

                <td className="py-4 px-4 border-b">
                    <div className="w-[2vw]">
                        <option className='w-[3.5vw]'>
                            {Variation}
                        </option>
                    </div>
                </td>

                <td className="py-4 px-4 border-b" id="subtotal">${(price * quantity).toFixed()}</td>
                <td className="py-4 px-4 border-b">
                    <button className="text-red-600 hover:text-red-800" onClick={() => removeCart(id)}>Remove</button>
                </td>
            </tr>

        </tbody>
    )
}

export default CardThead