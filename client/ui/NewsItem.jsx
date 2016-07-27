import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {NewsRecords} from '../../api/news/NewsRecords.js';
import {Meteor} from 'meteor/meteor';


export default class NewsItem extends Component {


    constructor(props) {
        super(props);


    }























    
    render(){



        if(!this.props.ready){return <span>Loading...</span>}

        const { news_records } = this.props;


        return(


            
            <div>





                <div>
                    <div className="clearfix" />
                    <div className="theme-search">
                        <div className="left-theme">
                            <h1>Новости</h1>
                        </div>
                        <div className="right-theme">
                            <input type="text" placeholder="Я ищу..." />
                            <button type="button">Найти</button>
                        </div>
                    </div>
                    <div id="news">
                        <div className="theme">
                            <ul>
                                <li><a href="#">Все новости</a></li>
                                <li><a href="#">Новости регионов</a></li>
                                <li><a href="#">Пресс-релизы</a></li>
                                <li><a href="#">Анонсы</a></li>
                                <li><a href="#">Опрос</a></li>
                                <li className="right"><a href="#" className="active">Календарь <span className="calendar active" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="content-news">
                            <div id="blocks-news" className="cell-8">



                                <h2>{news_records.title}</h2>
                                <div>
                                    <storng className="category">Политика</storng>
                                    <span className="date-news">{news_records.createdAt}</span>
                                    <img src="img/icons/shared-grey.png" alt="shared" className="right" />
                                </div>
                                <div className="large-block">
                                    <img src={news_records.urlImage} alt="конференция" />
                                </div>
                                <div className="description-topic">
                                    <p>{news_records.truncateText}</p>
                                </div>
                                <div className="description">



                                    <div dangerouslySetInnerHTML={{__html: news_records.text}} />

                                    <div className="soc-set">
                                        <a href="#facebook" className="facebook" />
                                        <a href="#vk" className="vk" />
                                        <a href="#google" className="google" />
                                        <a href="#odn" className="odn" />
                                        <a href="#twitter" className="twitter" />
                                    </div>
                                </div>
                            </div>
                            <div id="blog" className="cell-4">
                                <h2 className="see-also">Смотрите также</h2>
                                <div className="cell-12">
                                    <div className="medium-block">
                                        <span className="category"><i>Политика</i></span>
                                        <img src="img/center-block/region.jpg" alt="регион" />
                                        <div className="topic">
                                            <h2>Автопробег в Костанайской области</h2>
                                            <span className="date"><i>6 июля, 2016</i></span>
                                        </div>
                                    </div>
                                    <div className="medium-block">
                                        <span className="category"><i>Политика</i></span>
                                        <img src="img/center-block/region.jpg" alt="регион" />
                                        <div className="topic">
                                            <h2>Автопробег в Костанайской области</h2>
                                            <span className="date"><i>6 июля, 2016</i></span>
                                        </div>
                                    </div>
                                    <div className="medium-block-2">
                                        <img src="img/top-block/electron.jpg" alt="Общественная Приемная" />
                                        <div className="topic-electron">
                                            <div className="content-app">
                                                <span>Электронная</span>
                                                <h3><i>Общественная Приемная</i></h3>
                                                <span>партии “Нұр Отан”</span>
                                                <ul>
                                                    <li>
                                                        <a href="#"><img src="img/icons/edit.png" alt="edit" /> Подать обращение</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><img src="img/icons/persons.png" alt="persons" /> Записаться на
                                                            прием</a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><img src="img/icons/question.png" alt="question" /> Задать вопрос</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="medium-block-2">
                                        <img src="img/top-block/partia.jpg" alt="партия" />
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                    <div className="clearfix" />
                    <div id="see-also-blog">
                        <h2 className="see-also">Смотрите также</h2>
                        <div className="blog-description-news">
                            <div className="mini-news cell-3">
                                <storng className="category">Политика</storng>
                                <span className="date-news">1 июля, 2016</span>
                                <p>Автопробег «Ұлы Дала азаматтары» побывал в Павлодаре</p>
                                <a href="#" className="shared"><img src="img/icons/shared-grey.png" alt="shared" /></a>
                            </div>
                            <div className="mini-news cell-3">
                                <storng className="category">Политика</storng>
                                <span className="date-news">1 июля, 2016</span>
                                <p>Автопробег «Ұлы Дала азаматтары» побывал в Павлодаре</p>
                                <a href="#" className="shared"><img src="img/icons/shared-grey.png" alt="shared" /></a>
                            </div>
                            <div className="mini-news cell-3">
                                <storng className="category">Политика</storng>
                                <span className="date-news">1 июля, 2016</span>
                                <p>Автопробег «Ұлы Дала азаматтары» побывал в Павлодаре</p>
                                <a href="#" className="shared"><img src="img/icons/shared-grey.png" alt="shared" /></a>
                            </div>
                            <div className="mini-news cell-3">
                                <storng className="category">Политика</storng>
                                <span className="date-news">1 июля, 2016</span>
                                <p>Автопробег «Ұлы Дала азаматтары» побывал в Павлодаре</p>
                                <a href="#" className="shared"><img src="img/icons/shared-grey.png" alt="shared" /></a>
                            </div>
                            <div className="mini-news cell-3">
                                <storng className="category">Политика</storng>
                                <span className="date-news">1 июля, 2016</span>
                                <p>Автопробег «Ұлы Дала азаматтары» побывал в Павлодаре</p>
                                <a href="#" className="shared"><img src="img/icons/shared-grey.png" alt="shared" /></a>
                            </div>
                            <div className="mini-news cell-3">
                                <storng className="category">Политика</storng>
                                <span className="date-news">1 июля, 2016</span>
                                <p>Автопробег «Ұлы Дала азаматтары» побывал в Павлодаре</p>
                                <a href="#" className="shared"><img src="img/icons/shared-grey.png" alt="shared" /></a>
                            </div>
                            <div className="mini-news cell-3">
                                <storng className="category">Политика</storng>
                                <span className="date-news">1 июля, 2016</span>
                                <p>Автопробег «Ұлы Дала азаматтары» побывал в Павлодаре</p>
                                <a href="#" className="shared"><img src="img/icons/shared-grey.png" alt="shared" /></a>
                            </div>
                            <div className="mini-news cell-3">
                                <storng className="category">Политика</storng>
                                <span className="date-news">1 июля, 2016</span>
                                <p>Автопробег «Ұлы Дала азаматтары» побывал в Павлодаре</p>
                                <a href="#" className="shared"><img src="img/icons/shared-grey.png" alt="shared" /></a>
                            </div>
                            <button className="load-more" type="button">Загрузить еще</button>
                        </div>
                    </div>
                    <div id="category-blog">
                        <ul>
                            <li><a href="#" className="active">Все категории</a></li>
                            <li><a href="#">Популярное</a></li>
                            <li className="right"><a href="#" className="active">Календарь <span className="calendar active" /></a>
                            </li>
                        </ul>
                        <div className="blog-description-news">
                            <div className="mini-news cell-5">
                                <storng className="category">Партия</storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category">Политика</storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category">Культура</storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category">Регионы</storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category">Спорт</storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category">Общество</storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category">Программы</storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category">Стратегия</storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category">Бизнес</storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category">Развитие</storng>
                            </div>
                            <button className="load-more" type="button">Показать все</button>
                        </div>
                    </div>
                    <div className="slider-bottom">
                        <div className="item">
                            <a href="#">www.akorda.kz</a>
                            <span>Официальный сайт Президента РК</span>
                        </div>
                        <div className="item">
                            <a href="#">www.ipp.kz</a>
                            <span>Официальный сайт Президента РК</span>
                        </div>
                        <div className="item">
                            <a href="#">www.nurmedia.kz</a>
                            <span>Официальный сайт Президента РК</span>
                        </div>
                        <div className="item">
                            <a href="#">www.zhasotan.kz</a>
                            <span>Официальный сайт Президента РК</span>
                        </div>
                        <div className="item">
                            <a href="#">www.zhasotan.kz</a>
                            <span>Официальный сайт Президента РК</span>
                        </div>
                        <div className="item">
                            <a href="#">www.akorda.kz</a>
                            <span>Официальный сайт Президента РК</span>
                        </div>
                        <div className="item">
                            <a href="#">www.akorda.kz</a>
                            <span>Официальный сайт Президента РК</span>
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>




                






            </div>
            
            
        )
        
        
        
        
    }
    
    
    
    

}






NewsItem.propTypes = {
    ready: PropTypes.bool.isRequired,
    news_records: PropTypes.object.isRequired
};

export default createContainer((params) => {
    return {
        ready: Meteor.subscribe('news_records', params.params.slug).ready(),
        news_records: NewsRecords.findOne(params.params.slug)
    }
}, NewsItem)


