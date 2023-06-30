import { useContext } from 'react'
import { ProductsContext } from '../context/productsContext'

export const useFilters = () => {
	const { filters, setFilters, page, setPage } = useContext(ProductsContext)

	const incrementPage = () => {
		setPage(page + 1)
	}

	const decrementPage = () => {
		setPage(page - 1)
	}

	const resetPage = () => {
		setPage(1)
	}

	const paginatedProducts = (products, itemsPerPage, page) => {
		const startIndex = itemsPerPage * (page - 1)
		const endIndex = startIndex + itemsPerPage
		return products.slice(startIndex, endIndex)
	}

	const filterProducts = products => {
		return products.filter(product => {
			return (
				product.price >= filters.minPrice &&
				(filters.category === 'all' || product.category === filters.category)
			)
		})
	}

	return {
		filterProducts,
		filters,
		setFilters,
		incrementPage,
		decrementPage,
		paginatedProducts,
		resetPage,
		page
	}
}
