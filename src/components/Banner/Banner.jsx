import './Banner.css';


export function Banner(){
    return(
        <section class="slider">
                <button class="slider__arrow arrow__hidden arrow-left">
                    <img src="/src/assets/Back.svg" alt="#" />
                </button>
                <div class="slider__body">
                    <div class="slider__inner">
                        <div className="slider__item">
                            <div className="slider__items">
                                <div className="slider__text">
                                    <p className="slider__title">NIKE Dunk</p>
                                    <p className="slider__subtitle">Кроссовки Nike Dunk Low «Black White», также известные как «Panda», представляют ретро-модель в двухцветной цветовой гамме, которая подчеркивает четкие линии кроссовок, разработанной дизайнером Питером Муром и отвечающей за легкий переход обуви от лиственного дерева к натуральному. улица. Кожаный верх сочетает в себе белую основу с контрастными черными накладками вокруг носка и пятки. И на тканой бирке на язычке, и на язычке на пятке логотип Nike белого цвета рельефно выделяется на черном фоне.</p>
                                    <p className="slider__price">19 911 P</p>
                                </div>
                                <img className='slider__img' src="/src/assets/nike.svg" alt="#" />
                            </div>
                        </div>

                        <div className="slider__item">
                            <div className="slider__items">
                                <div className="slider__text">
                                    <p className="slider__title">NIKE Dunk</p>
                                    <p className="slider__subtitle">Кроссовки Nike Dunk Low «Black White», также известные как «Panda», представляют ретро-модель в двухцветной цветовой гамме, которая подчеркивает четкие линии кроссовок, разработанной дизайнером Питером Муром и отвечающей за легкий переход обуви от лиственного дерева к натуральному. улица. Кожаный верх сочетает в себе белую основу с контрастными черными накладками вокруг носка и пятки. И на тканой бирке на язычке, и на язычке на пятке логотип Nike белого цвета рельефно выделяется на черном фоне.</p>
                                    <p className="slider__price">19 911 P</p>
                                </div>
                                <img className='slider__img' src="/src/assets/nike.svg" alt="#" />
                            </div>
                        </div>

                        <div className="slider__item">
                            <div className="slider__items">
                                <div className="slider__text">
                                    <p className="slider__title">NIKE Dunk</p>
                                    <p className="slider__subtitle">Кроссовки Nike Dunk Low «Black White», также известные как «Panda», представляют ретро-модель в двухцветной цветовой гамме, которая подчеркивает четкие линии кроссовок, разработанной дизайнером Питером Муром и отвечающей за легкий переход обуви от лиственного дерева к натуральному. улица. Кожаный верх сочетает в себе белую основу с контрастными черными накладками вокруг носка и пятки. И на тканой бирке на язычке, и на язычке на пятке логотип Nike белого цвета рельефно выделяется на черном фоне.</p>
                                    <p className="slider__price">19 911 P</p>
                                </div>
                                <img className='slider__img' src="/src/assets/nike.svg" alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
                <button class="slider__arrow arrow-right">
                    <img src="/src/assets/Forward.svg" alt="#" />
                </button>
            </section>

    )
};