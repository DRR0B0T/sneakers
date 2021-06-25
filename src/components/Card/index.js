import React from 'react';
import styles from "./Card.module.scss";


export const Card = ({ onPlus, onFavorite, imageUrl, title, price }) => {
  const [added, setAdded] = React.useState(false);

  const handleClickPlus = () => {
    onPlus({ title, imageUrl, price })
    setAdded(!added)
  }

  React.useEffect(() => {

  }, [added])

  return (
    <div className={styles.card}>
      <div onClick={onFavorite} className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="unlike"/>
      </div>
      <img width={133} height={112} src={imageUrl} alt=""/>
      <h5>{title}</h5>
      <div className='d-flex justify-between'>
        <div className='d-flex flex-column '>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={handleClickPlus}
          src={added ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"/>
      </div>
    </div>
  );
}