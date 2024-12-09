import { Card, Cart } from "./components";
import foods from "./constants/index";

import { useState, useEffect, useRef } from "react";
import "./App.css";



function App() {
  const [cartItems, setCartItems] = useState([]);
  const telegramRef = useRef(null); // Initialize a ref

  function onAdd() {}
  function onRemove() {}
  function handleCheckout() {
    telegramRef.MainButton.text = "Pay :";
    telegramRef.MainButton.show();
  }
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
        telegramRef.current = window.Telegram.WebApp; // Store in ref
        console.log(telegramRef.current);
    } else {
        console.error("Telegram WebApp is not initialized.");
    }
}, []);
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
