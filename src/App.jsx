import { useState } from 'react'
import './App.css'
import { Cart } from './components/Cart'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Pagination } from './components/Pagination'
import { Products } from './components/Products'
import { CartProvider } from './context/cartContext'
import { useFilters } from './hooks/usefilters'
import { products as initialProducts } from './mocks/products.json'
const ITEMS_PER_PAGE = 8
function App() {
	const [products] = useState(initialProducts)

	const { filterProducts, paginatedProducts, page } = useFilters()
	const filteredProducts = filterProducts(products)
	const items = paginatedProducts(filteredProducts, ITEMS_PER_PAGE, page)
	const totalPages = (filteredProducts.length / ITEMS_PER_PAGE).toFixed(0)
	return (
		<CartProvider>
			<Header />
			<Cart />
			<div style={{ minHeight: '80vh', minWidth: '60vw' }}>
				{filteredProducts.length > 0 ? (
					<Products products={items} />
				) : (
					<p>
						Parece que no hay productos para esta categoría y rango de precios😭
					</p>
				)}
				<Pagination totalPages={totalPages} />
			</div>
			<Footer />
		</CartProvider>
	)
}

export default App
