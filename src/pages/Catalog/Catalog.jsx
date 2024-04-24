import { Link } from 'react-router-dom';
import { store } from '../../data/store';
import './Catalog.css';

export function Catalog() {
    return (
        <>
            <div className='Catalogue__Items'>
                {
                    store.map(game => (
                        <article className='Catalogue__Item' key={game.id}>
                            <img className='Catalogue__Img' src={game.img} alt="#" />
                            <h2 className='Catalogue__Title'>{game.name}</h2>
                            <p className='Catalogue__Price'>{game.price} ₽</p>
                            <Link className='Catalogue__Link' to={`/catalog/${game.id}`}><p>Перейти</p></Link>
                        </article>
                    ))
                }
            </div>
        </>
    );
}