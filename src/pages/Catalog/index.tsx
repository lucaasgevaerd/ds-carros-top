import Button from '../../components/Button';
import ProductCard from '../../components/ProductCard';
import './styles.css';

const Catalog = () => {
  return (
    <main>
      <section id="form-section" className="form-container">
        <div className="form-card">
          <form action="" className="search">
            <label form="search"></label>
            <input
              className="field-search"
              type="text"
              id="search"
              placeholder="Digite sua busca"
            />
          </form>
          <div>
            <Button className="button-search" text="BUSCAR" />
          </div>
        </div>
      </section>
      <section id="cards-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
            <div className="col-sm-6 col-lg-4">
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalog;
