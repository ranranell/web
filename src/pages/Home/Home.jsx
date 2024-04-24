import './Home.css';
import { Banner } from '../../components/Banner/Banner';

export function Home() {
    return (
        <>
        <Banner/>
        <div className="reviews">
            <h1 className="reviews">Отзывы</h1>
            <div className="reviews__items">
                <div className="reviews__item">
                    <div className="reviews__description">
                        <div className="reviews__photo">
                            <img src="/src/assets/Rectangle 5.svg" alt="#" />
                            <div className="reviews__title">Василий Петров</div>
                        </div>
                        <p className="reviews__subtitle">Все очень понравилось, качественные кроссовки, быстрая доставка. Буду брать еще!!</p>
                        <p className="reviews__data">19/01/24</p>
                    </div>
                </div>

                <div className="reviews__item">
                    <div className="reviews__description">
                        <div className="reviews__photo">
                            <img src="/src/assets/Rectangle 5.svg" alt="#" />
                            <div className="reviews__title">Василий Петров</div>
                        </div>
                        <p className="reviews__subtitle">Все очень понравилось, качественные кроссовки, быстрая доставка. Буду брать еще!!</p>
                        <p className="reviews__data">19/01/24</p>
                    </div>
                </div>

                <div className="reviews__item">
                    <div className="reviews__description">
                        <div className="reviews__photo">
                            <img src="/src/assets/Rectangle 5.svg" alt="#" />
                            <div className="reviews__title">Василий Петров</div>
                        </div>
                        <p className="reviews__subtitle">Все очень понравилось, качественные кроссовки, быстрая доставка. Буду брать еще!!</p>
                        <p className="reviews__data">19/01/24</p>
                    </div>
                </div>

                <div className="reviews__item">
                    <div className="reviews__description">
                        <div className="reviews__photo">
                            <img src="/src/assets/Rectangle 5.svg" alt="#" />
                            <div className="reviews__title">Василий Петров</div>
                        </div>
                        <p className="reviews__subtitle">Все очень понравилось, качественные кроссовки, быстрая доставка. Буду брать еще!!</p>
                        <p className="reviews__data">19/01/24</p>
                    </div>
                </div>

                <div className="reviews__item">
                    <div className="reviews__description">
                        <div className="reviews__photo">
                            <img src="/src/assets/Rectangle 5.svg" alt="#" />
                            <div className="reviews__title">Василий Петров</div>
                        </div>
                        <p className="reviews__subtitle">Все очень понравилось, качественные кроссовки, быстрая доставка. Буду брать еще!!</p>
                        <p className="reviews__data">19/01/24</p>
                    </div>
                </div>
            </div>

            
        </div>
        </>


    );
}