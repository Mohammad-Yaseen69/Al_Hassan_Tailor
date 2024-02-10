import { Footer, IntroAnimation, Navbar } from "./components"
import service from "./appwrite/DB&Storage";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
  const { completed } = useSelector(state => state.Animation)

  function addProduct() {
    service.addProduct(
      {
        Img: '12222334456788',
        Title: 'Kurta',
        Description: 'A stylish kurta',
        PriceAndSize: [
          '1200',
          JSON.stringify({
            small: 'avaible',
            medium: 'avaible',
            large: 'avaible',
            xLarge: 'avaible',
          })
        ]
      }
    )
  }


  return (
    <div className="relative">
      <IntroAnimation />
      <div className={`${completed ? 'static' : 'hidden'}`}>
        
        <Outlet />
        
      </div>
    </div>
  )
}

export default App