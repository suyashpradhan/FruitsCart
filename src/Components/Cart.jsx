import { useCart } from "../Context/CartContext";

export const Cart = () => {
  const { itemsInCart } = useCart();

  return (
    <>
      <main className="main">
        <h1 className="main-title">My Cart ({itemsInCart.length})</h1>
        <div className="card-group">
          {itemsInCart.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="card-img-top">
                  <img src={item.productImage} alt="name"></img>
                </div>
                <div className="card-body">
                  <h2 className="product-title">{item.productName}</h2>
                  <h2 className="product-price">Rs {item.productPrice}</h2>
                  <h2 className="product-quantity">
                    Quantity: {item.productQuantity}
                  </h2>

                  <div className="card-button-row">
                    <button className="primary">Remove From Cart</button>
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
