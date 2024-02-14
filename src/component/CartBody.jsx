import React, { useState } from "react";
import "./css/StyleBody.css";

const CartBody = ({ iteam, index, setCardValue }) => {
  const [status, setStatus] = useState(true);
  const addCart = () => {
    setStatus(false);
    setCardValue((val) => val + 1);
  };

  const removeCart = () => {
    setStatus(true);
    setCardValue((val) => val - 1);
  };
  return (
    <div className="card-style">
      <div>
        <div className="col mb-5">
          <div className="card h-100">
            {iteam.id == 2 ||
            iteam.id == 3 ||
            iteam.id == 5 ||
            iteam.id == 7 ? (
              <div
                class="badge bg-dark text-white position-absolute"
                style={{ top: "0.5rem;", right: "0.5rem" }}
              >
                Sale
              </div>
            ) : (
              ""
            )}
            <h1>{iteam.img}</h1>
          </div>
        </div>
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{iteam.productName}</h5>
            {iteam.id == 2 ||
            iteam.id == 4 ||
            iteam.id == 7 ||
            iteam.id == 8 ? (
              <div class="d-flex justify-content-center small text-warning mb-2">
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
                <div class="bi-star-fill"></div>
              </div>
            ) : (
              <br />
            )}

            <span class="fa fa-star checked"></span>
            <strike>{iteam.markPrice}</strike>
            {iteam.price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {status ? (
              <button className="add-btn" href="#" onClick={addCart}>
                {iteam.buttonText}
              </button>
            ) : (
              <button className="rem-btn" href="#" onClick={removeCart}>
                Remove from cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBody;
