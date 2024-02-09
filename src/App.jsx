import { IntroAnimation } from "./components"
import service from "./appwrite/DB&Storage";
import Home from "./pages/Home";
import { useSelector } from "react-redux";

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
    <>
      <IntroAnimation />
      <div className={`${completed ? 'static' : 'hidden'}`}>
        <Home />
      </div>
    </>
  )
}

export default App