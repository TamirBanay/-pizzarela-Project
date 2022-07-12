import "./App.css";
import Product from "./components/Product/Product";
import Heading from "./components/heading/Heading";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <App />;
      break;
    case "/Menu":
      component = <Menu />;
      break;
    case "/Order":
      component = <Order />;
      break;
    case "/About":
      component = <About />;
      break;
    case "/Contact":
      component = <Contact />;
      break;
    case "/Cart":
      component = <Cart />;
      break;
  }

  return (
    <>
      <Heading />
      
      {<div className="comp-container">{component}</div>}
    </>
  );
}
export default App;
