import { createContext, useState } from 'react'

export const ProductsContext = createContext()

export const ProductProvider = ({ children }) => {
	const [filters, setFilters] = useState({
		category: 'all',
		minPrice: 0
	})

	return (
		<ProductsContext.Provider value={{ filters, setFilters }}>
			{children}
		</ProductsContext.Provider>
	)
}
