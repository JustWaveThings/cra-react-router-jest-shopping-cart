/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Product({
	image,
	description,
	title,
	price,
	id,
	handleChange,
	addProductToCart,
	cart
}) {
	const [productQty, setProductQty] = useState(Number(syncCartQty(id)));

	function syncCartQty(id) {
		const item = cart.find((item) => item.id === id);
		return item ? item.qty : 0;
	}

	function handleChange(value) {
		setProductQty(+value);
	}

	function incrementQty() {
		if (productQty >= 0) {
			setProductQty((prevValue) => prevValue + 1);
		}
	}

	function decrementQty() {
		if (productQty >= 1) {
			setProductQty((prevValue) => prevValue - 1);
		}
	}

	return (
		<div className="product--cont">
			<img
				src={`${image}`}
				alt={`${description}`}
				className="product--cont--image"
			/>
			<div className="product--cont--bottom">
				<div className="product--cont--bottom--top">
					<div className="product--name">{title}</div>
					<div className="product--price">${price}</div>
				</div>
				<div className="product--cont--bottom--bottom">
					<div className="product--qty--label">Qty:</div>
					<button
						onClick={() => decrementQty()}
						className="product--qty--increment">
						-
					</button>
					<input
						value={productQty}
						onChange={(e) => handleChange(e.target.value)}
						className="product--qty--input"
						placeholder={0}
						min={0}
						inputMode="numeric"
						step={1}
						pattern="\d*"
					/>

					<button
						onClick={() => incrementQty()}
						className="product--qty--increment">
						+
					</button>
				</div>
				<button
					onClick={() => addProductToCart(id, productQty, price, title)}
					className="product--add--to--cart">
					{' '}
					Add to Cart{' '}
				</button>
			</div>
		</div>
	);
}

export default Product;
