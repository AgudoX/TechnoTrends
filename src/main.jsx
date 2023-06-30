import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ProductProvider } from './context/productsContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<ProductProvider>
		<App />
	</ProductProvider>
)
