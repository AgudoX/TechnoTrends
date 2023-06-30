import { useState } from 'react'
import './App.css'
import { Cart } from './components/Cart'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { CartProvider } from './context/cartContext'
import { useFilters } from './hooks/usefilters'
import { products as initialProducts } from './mocks/products.json'

function App() {
	const [products] = useState(initialProducts)

	const { filterProducts } = useFilters()
	const filteredProducts = filterProducts(products)

	return (
		<CartProvider>
			<Header />
			<Cart />
			<div style={{ minHeight: '80vh', minWidth: '60vw' }}>
				{filteredProducts.length > 0 ? (
					<Products products={filteredProducts} />
				) : (
					<p>
						Parece que no hay productos para esta categoría y rango de precios😭
					</p>
				)}
			</div>
			<Footer />
		</CartProvider>
	)
}

export default App
