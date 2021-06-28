import React from "react";
import {Home} from "./pages/Home";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import  {Route} from 'react-router-dom'

import axios from 'axios'
import {Favorites} from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  React.useEffect(()=>{
    axios.get('https://60d381a961160900173c93d6.mockapi.io/items')
      .then(res => setItems(res.data))
    axios.get('https://60d381a961160900173c93d6.mockapi.io/cart')
      .then(res => setCartItems(res.data))
    axios.get('https://60d381a961160900173c93d6.mockapi.io/favorite')
      .then(res => setFavorites(res.data))
  },[])

  const onAddToCart =(obj)=>{
    axios.post('https://60d381a961160900173c93d6.mockapi.io/cart', obj)
    setCartItems(prev =>[...prev, obj])
  }

  const onRemoveItem =(id)=>{
    axios.delete(`https://60d381a961160900173c93d6.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onAddToFavorite = async (obj)=>{
   try {
     if (favorites.find(favObj => favObj.id === obj.id)){
       axios.delete(`https://60d381a961160900173c93d6.mockapi.io/favorite/${obj.id}`)
     } else {
       const { data } = await axios.post('https://60d381a961160900173c93d6.mockapi.io/favorite', obj)
       setFavorites(prev =>[...prev, data])
     }
   } catch (e) {
     alert('Не удалось добавить в избранное')
   }
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer
        items={cartItems}
        onClose={() => setCartOpened(false)}
        onRemove={onRemoveItem}
      />}
      <Header onClickCart={() => setCartOpened(true)} />
      <Route path='/' exact>
        <Home 
        items={items} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
        onChangeSearchInput={onChangeSearchInput}
        onAddToFavorite={onAddToFavorite}
        onAddToCart={onAddToCart}
        />
      </Route>
      <Route path='/favorites'>
        <Favorites
          onAddToFavorite={onAddToFavorite}
          items={favorites} />
      </Route>
      
    </div>
  );
}

export default App;
