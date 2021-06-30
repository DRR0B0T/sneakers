import React from "react";
import {Home} from "./pages/Home";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import {Route} from 'react-router-dom'

import axios from 'axios'
import {Favorites} from "./pages/Favorites";

export const AppContext = React.createContext({})

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const cartResponse = await axios.get('https://60d381a961160900173c93d6.mockapi.io/cart')
      const favoritesResponse = await axios.get('https://60d381a961160900173c93d6.mockapi.io/favorite')
      const itemsResponse = await axios.get('https://60d381a961160900173c93d6.mockapi.io/items')

      setIsLoading(false)

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    }

    fetchData()
  }, [])

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://60d381a961160900173c93d6.mockapi.io/cart/${obj.id}`)
        setCartItems(prev => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      } else {
        axios.post('https://60d381a961160900173c93d6.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj])
      }
    } catch (e) {
      alert('Ошибка добавления товара')
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://60d381a961160900173c93d6.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://60d381a961160900173c93d6.mockapi.io/favorite/${obj.id}`)
        setFavorites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      } else {
        const {data} = await axios.post('https://60d381a961160900173c93d6.mockapi.io/favorite', obj)
        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
   return cartItems.some((obj) => Number(obj.id) === Number(id))
  }
  return (
    <AppContext.Provider value={{
      isItemAdded,
      cartItems,
      favorites,
      items,
      onAddToFavorite,
      setCartOpened,
      setCartItems
    }}>
      <div className="wrapper clear">
        {cartOpened && <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />}
        <Header onClickCart={() => setCartOpened(true)}/>
        <Route path='/' exact>
        <Home
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            cartItems={cartItems}
            isLoading={isLoading}
        />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
