import React, { useReducer, useState } from 'react'

const initialState = {
    items: [],
    totalPrice: 0,
    itemCount: 0
}

const reducer = (state, action) =>{
    switch(action.type)
    {
        case 'ADD_ITEM':
            return{
                ...state,
                items: [...state.items, action.payload],
                totalPrice: state.totalPrice + action.payload.price,
                itemCount: state.itemCount + 1

            }
        
        case 'REMOVE_ITEM':
            return{
                ...state,
                items: state.items.filter(item=>item.id !== action.payload.id),
                totalPrice: state.totalPrice - action.payload.price,
                itemCount: state.itemCount - 1
            }

        case 'CLEAR_CART':
            return initialState
        
        default:
            return state
    }
}

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>Welcome to the shop. We are glad to have you here</h1>
        <p>Cart list: items: {state.items.map(item=>(
            <p key={item.id}>{item.name}</p>
        ))}
        total price: {state.totalPrice}
        number of items: {state.itemCount}
        </p>
        <button onClick={()=>dispatch({
            type: 'ADD_ITEM',
            payload: {id:1, name: 'Banana', price: 3}
        })}>Add to cart</button>
        <button onClick={()=>dispatch({
            type: 'REMOVE_ITEM',
            payload: {id:1, name: 'Banana', price: 3}
        })}>Remove to cart</button>
        <button onClick={()=>dispatch({type: 'CLEAR_CART'})}>Clear cart</button>
      
    </div>
  )
}

export default ShoppingCart
