export const CartItem = ({
	id,
	thumbnail,
	title,
	price,
	quantity,
	addToCart
}) => {
	return (
		<li key={id}>
			<img src={thumbnail} alt={title} />
			<div>
				<strong>{title}</strong> - ${price}
			</div>
			<footer>
				<small>
					Qty: <strong>{quantity}</strong>
				</small>
				<button onClick={addToCart}>+</button>
			</footer>
		</li>
	)
}
