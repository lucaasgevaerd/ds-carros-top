import './styles.css';

import CarCard from '../../assets/images/car-card.png';
import Button from '../Button';


const ProductCard = () => {
  return (
    <div className="product-card-container">
      <div className="card-top-container">
        <img src={CarCard} alt="Nome do produto" />
      </div>
      <div>
        <div className="card-botton-container">
          <h6>Audi Supra TT</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
          <Button className="button-buy" text="COMPRAR" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
