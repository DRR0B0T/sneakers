import React from 'react';
import axios from "axios";

import {Info} from "../Info";
import {useCart} from "../../hooks/useCart";

import styles from './Drawer.module.scss'


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const Drawer = ({ items= [], onClose, onRemove, opened }) => {
  const { cartItems, setCartItems, price} = useCart()
  const [isCompleteOrdered, setIsCompleteOrdered] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrdered = async () => {
    try{
      setIsLoading(true)
      const {data} = await axios.post('https://60d381a961160900173c93d6.mockapi.io/orders', {
        items: cartItems,
      })
      setOrderId(data.id)
      setIsCompleteOrdered(true)
      setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        await axios.delete('https://60d381a961160900173c93d6.mockapi.io/cart/' + item.id)
        await delay(1000)
      }
    } catch (e){
      alert('Ошибка при создании заказа !')
    }
    setIsLoading(false)
  }

  return (
    <div  className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
    <div className={styles.drawer}>
      <h2 className='d-flex justify-between mb-30 '>Корзина<img
        onClick={onClose}
        className='removeBth cu-p'
        src="/img/btn-remove.svg"
        alt="Remove"/></h2>
      {
        items.length > 0
          ? (
            <div className='d-flex flex-column flex'>
              <div className="items flex">
                {
                  items.map((obj)=>(
                    <div key={obj.id} className="cartItem d-flex align-center mb-20">
                      <div style={{backgroundImage: `url(${obj.imageUrl})`}}
                           className="cartItemImg d-flex">
                      </div>
                      <div className='mr-20 flex'>
                        <p className='mb-5'>{obj.title}</p>
                        <b>{obj.price} руб.</b>
                      </div>
                      <img
                        onClick={() => onRemove(obj.id)}
                        className='removeBth'
                        src="/img/btn-remove.svg"
                        alt="Remove"/>
                    </div>
                  ))
                }
              </div>
              <div className='cartTotalBlock'>
                <ul >
                  <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>{price} руб.</b>
                  </li>
                  <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>{((price / 100) * 5).toFixed(2)} руб.</b>
                  </li>
                </ul>
                <button
                  disabled={isLoading}
                  onClick={onClickOrdered}
                  className='greenButton'>
                  Оформить заказ<img src="/img/arrow.svg" alt="Arrow"/></button>
              </div>
            </div>
          )
          :  (<Info
          image={ isCompleteOrdered ? '/img/complete-order.png' : "/img/empty-cart.png"}
          description={isCompleteOrdered ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
          title={isCompleteOrdered ? 'Заказ оформлен!' :'Корзина пустая '} />)
      }
    </div>
    </div>
  );
}