import { useContext } from 'react'
import { ProductsContext } from '../context/productsContext'

export const useFilters = () => {
	const { filters, setFilters } = useContext(ProductsContext)

	const filterProducts = products => {
		return products.filter(product => {
			return (
				product.price >= filters.minPrice &&
				(filters.category === 'all' || product.category === filters.category)
			)
		})
	}

	return { filterProducts, filters, setFilters }
}
