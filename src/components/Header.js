import React from 'react';

export const Header = (props) => {
  return (
    <header className='d-flex justify-between align-center p-40'>
      <div className='d-flex align-center'>
        <img width={50} height={50} src="/img/logo.png" alt=""/>
        <div>
          <h3 className='text-uppercase'>Sneakers</h3>
          <p className='opacity-5'>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className='d-flex'>
        <li onClick={props.onClickCart} className='mr-30 cu-p'>
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
  );
}