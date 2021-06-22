import React from 'react';
import styles from "./Card.module.scss";


export const Card = (props) => {

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="unlike"/>
      </div>
      <img width={133} height={112} src={props.imageUrl} alt=""/>
      <h5>{props.title}</h5>
      <div className='d-flex justify-between'>
        <div className='d-flex flex-column '>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <button onClick={props.onClick}   className='button'>
          <img src="/img/plus.svg" alt="Plus"/>
        </button>
      </div>
    </div>
  );
}