import React from "react";

function App() {
  return (
    <div className="wrapper clear">

      <div className="overlay">
        <div className="drawer">
          <h2 className='mb-30 d-flex justify-between mb-30 '>Корзина<img
            className='removeBth cu-p'
            src="/img/btn-remove.svg"
            alt="Remove"/></h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg d-flex">

              </div>
              <div className='mr-20'>
                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className='removeBth'
                src="/img/btn-remove.svg"
                alt="Remove"/>
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg d-flex">

              </div>
              <div className='mr-20'>
                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className='removeBth'
                src="/img/btn-remove.svg"
                alt="Remove"/>
            </div>
          </div>
          <div className='cartTotalBlock'>
            <ul >
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className='greenButton'>Оформить заказ<img src="/img/arrow.svg" alt="Arrow"/></button>
          </div>
        </div>
      </div>
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img width={50} height={50} src="/img/logo.png" alt=""/>
          <div>
            <h3 className='text-uppercase'>Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img width={18} height={18} src="/img/cart.svg" alt=""/>
            <span>1200 руб.</span>
          </li>
          <li>
            <img src="/img/heart.svg" alt="like"/>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt=""/>
          </li>
        </ul>
      </header>

      <div className='content p-40'>
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search"/>
            <input placeholder='Поиск...'/>
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unlike"/>
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt=""/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between'>
              <div className='d-flex flex-column '>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card ">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt=""/>
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className='d-flex justify-between'>
              <div className='d-flex flex-column '>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card ">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt=""/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between'>
              <div className='d-flex flex-column '>
                <span>Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button className='button'>
                <img src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
          <div className="card ">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt=""/>
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className='d-flex justify-between'>
              <div className='d-flex flex-column '>
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button className='button'>
                <img src="/img/plus.svg" alt="Plus"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
