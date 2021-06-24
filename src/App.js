import React from "react";
import {Card} from "./components/Card";
import {Header} from "./components/Header";
import {Drawer} from "./components/Drawer";
const arr = [
  {"title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 12999,
    "imageUrl": '/img/sneakers/1.jpg' },
  {"title": "Мужские Кроссовки Nike Air Max 270",
    "price": 12999,
    "imageUrl": '/img/sneakers/2.jpg' },
  {"title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "price": 8499,
    "imageUrl": '/img/sneakers/3.jpg' },
  {"title": "Кроссовки Puma X Aka Boku Future Rider",
    "price": 8999,
    "imageUrl": '/img/sneakers/4.jpg' },
  {"title": "Кроссовки Puma X Aka Boku Future Rider",
    "price": 8999,
    "imageUrl": '/img/sneakers/5.jpg' },
  {"title": "Мужские Кроссовки Under Armour Curry 8",
    "price": 15199,
    "imageUrl": '/img/sneakers/6.jpg' },
  {"title": "Мужские Кроссовки Nike Kyrie 7",
    "price": 11299,
    "imageUrl": '/img/sneakers/7.jpg' },
  {"title": "Мужские Кроссовки Nike LeBron XVIII",
    "price": 16499,
    "imageUrl": '/img/sneakers/8.jpg' },
  {"title": "Мужские Кроссовки Nike Lebron XVIII Low",
    "price": 13999,
    "imageUrl": '/img/sneakers/9.jpg' },
  {"title": "Мужские Кроссовки Nike Kyrie Flytrap IV",
    "price": 11299,
    "imageUrl": '/img/sneakers/10.jpg' },
  ]
function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)}  />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className='content p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder='Поиск...'/>
          </div>
        </div>
        <div className="d-flex">

          {
            arr.map((obj) => (
              <Card
                title={obj.title}
                imageUrl={obj.imageUrl}
                price={obj.price}
                key={obj.id}
                onFavorite={()=> console.log('нажали лайк')}
                onPlus={()=> console.log('нажали плюс')}
              />
            ))
          }

        </div>
      </div>
    </div>
  );
}

export default App;
