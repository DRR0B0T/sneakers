import React from "react";
import {Home} from "./pages/Home";
import {Header} from "./components/Header";
import {Drawer} from "../src/components/Drawer/index";
import {Route} from 'react-router-dom'

import axios from 'axios'
import {Favorites} from "./pages/Favorites";
import {Orders} from "./pages/Orders";

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
      try {
        const cartResponse = await axios.get('https://60d381a961160900173c93d6.mockapi.io/cart')
        const favoritesResponse = await axios.get('https://60d381a961160900173c93d6.mockapi.io/favorite')
        const itemsResponse = await axios.get('https://60d381a961160900173c93d6.mockapi.io/items')

        setIsLoading(false)

        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)
      } catch (e) {
        alert('Ошибка при запросе данных')
      }
    }
    fetchData()
  }, [])

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
      if (findItem) {
      setCartItems(prev => prev.filter((item) => Number(item.parentId) !== Number(obj.id)))
      await  axios.delete(`https://60d381a961160900173c93d6.mockapi.io/cart/${findItem.id}`)
      } else {
      setCartItems(prev => [...prev, obj])
      const {data} = await  axios.post('https://60d381a961160900173c93d6.mockapi.io/cart', obj)
      setCartItems(prev =>
        prev.map(item => {
        if (item.parentId === data.parentId) {//если id из бэка равен id в корзине
          return {
            ...item,// возми всё что есть в объекте
            id: data.id, //замени id на id который пришёл от бэкенда
          }
        } return item //иначе просто верни товар
      }))
      }
    } catch (error) {
      alert('Ошибка добавления товара в корзину!')
      console.error(error)
    }
  }

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://60d381a961160900173c93d6.mockapi.io/cart/${id}`)
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)))
    } catch (error) {
      alert('Ошибка удаления товара из корзины!')
      console.error(error)
    }
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
      console.error(error)
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
   return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider value={{
      isItemAdded,
      cartItems,
      favorites,
      items,
      onAddToFavorite,
      onAddToCart,
      setCartOpened,
      setCartItems
    }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />
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

        <Route path='/orders'>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
