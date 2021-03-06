import Element from "../style/wishlist/wishlistElement";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/wishlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const WishlistElement = ({ name, category, price, imgUrl, id }) => {
  const dispatch = useDispatch();
  return (
    <Element
      initial={{ opacity: 0, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween", duration: 0.2 }}
      key={id}
    >
      <Element.ImgBox>
        <Element.Img src={imgUrl} />
      </Element.ImgBox>

      <Element.Name>
        <Link to={`/product/${id}`}>{name}</Link>
      </Element.Name>
      <Element.Category>{category}</Element.Category>
      <Element.Price>${price}</Element.Price>
      <Element.RemoveBtn onClick={() => dispatch(removeItem(id))}>
        <FontAwesomeIcon icon={faTimes} />
      </Element.RemoveBtn>
    </Element>
  );
};

export default WishlistElement;
