// import { Link } from "react-router-dom"
import { useSelector } from "react-redux"



const Cart = () => {

const cartItems = useSelector(state => state.cart)

// const dispatch = useDispatch()


  return (
    <main>
      <div className="container products__container">
 
        {cartItems.map(({ id, img, title, price }) => (
          <article className="product" key={id}>
            <div className="product__img">
              <img src={img} alt={title} />
            </div>

            <div className="product__details">
              <h4>{title}</h4>
              <p>${price}</p>
              <button className="tocart">
                +
              </button>
            </div>
          </article>
        ))} 
      </div>
    </main>
  )
}

export default Cart