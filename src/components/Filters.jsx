import { useId } from 'react'
import { useFilters } from '../hooks/usefilters'
import { products } from '../mocks/products.json'
import { getUniqueCategories } from '../services/categories'
import './Filters.css'

export const Filters = () => {
	const { filters, setFilters } = useFilters()
	const categories = getUniqueCategories(products)
	const minPriceFilterId = useId()
	const categoryFilterId = useId()

	const handleMinPrice = event => {
		setFilters(filters => {
			return {
				...filters,
				minPrice: Number(event.target.value)
			}
		})
	}

	const handleChangeCategory = event => {
		setFilters(previousFilters => ({
			...previousFilters,
			category: event.target.value
		}))
	}

	return (
		<section className='filters'>
			<div>
				<label htmlFor={minPriceFilterId}>Price</label>
				<span style={{ minWidth: '40px' }}>${filters.minPrice}</span>
				<input
					onChange={handleMinPrice}
					type='range'
					id={minPriceFilterId}
					min='0'
					max='1000'
					style={{ cursor: 'pointer' }}
					value={filters.minPrice}
				/>
			</div>

			<div>
				<label htmlFor={categoryFilterId}>Categoría</label>
				<select id={categoryFilterId} onChange={handleChangeCategory}>
					<option value='all'>Todas</option>
					{categories.map(category => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>
			</div>
		</section>
	)
}
