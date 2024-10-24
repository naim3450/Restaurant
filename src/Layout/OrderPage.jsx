import React from 'react'
import Address from '../Component/Address'
import Container from '../Component/Container'
import CheckoutForm from '../Component/CheckoutForm'
import PaymentMethod from '../Component/PaymentMethod'

const OrderPage = () => {
    return (
        <div className='mt-[7vw]'>
            <Container className={''}>
                <div className="flex justify-between">
                    <div className="w-[65%]">
                        <div className="">
                            <Address />
                        </div>
                        <div className="">
                            <PaymentMethod />
                        </div>
                    </div>

                    <div className="w-[30%]">
                        <CheckoutForm />
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default OrderPage