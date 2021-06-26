import React from "react";
import {Card} from "./components/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
import axios from 'axios'

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  React.useEffect(()=>{
    axios.get('https://60d381a961160900173c93d6.mockapi.io/items')
      .then(res => setItems(res.data))
    axios.get('https://60d381a961160900173c93d6.mockapi.io/cart')
      .then(res => setCartItems(res.data))
  },[])

  const onAddToCart =(obj)=>{
    axios.post('https://60d381a961160900173c93d6.mockapi.io/cart', obj)
    setCartItems(prev =>[...prev, obj])
  }

  const onRemoveItem =(id)=>{
    axios.delete(`https://60d381a961160900173c93d6.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
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
      <div className='content p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'} </h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"/>
            {searchValue &&
            <img
              onClick={() => setSearchValue('')}
              className='clear cu-p'
              src="/img/btn-remove.svg"
              alt="Clear"/>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...'/>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {
            items
              .filter((item)=> item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item) => (
              <Card
                key={item.title}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                onFavorite={()=> console.log('нажали лайк')}
                onPlus={(obj)=>onAddToCart(obj)}
              />
            ))
          }

        </div>
      </div>
    </div>
  );
}

export default App;
