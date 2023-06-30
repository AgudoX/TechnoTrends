import { useFilters } from '../hooks/usefilters'

export const Pagination = ({ totalPages }) => {
	const { page, incrementPage, decrementPage } = useFilters()
	console.log(totalPages)
	return (
		<div style={{ display: 'flex', gap: '3rem', justifyContent: 'center' }}>
			<button onClick={decrementPage} disabled={page <= 1}>
				⏮ Anterior
			</button>

			<button disabled={page >= totalPages} onClick={incrementPage}>
				Siguiente ⏭
			</button>
		</div>
	)
}
