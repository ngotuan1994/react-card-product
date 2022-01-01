import React from 'react';

import './product-card.styles.scss';
import shoes from '../../assets/NikeShoes.png';

const ProductCard = () =>
(
  <div className="card">
    <div className="card__heart"> <i class='bx bx-heart'></i>   </div>

    <div className="card__cart"> <i class='bx bx-cart-alt' ></i>   </div>

    <div className="card__image">
      <img src={shoes} alt="shoes" />
    </div>
    <div className="card__title">Nike Zoom KD 12</div>
    <div className="card__price">$199</div>
    <div className="card__size">Size:
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>

    </div>
    <div className="card__color">Color:
      <span className='card__color-green'></span>
      <span className='card__color-red'></span>
      <span className='card__color-black'></span>

    </div>
    <div className="card__buttons">
      <button>Buy Now</button>
      <button>Add Cart</button>

    </div>

  </div>
)

export default ProductCard;
