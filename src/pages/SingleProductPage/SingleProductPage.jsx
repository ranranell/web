import { store } from '../../data/store';
import './SingleProductPage.css';
import { useParams } from 'react-router-dom';

export function SingleProductPage() {
    const { id } = useParams();

    const game = store.find(game => game.id == id);

    return (
        <section className='product'>
            <img className='product__image' src={game.img} alt="" />
            <div className="product__item">
                <div className="product__description">
                    <h2 className='product__title'>{game.name}</h2>
                    <p className='product__description'>{game.body}</p>
                    <p className='product__price'>{game.price} ₽</p>
                </div>
                <button className="product__button">Купить</button>
            </div>
        </section>
    );
}