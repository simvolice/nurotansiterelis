/**
 * Created by user on 19.07.2016.
 */


import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {NewsRecords} from '../../api/news/NewsRecords.js';
import {Meteor} from 'meteor/meteor';
import '../js/owl.carousel.min.js';
import I18n from 'meteor/timoruetten:react-i18n';

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
            <h2><i><I18n i18nkey="news"/></i></h2>
            <ul>
            <li><a href="#"><I18n i18nkey="AllNews"/></a></li>
        <li><a href="#"><I18n i18nkey="regionalNews"/></a></li>
        <li><a href="#"><I18n i18nkey="PressReleases"/></a></li>
            <li><a href="#"><I18n i18nkey="announcements"/></a></li>
            <li><a href="#"><I18n i18nkey="Interview"/></a></li>
            <li><a href="#" className="active"><I18n i18nkey="calendar"/> <span className="calendar active" /></a></li>
            </ul>
            </div>
            <div className="medium-block">
            <span className="category"><i><I18n i18nkey="politics"/></i></span>
            <img src="img/center-block/obce.jpg" alt="обсе" />
            <div className="topic">
            <h2><I18n i18nkey="firstNews"/></h2>
        <span className="date"><i>6 июля, 2016</i></span>
        <span className="shared"><a href="#"><img src="img/icons/shared.png" alt="shared" /></a></span>
            </div>
            </div>
            <div className="medium-block">
            <span className="category"><i><I18n i18nkey="politics"/></i></span>
            <img src="img/center-block/region.jpg" alt="регион" />
            <div className="topic">
            <h2><I18n i18nkey="secondPolitics"/></h2>
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
            <span><I18n i18nkey="electronic"/></span>
            <h3><i><I18n i18nkey="publicReception"/></i></h3>
        <span><I18n i18nkey="PartyNurOtan"/></span>
        <ul>
        <li><a href="http://46.101.144.160/addcomplaint"><img src="img/icons/edit.png" alt="edit" /> <I18n i18nkey="PostTreatment"/></a></li>
        <li><a href="#"><img src="img/icons/persons.png" alt="persons" /> <I18n i18nkey="MakeAnAppointment"/></a></li>
        <li><a href="#"><img src="img/icons/question.png" alt="question" /> <I18n i18nkey="AskAQuestion"/></a></li>
        </ul>
        </div>
        </div>
        </div>
        <div className="tabs-2">
            <ul>
            <li><I18n i18nkey="COMMENTS"/></li>
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
