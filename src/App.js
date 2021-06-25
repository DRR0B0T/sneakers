import React from "react";
import {Card} from "./components/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  React.useEffect(()=>{
    fetch('https://60d381a961160900173c93d6.mockapi.io/items')
      .then(res => res.json())
      .then(json => setItems(json))
  },[])

  const onAddToCart =(obj)=>{
    setCartItems(prev =>[...prev, obj])
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}  />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className='content p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder='Поиск...'/>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {
            items.map((item) => (
              <Card
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
