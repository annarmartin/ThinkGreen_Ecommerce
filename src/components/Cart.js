import React from 'react';
import Product from './Product';

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.075; //calculates the taxes
  const totalPrice = itemsPrice + taxPrice; //add price of product and tax
  return (
    <aside className="block col-1">
      <h2>YOUR PLANTS</h2>
      <div>

{/* if the cart is empty show this message */}
        {cartItems.length === 0 && <h4>No items in your cart</h4>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2 cart_item">{item.name}</div>
            <div className="col-2 cart_item">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right cart_item">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

{/* if the cart is not empty then use the following to calculate price */}
        {cartItems.length !== 0 && (  
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>

{/* populate tax price */}
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
{/* Check-out button */}
            <div className="row">
              <button onClick={() => alert('Do you want to checkout?')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}