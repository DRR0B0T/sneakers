import React from 'react';
import styles from "./Card.module.scss";


export const Card = (props) => {
  const [added, setAdded] = React.useState(false);

  const handleClick = () => {
    setAdded(!added)
  }

  React.useEffect(() => {

  }, [added])

  return (
    <div className={styles.card}>
      <div onClick={props.onFavorite} className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="unlike"/>
      </div>
      <img width={133} height={112} src={props.imageUrl} alt=""/>
      <h5>{props.title}</h5>
      <div className='d-flex justify-between'>
        <div className='d-flex flex-column '>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={handleClick}
          src={added ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"/>
      </div>
    </div>
  );
}