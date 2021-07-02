import React from 'react';
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader"
import {AppContext} from "../../App";

export const Card = ({
id,
onPlus,
onFavorite,
imageUrl,
title,
price,
favorited=false,
loading=false,
                     }) => {
  const [favorite, setFavorite] = React.useState(favorited);
  const { isItemAdded } = React.useContext(AppContext)


  const handleClickPlus = () => {
    onPlus({ id, title, imageUrl, price })
  }

  const onClickFavorite = () => {
    onFavorite({  id, title, imageUrl, price })
    setFavorite(!favorite)
  }

  

  return (
    <div className={styles.card}>
      {
        loading ? (<ContentLoader
          speed={2}
          width={150}
          height={187}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="119" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="148" rx="8" ry="8" width="80" height="24" />
          <rect x="1" y="95" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="117" y="141" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>) : (
          <>
            {onFavorite && <div  onClick={onClickFavorite}  className={styles.favorite}>
              <img  src={favorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"  } alt="unlike"/>
            </div>}
            <img width={133} height={112} src={imageUrl} alt=""/>
            <h5>{title}</h5>
            <div className='d-flex justify-between'>
              <div className='d-flex flex-column '>
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>
              {onPlus && <img
                className={styles.plus}
                onClick={handleClickPlus}
                src={isItemAdded(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                alt="Plus"/>}
            </div>
          </>
        )
      }

    </div>
  );
}