/**
 * Created by user on 19.07.2016.
 */


import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {NewsRecords} from '../../api/news/NewsRecords.js';
import {Meteor} from 'meteor/meteor';
import '../js/owl.carousel.min.js';


Meteor.subscribe('news_records');


export default class News extends Component {



    constructor(props){
        super(props);

     





    }
    render_news(){




        return(
            this.props.news_records.map((news) => (


                <div className="news-block">
                    <div className="line">
                        <img src={news.urlImage} alt="новость" className="img-news" />
                        <div className="topic">
                            <h2>{news.title}</h2>
                            <p>{news.truncateText}</p>
                            <span className="date"><i>{news.createdAt}</i></span>
                            <span className="shared"><a href="#"><img src="img/icons/shared-grey.png" alt="shared" /></a></span>
                        </div>
                    </div>
                </div>




                )
            )
        )
    }


    render(){
        return(



            <div id="news">


            <div id="blocks-news" className="cell-8">
            <div className="theme">
            <h2><i>Новости</i></h2>
            <ul>
            <li><a href="#">Все новости</a></li>
        <li><a href="#">Новости регионов</a></li>
        <li><a href="#">Пресс-релизы</a></li>
            <li><a href="#">Анонсы</a></li>
            <li><a href="#">Опрос</a></li>
            <li><a href="#" className="active">Календарь <span className="calendar active" /></a></li>
            </ul>
            </div>
            <div className="medium-block">
            <span className="category"><i>Политика</i></span>
            <img src="img/center-block/obce.jpg" alt="обсе" />
            <div className="topic">
            <h2>Делегация Казахстана выступила на сессии ПА ОБСЕ</h2>
        <span className="date"><i>6 июля, 2016</i></span>
        <span className="shared"><a href="#"><img src="img/icons/shared.png" alt="shared" /></a></span>
            </div>
            </div>
            <div className="medium-block">
            <span className="category"><i>Политика</i></span>
            <img src="img/center-block/region.jpg" alt="регион" />
            <div className="topic">
            <h2>Автопробег в Костанайской области</h2>
        <span className="date"><i>6 июля, 2016</i></span>
        <span className="shared"><a href="#"><img src="img/icons/shared.png" alt="shared" /></a></span>
            </div>
            </div>


                {this.render_news()}




            </div>
            <div id="blog" className="cell-4">
            <div className="cell-12">
            {/*<img src="img/center-block/blog.jpg" alt="блог">*/}
            <div className="medium-block-2">
            <img src="img/top-block/electron.jpg" alt="Общественная Приемная" />
            <div className="topic-electron">
            <div className="content-app">
            <span>Электронная</span>
            <h3><i>Общественная Приемная</i></h3>
        <span>партии “Нұр Отан”</span>
        <ul>
        <li><a href="http://46.101.144.160/addcomplaint"><img src="img/icons/edit.png" alt="edit" /> Подать обращение</a></li>
        <li><a href="#"><img src="img/icons/persons.png" alt="persons" /> Записаться на прием</a></li>
        <li><a href="#"><img src="img/icons/question.png" alt="question" /> Задать вопрос</a></li>
        </ul>
        </div>
        </div>
        </div>
        <div className="tabs-2">
            <ul>
            <li>Комментари</li>
            <li>
            <span className="social">
            <a href="#twitter" className="twitter" />
            </span>
            Twitter
            </li>
            <li>
            <span className="social">
            <a href="#facebook" className="facebook" />
            </span>
            Facebook
            </li>
            </ul>
            <div>
            <div>
            <div className="comment">
            <p>В Майском районном филиале партии обсудили вопросы медиации</p>
        <span className="date">
            <strong><i>11 июля, 2016</i></strong>
        </span>
        <span className="answer">
            <strong><i>12</i></strong>
            </span>
            </div>
            <div className="comment">
            <p>Facebook В Майском районном филиале партии обсудили вопросы медиации</p>
        <span className="date">
            <strong><i>11 июля, 2016</i></strong>
        </span>
        <span className="answer">
            <strong><i>12</i></strong>
            </span>
            </div>
            <div className="comment">
            <p>Twitter В Майском районном филиале партии обсудили вопросы медиации</p>
        <span className="date">
            <strong><i>11 июля, 2016</i></strong>
        </span>
        <span className="answer">
            <strong><i>12</i></strong>
            </span>
            </div>
            </div>
            <div><p>Twitter api</p></div>
        <div><p>Facebook api</p></div>
        </div>
        </div>
        </div>
        </div>
        </div>








        )


    }




}

News.propTypes = {
    news_records: PropTypes.array.isRequired,
};

export default createContainer(() => {
    return {
        news_records: NewsRecords.find({}).fetch(),
    }
}, News);
