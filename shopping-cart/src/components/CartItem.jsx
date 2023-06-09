/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react';

function CartItem({ cart, removeFromCart }) {
	const checkoutTotal = cart.reduce((acc, val) => acc + val.price * val.qty, 0);
	const displayCartItems = cart.map((item) => (
		<div
			key={item.id}
			className="cart--item--cont">
			<div className="cart--item--title">
				<div>{item.title}</div>
			</div>
			<div className="cart--item--price">
				<div>${item.price}</div>
			</div>
			<div className="cart--item--qty">
				<div className="product--qty--input cart">{item.qty}</div>
			</div>
			<div className="cart--item--delup">
				<button
					onClick={() => removeFromCart(item.id)}
					className="product--qty--increment">
					Remove
				</button>
			</div>

			<div className="cart--item--total">
				<div>${(item.price * item.qty).toFixed(2)}</div>
			</div>
		</div>
	));

	return (
		<Fragment>
			{checkoutTotal === 0 ? (
				<h1 className="loading--text">Your cart is empty!</h1>
			) : (
				<Fragment>
					<h2 className="cart--title">Your Order:</h2>

					{displayCartItems}
					<h3 className="cart--table--checkoutTotal">
						Checkout Total: ${checkoutTotal.toFixed(2)}
					</h3>
					<button
						className="cart--table-checkoutButton"
						disabled>
						Check Out
					</button>
				</Fragment>
			)}
		</Fragment>
	);
}

export default CartItem;
