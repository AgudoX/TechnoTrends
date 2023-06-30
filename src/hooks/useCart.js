import { useContext } from 'react'
import { cartContext } from '../context/cartContext'

export const useCart = () => {
	const context = useContext(cartContext)

	if (!context)
		throw new Error('You should use this hook within the cartContext provider')

	return context
}
