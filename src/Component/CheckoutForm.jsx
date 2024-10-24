import React, { useContext, useState } from 'react';
import Context from '../Context/Context';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        deliveryMethod: 'standard',
        paymentMethod: 'creditCard',
    });

    const [orderSummary] = useState({
        subTotal: 0,
        VAT: 15,
        deliveryFee: 60,
    });

    const vatAmount = (orderSummary.subTotal * orderSummary.VAT) / 100;
    const totalPayable = orderSummary.subTotal + vatAmount + orderSummary.deliveryFee;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Checkout Submitted:', { ...formData, totalPayable });
        alert('Order placed successfully!');
    };

    const { checkOut, handlePlaceOrder } = useContext(Context)

    let Subtotal = Number((checkOut.quantity * checkOut.price).toFixed(2))
    let VAT = Number((checkOut.quantity * checkOut.price) * 0.15)
    let Fee = Number(1)


    return (
        <div className="max-w-lg mx-auto p-6 bg-white border-2 rounded-xl">
            <h2 className="text-xl font-serif font-bold mb-6 text-center text-gray-800">Your Order</h2>
            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Billing Information */}
                <div className="space-y-4">
                    <h3 className="text-lg font-montserrat font-semibold text-gray-700">Billing Information</h3>
                    <div className="border p-2">
                        <h3 className='flex justify-between items-center font-semibold'>{checkOut.quantity + 'x' + '-' + checkOut.name}
                            <span className='font-semibold'>{checkOut.Variation}</span>
                            <span className='text-btn'>${checkOut.price}</span>
                        </h3>
                    </div>
                    <div className="flex flex-col gap-4">

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-montserrat font-medium text-gray-600 mb-1">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border font-montserrat text-sm border-gray-300 rounded-full focus:border-btn"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-montserrat font-medium text-gray-600 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border font-montserrat text-sm border-gray-300 rounded-full focus:border-btn"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    {/* Delivery Address */}
                    <div>
                        <label className="block font-montserrat text-sm font-medium text-gray-600 mb-1">Delivery Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border font-montserrat text-sm border-gray-300 rounded-lg"
                            placeholder="Enter your address"
                            required
                        />
                    </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold font-montserrat text-gray-700">Payment Method</h3>
                    <div className="flex items-center space-x-6">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="creditCard"
                                checked={formData.paymentMethod === 'creditCard'}
                                onChange={handleInputChange}
                                className="form-radio h-5 w-5 text-primary"
                            />
                            <span className="ml-2 text-sm font-montserrat text-gray-600">Credit Card</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="cash"
                                onChange={handleInputChange}
                                className="form-radio h-5 w-5 text-primary"
                            />
                            <span className="ml-2 text-sm font-montserrat text-gray-600">Cash on Delivery</span>
                        </label>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold font-montserrat text-gray-800 mb-3">Order Summary</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between font-montserrat">
                            <span>Subtotal</span>
                            <span>${Subtotal}</span>
                        </div>
                        <div className="flex justify-between font-montserrat">
                            <span>VAT ({orderSummary.VAT}%)</span>
                            <span>${VAT.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-montserrat">
                            <span>Delivery Fee</span>
                            <span>${Fee}</span>
                        </div>
                        <div className="flex justify-between font-semibold font-montserrat text-gray-800">
                            <span>Total Payable</span>
                            <span>${(Subtotal + VAT + Fee).toFixed(1)}</span>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    onClick={handlePlaceOrder}
                    type="submit"
                    className="w-full bg-primary font-montserrat text-white py-3 rounded-full font-semibold bg-btn transition-all"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;