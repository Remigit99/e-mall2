import { shoesData } from "../shoesData";
import { FiShoppingCart } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { addToCart } from "../components/app/cartSlice";


const Home = () => {

const dispatch = useDispatch()


  return (
    <main>
      <div className="container products__container">
        {shoesData.map((product) => (
          <article className="product" key={product.id}>
            <div className="product__img">
              <img src={product.img} alt={product.title} />
            </div>

            <div className="product__details">
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <button className="tocart"
              onClick={() => dispatch(addToCart(product))}
              >
                <FiShoppingCart />
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Home;
