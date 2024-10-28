import "./App.css";
import products from './data/products';
import GroceriesAppContainer from './components/GroceriesAppContainer';
function App() {
  return (
    <div>
      <GroceriesAppContainer products ={products}/>
    </div>
  )
}

export default App;
