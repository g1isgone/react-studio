import "./App.css";
import { useState, useEffect } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [count, setCart] = useState(0);
  const [price, setPrice] = useState(0);
  const [pastries, setPastry] = useState([]);
  
  function addToCart(item){
    setCart(count + 1);
    setPrice(item.price+price);
    setPastry([...pastries, item.name])
  }
 

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem key={index} bakedGood={item} addToCart={addToCart}/>
        ))}

        {/* <Cart>Huhuhu</Cart> */}
        <h2>Cart</h2>
        <div>
        My Total Count of Items: {count}
        </div>
        <div>
        My Total Price: {price}
        </div>
        <div>
        My Pastries in the Cart: {pastries}
        </div>
        {/* TODO: render a list of items in the cart */}
    </div>
  );
}

export default App;
