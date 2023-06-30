export const getUniqueCategories = products => {
	const uniqueCategory = new Set()
	products.forEach(product => {
		uniqueCategory.add(product.category)
	})
	return [...uniqueCategory]
}
