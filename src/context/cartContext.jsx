import { createContext, useReducer } from 'react'

export const cartContext = createContext()

const initialState = JSON.parse(localStorage.getItem('cart')) || []

const cartReducer = (state, action) => {
	const { type, payload } = action
	switch (type) {
		case 'add-to-cart': {
			const productInCartIndex = state.findIndex(({ id }) => id === payload.id)
			if (productInCartIndex >= 0) {
				const newCart = structuredClone(state)
				newCart[productInCartIndex].quantity += 1
				localStorage.setItem('cart', JSON.stringify(newCart))
				return newCart
			}

			localStorage.setItem(
				'cart',
				JSON.stringify([
					...state,
					{
						...payload,
						quantity: 1
					}
				])
			)

			return [
				...state,
				{
					...payload,
					quantity: 1
				}
			]
		}
		case 'remove-from-cart': {
			const newCart = state.filter(item => item.id !== payload.id)
			localStorage.setItem('cart', JSON.stringify(newCart))
			return newCart
		}

		case 'clear-cart': {
			localStorage.setItem('cart', JSON.stringify([]))
			return []
		}
		default:
			throw new Error('Invalid action type')
	}
}

export const CartProvider = ({ children }) => {
	const [cart, dispatchCart] = useReducer(cartReducer, initialState)

	const addToCart = product =>
		dispatchCart({ type: 'add-to-cart', payload: product })

	const removeFromCart = product =>
		dispatchCart({ type: 'remove-from-cart', payload: product })

	const clearCart = () => dispatchCart({ type: 'clear-cart' })

	/* 
    const reduceQuantityFromCart = product => {
		const productIndex = cart.findIndex(
			cartProduct => cartProduct.id === product.id
		)

		if (productIndex >= 0) {
			const newCart = structuredClone(cart)
			newCart[productIndex].quantity -= 1
			if (newCart[productIndex].quantity === 0) {
				newCart.splice(productIndex, 1)
			}
			setCart(newCart)
		}
	} */

	return (
		<cartContext.Provider
			value={{ cart, addToCart, removeFromCart, clearCart }}
		>
			{children}
		</cartContext.Provider>
	)
}
