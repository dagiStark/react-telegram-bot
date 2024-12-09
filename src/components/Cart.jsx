import Button from "./Button";
import PropTypes from "prop-types";

function Cart({ cartItems, onCheckout }) {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="flex justify-center items-center mt-12 ml-12">
      {cartItems.length === 0 && "No items in cart"}
      <br /> <span>Total Price: ${totalPrice.toFixed(2)}</span>
      <Button
        title={`${cartItems.length === 0 ? "Order" : "Checkout"}`}
        type={"checkout"}
        onClick={onCheckout}
        disable={cartItems.length === 0}
      />
    </div>
  );
}

export default Cart;

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onCheckout: PropTypes.func.isRequired,
};
