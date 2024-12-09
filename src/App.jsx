import { Card, Cart } from "./components";
import foods from "./constants/index";

import { useState } from "react";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function onAdd() {}
  function onRemove() {}
  function handleCheckout() {}
  return (
    <>
      <div className="">
        <h1 className="text-center">Order Food</h1>
        <Cart cartItems={cartItems} onCheckout={handleCheckout} />

        <div className="flex flex-wrap justify-center items-center mt-12 ml-12">
          {foods.map((food) => (
            <Card key={food.id} food={food} onAdd={onAdd} onRemove={onRemove} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
