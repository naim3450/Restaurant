import React, { useEffect, useReducer } from 'react'
import Context from './Context'
import { reducer } from './reducer'
import dish from '../assets/Food/dish.png'
import dish2 from '../assets/Food/dish2.png'
import dish3 from '../assets/Food/dish3.png'
import dish4 from '../assets/Food/dish4.png'
import f1 from '../assets/Food/f1.png'
import f2 from '../assets/Food/f2.png'
import f3 from '../assets/Food/f3.png'
import f4 from '../assets/Food/f4.png'
import f5 from '../assets/Food/f5.png'
import f6 from '../assets/Food/f6.png'
import f7 from '../assets/Food/f7.png'
import f8 from '../assets/Food/f8.png'
import f9 from '../assets/Food/f9.png'
import f10 from '../assets/Food/f10.png'
import f11 from '../assets/Food/f11.png'
import f12 from '../assets/Food/f12.png'
import f13 from '../assets/Food/f13.png'
import f14 from '../assets/Food/f14.png'
import f15 from '../assets/Food/f15.png'
import f16 from '../assets/Food/f16.png'
import f17 from '../assets/Food/f17.png'
import f18 from '../assets/Food/f18.png'
import f19 from '../assets/Food/f19.png'
import f20 from '../assets/Food/f20.png'


const getLOcalStore = () => {
    const localsotreData = localStorage.getItem("FoodList")
    if (!localsotreData) {
        return []
    }
    else {
        return JSON.parse(localsotreData)
    }
}

console.log()


const inisialState = {
    FoodBank: [],
    filtterFood: [],
    featureFood: [],
    popUp: false,
    popUpCart: [],
    cart: getLOcalStore()
}

const ContextState = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, inisialState)

    const api = [
        {
            id: 1,
            name: "Chiken And Salad",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 3.6,
            image: dish3,
            category: "Main Dishes",
            feature: true,
        },
        {
            id: 2,
            name: "Pizza",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 3.5,
            image: f10,
            category: "Main Dishes",
            feature: false,
        },
        {
            id: 3,
            name: "Omlet",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 1.5,
            image: f9,
            category: "Breakfast",
            feature: false,
        },
        {
            id: 4,
            name: "Grill",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 4.2,
            image: dish2,
            category: "Main Dishes",
            feature: true,
        },
        {
            id: 5,
            name: "Rmin",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 2.3,
            image: f13,
            category: "Breakfast",
            feature: false,
        },
        {
            id: 6,
            name: "Sallat",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 1.4,
            image: f7,
            category: "Breakfast",
            feature: false,
        },
        {
            id: 7,
            name: "Omlet",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 1.5,
            image: dish4,
            category: "Breakfast",
            feature: true,
        },
        {
            id: 8,
            name: "Butter Chicken Taco",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 1.15,
            image: f1,
            category: "Breakfast",
            feature: false,
        },
        {
            id: 9,
            name: "Chicken Burger",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 1.15,
            image: f2,
            category: "Main Dishes",
            feature: false,
        },
        {
            id: 10,
            name: "Cake",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 1.15,
            image: f3,
            category: "Desserts",
            feature: false,
        },
        {
            id: 11,
            name: "Fries",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 1.5,
            image: f4,
            category: "Main Dishes",
            feature: false,
        },
        {
            id: 12,
            name: "sandwich",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 1.5,
            image: f5,
            category: "Main Dishes",
            feature: false,
        },
        {
            id: 13,
            name: "Main Dishes",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 5.2,
            image: dish,
            category: "Main Dishes",
            feature: true,
        },
        {
            id: 14,
            name: "Pastry",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 5.2,
            image: f11,
            category: "Desserts",
            feature: false,
        },
        {
            id: 15,
            name: "Pan Cake",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 4.3,
            image: f12,
            category: "Desserts",
            feature: false,
        },
        {
            id: 16,
            name: "Burger",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 1.5,
            image: f6,
            category: "Breakfast",
            feature: false,
        },
        {
            id: 17,
            name: "Lemon Cocktail",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 4.3,
            image: f14,
            category: "Drinks",
            feature: false,
        },
        {
            id: 18,
            name: "Juice",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 2.4,
            image: f15,
            category: "Drinks",
            feature: false,
        },
        {
            id: 19,
            name: "Burger",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 1.9,
            image: f16,
            category: "Main Dishes",
            feature: false,
        },
        {
            id: 20,
            name: "French Frise",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 3.4,
            image: f17,
            category: "Main Dishes",
            feature: false,
        },
        {
            id: 21,
            name: "French Frise",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 3.4,
            image: f18,
            category: "Main Dishes",
            feature: false,
        },
        {
            id: 22,
            name: "Desserts",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 3.4,
            image: f19,
            category: "Desserts",
            feature: false,
        },
        {
            id: 23,
            name: "Pen cake",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 3.4,
            image: f20,
            category: "Desserts",
            feature: false,
        },
        {
            id: 24,
            name: "Roll",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aut expedita possimus commodi, sit odio voluptatibus beatae.',
            price: 1.8,
            image: f8,
            category: "Breakfast",
            feature: false,
        },
    ]


    useEffect(() => {
        dispatch({
            type: "data",
            payload: api
        })
    }, [])


    // category part start
    const activeCategory = (el) => {
        dispatch({
            type: "category",
            payload: el
        })
    }
    // category part end


    // AddcartPopUp part Start
    const AddcartPopUp = (id) => {
        dispatch({
            type: "popUp",
            payload: id
        })
    }
    // AddcartPopUp part end


    // addToCart part start
    const addToCart = (id, quantity) => {
        dispatch({
            type: "addToCart",
            payload: { id, quantity }
        })
    }
    // addToCart part end

    // Close part start
    const Close = () => {
        dispatch({
            type: "Close",
        })
    }

    // Close part end 

    // removeCart part start
    const removeCart = (id) => {
        dispatch({
            type: "removeCart",
            payload: id
        })
    }
    // removeCart part end 


    // localsotre start 
    useEffect(() => {
        localStorage.setItem("FoodList", JSON.stringify(state.cart))
    }, [state.cart])
    // localsotre end

    // increment start 
    const increment = (id) => {
        dispatch({
            type: "increment",
            payload: id
        })
    }
    // increment end


    // decrement start 
    const decrement = (id) => {
        dispatch({
            type: "decrement",
            payload: id
        })
    }
    // decrement end
    return (
        <Context.Provider value={{ ...state, AddcartPopUp, addToCart, activeCategory, Close, removeCart, increment, decrement }}>
            {children}
        </Context.Provider>
    )
}

export default ContextState