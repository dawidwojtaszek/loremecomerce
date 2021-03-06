import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import GlobalStyle from "./style/global";
import Modal from "./components/modal";
import HeaderComponent from "./components/header";
import Footer from "./components/footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setItemsList } from "./redux/items";
import MobileMenu from "./components/mobileMenu";
import HomePage from "./pages/homepage";
import WishlistPage from "./pages/wishlist";
import ShopPage from "./pages/shop";
import BlogPage from "./pages/blog";
import ContactPage from "./pages/contact";
import CheckoutPage from "./pages/checkout";
import ProductPage from "./pages/productPage";
import SignInPage from "./pages/signin";
import { Routes, Route } from "react-router-dom";
import SHOP_DATA from "./assets/data/shopData";
import Cart from "./components/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setItemsList(SHOP_DATA));
    // eslint-disable-next-line
  }, []);

  const modalHidden = useSelector((state) => state.modal.hidden);
  const menuHidden = useSelector((state) => state.menu.hidden);
  const cartHidden = useSelector((state) => state.cart.hidden);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatePresence>{modalHidden ? "" : <Modal />}</AnimatePresence>
      {menuHidden ? "" : <MobileMenu />}
      <AnimatePresence>{cartHidden ? "" : <Cart />}</AnimatePresence>

      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
}

export default App;
