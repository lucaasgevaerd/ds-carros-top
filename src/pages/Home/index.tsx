import CarHome from '../../assets/images/car-home.png';
import './styles.css';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="advertising-card-container">
        <div className="advertising-car-image">
          <img src={CarHome} alt="Imagem do carro" />
        </div>
        <div className="advertising-description">
          <h4>O carro perfeito para você</h4>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
      <div className="start-catalog-card-container">
        <Link to="/catalog">
          <Button className="button-show-catalog" text="VER CATÁLOGO" />
        </Link>
        <div className="start-catalog-description">
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
