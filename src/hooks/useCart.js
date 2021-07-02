import {AppContext} from "../App";
import React from "react"


export const useCart = () => {
  const {cartItems, setCartItems} = React.useContext(AppContext)
  const price =  cartItems.reduce((sum, obj) => obj.price + sum, 0)

  return { cartItems, setCartItems, price }
}