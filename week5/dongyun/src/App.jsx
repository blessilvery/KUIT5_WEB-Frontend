import './App.css'
import FilterableProductTable from "./components/FilterableProductTable.jsx";

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},

]

function App() {
  return <FilterableProductTable products={PRODUCTS}/>
}

export default App
