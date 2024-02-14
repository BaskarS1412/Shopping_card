import React from "react";
import CartBody from "./CartBody";

const CardCount = ({ setCardValue, cardCount, shoppingData }) => {
  return (
    <div class="cart-body">
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {shoppingData.map((iteam, index) => {
              return (
                <>
                  <CartBody
                    iteam={iteam}
                    index={index}
                    setCardValue={setCardValue}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardCount;
