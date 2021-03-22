import { useState } from "react";
import { dataObj } from "../API/data";
import { useCart } from "../Context/CartContext";

export const Products = () => {
  const { setItemsInCart } = useCart();
  const [buttonText, setText] = useState("Add to cart");

  return (
    <>
      <main className="main">
        <h1 className="main-title">All Products ({dataObj.length})</h1>
        <div className="card-group">
          {dataObj.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="card-img-top">
                  <img src={item.productImage} alt="name"></img>
                </div>
                <div className="card-body">
                  <h2 className="product-title">{item.productName}</h2>
                  <h2 className="product-price">Rs {item.productPrice}</h2>

                  <div className="card-button-row">
                    <button
                      className="primary"
                      onClick={() => {
                        setItemsInCart((items) => {
                          return [...items, item];
                        });
                      }}
                    >
                      {buttonText}
                    </button>
                    <button className="secondary">Wishlist</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};
