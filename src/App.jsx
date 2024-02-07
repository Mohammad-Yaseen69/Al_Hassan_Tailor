import { IntroAnimation } from "./components"
import service from "./appwrite/DB&Storage";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL, "Hello man");
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
      {/* <IntroAnimation /> */}
      <button onClick={addProduct}>Add </button>
    </>
  )
}

export default App