import React, { useContext } from 'react'
import Context from '../Context/Context'
import Container from '../Component/Container'
import CardThead from '../Component/CardThead'

const AddToCartPage = () => {

    const { cartPage } = useContext(Context)

    return (
        <div className='mt-[8vw]'>
            <Container>
                <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>
                <div>
                    <div className="mx-auto p-6">
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-300">
                                        <th className="py-2 px-4 border-b text-left">Product</th>
                                        <th className="py-2 px-4 border-b text-left">Price</th>
                                        <th className="py-2 px-4 border-b text-left">Quantity</th>
                                        <th className="py-2 px-4 border-b text-left">Size:</th>
                                        <th className="py-2 px-4 border-b text-left">Subtotal</th>
                                        <th className="py-2 px-4 border-b text-left">Remove</th>
                                    </tr>
                                </thead>
                                {
                                    cartPage.map((item, idx) => {
                                        return (
                                            <CardThead key={idx} item={item} />
                                        )
                                    })
                                }

                            </table>
                        </div>

                        <div className="mt-6 flex justify-between">
                            <button className="bg-btn text-white font-semibold px-4 py-2 rounded">
                                Continue Shopping
                            </button>
                            <button className="bg-btn text-white font-semibold px-4 py-2 rounded">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AddToCartPage