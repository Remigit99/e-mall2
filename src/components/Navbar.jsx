import { BsBag } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Navbar = () => {

  const cart = useSelector(state => state.cart)


  return (
    <nav>
      <div className="container nav__container">
        <div className="nav__container-left">
          <Link to="/">
            <h2>
              E <span>-</span> Mall2
            </h2>
          </Link>
        </div>
        <div className="nav__container-right">
          <Link to="/cart" className="cart">
            <BsBag />
            <p className="cart-count">{cart.length || 0  }</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
