import React from "react";
import Basket from "../basket/Basket";

export const ShowPrduct = ({ cartItems, removeFromCart }) => {
  return (
    <>

      {cartItems.map((el) => (
        <React.Fragment key={el.productId}>
          <Basket productId={el.productId} qty={el.quantity} removeFromCart={removeFromCart} />
        </React.Fragment>
      ))}

    </>
  );
};
