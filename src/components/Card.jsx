import PropTypes from "prop-types";

import React from "react";
import Button from "./Button";

function Cart({ food, onAdd, onRemove }) {
  const [count, setCount] = React.useState(0);
  const { title, image, price, id } = food;

  function handleIncrement() {
    setCount(count + 1);
    onAdd(id);
  }

  function handleDecrement() {
    setCount(count - 1);
    onRemove(id);
  }
  return (
    <div className="flex flex-col items-center justify-between w-[150px] h-[250px] border-2 border-s-orange-400 p-0.5 m-10 relative rounded-lg">
      <span className={`${count !== 0 ? "card-badge" : "hidden"}`}>
        {count}{" "}
      </span>
      <div className="w-[100px] h-[100px] relative">
        <img
          src={image}
          alt={title}
          className="w-[100%] object-cover"
          loading="lazy"
        />
      </div>
      <h4 className="font-medium text-center mt-2">
        {title}. <span className="font-bold"> {price}</span>
      </h4>
      <div className="flex justify-center items-center mt-2">
        <Button title="+" type={"add"} onClick={handleIncrement} />
        <Button
          title="-"
          type={"remove"}
          onClick={handleDecrement}
          disable={count === 0}
        />
      </div>
    </div>
  );
}

export default Cart;

Cart.propTypes = {
  food: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
