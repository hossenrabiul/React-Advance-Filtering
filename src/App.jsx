
import { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Slidber from './Slidber/Main/Slidber.jsx'
import Allproducts from './db/data.js'
import Card from './components/Card.jsx'

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState('');
  console.log(typeof selectedCategory)
  // console.log( query)
  //...... Input filter .....//
  
  const handleInputChange = (e)=>{
    e.preventDefault()
    setQuery(e.target.value)
  }

  const filterItems = Allproducts.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1)
   
  //...... Radio filter .....//

  const handleChange = (e) =>{
    // e.preventDefault()
    setSelectedCategory(e.target.value)
    
  }

  const handleClick = (e)=>{
    setSelectedCategory(e.target.value)
  }

 function filteredData(products, selected, query){
    let filteredProducts = products

     //...... Input filter .....//
    if(query){
      filteredProducts = filterItems;
    }

    if(selected){
      filteredProducts = filteredProducts.filter(({category, colour, newPrice, title, company}) => category === selected || colour === selected || company === selected || newPrice === selected || title === selected)
    }

    return filteredProducts.map(({img,title,newPrice, prevPrice, rating }) => <Card img={img} newPrice={newPrice} title={title} prevPrice={prevPrice} rating={rating}/>)
 }

 const result = filteredData(Allproducts, selectedCategory, query)

  return (
    <>
      <Slidber handleChange={handleChange}/>
      <Nav handleInputChange={handleInputChange}></Nav>
      <Recommended handleClick={handleClick}></Recommended>
      <Products result={result}></Products>
      
    </>
  )
}

export default App
