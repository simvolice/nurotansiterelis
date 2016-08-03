/**
 * Created by user on 19.07.2016.
 */


import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Link, IndexLink} from 'react-router';
import {NewsRecords} from '../../api/news/NewsRecords.js';
import {Meteor} from 'meteor/meteor';

import '../js/responsive.min.js';

import I18n from 'meteor/timoruetten:react-i18n';
import lodash from 'lodash';
import SliderBottom from './SliderBottom';
import SliderVideo from './SliderVideo';
import SliderCenter from './SliderCenter';
import { TAPi18n } from 'meteor/tap:i18n';
import moment from 'moment';
Meteor.subscribe('news_records');


export default class News extends Component {



    constructor(props){
        super(props);

     





    }



    componentDidMount(){



        $(".burger").on('click', function(){
            $('.small-menu').toggle();
            console.log("ok");
        });



    }
   



    render_news(){






        lodash.reverse(this.props.news_records);


       const newArr = lodash.dropRight(this.props.news_records, this.props.news_records.length - 4);



        return(
            newArr.map((news , i) => (


                <div className="news-block" key={i}>
                    <div className="line">
                        <img src={news.urlImage} alt="новость" className="img-news" />
                        <div className="topic">
                            <Link to={`/news/${news._id}`}><h2>{news.title}</h2></Link>

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


            <div>

                {/* Main*/}
                <div id="main">
                    {/* Top news */}
                    <div id="top-news" className="center">
                        <div className="cell-6 cell-medium-12 last">
                            <div className="large-block">
                                <span className="category"><i><I18n i18nkey="politics"/></i></span>
                                <img src="img/top-block/conference.jpg" alt="конференция" />
                                <div className="topic">
                                    <h2><I18n i18nkey="firstPolitics"/></h2>
                                    <span className="date"><i>3 <I18n i18nkey="August"/>, 2016</i></span>
                                </div>
                            </div>
                        </div>
                        <div className="cell-6 cell-medium-12 last">
                            <div className="cell-6">
                                <div className="medium-block">
                                    <span className="category"><i>Политика</i></span>
                                    <img src="img/top-block/floar.jpg" alt="конференция" />
                                    <div className="topic">
                                        <h2><I18n i18nkey="secondPolitics"/></h2>
                                        <span className="date"><i>3 <I18n i18nkey="August"/>, 2016</i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="cell-6">
                                <div className="medium-block">
                                    <img src="img/top-block/partia-2.jpg" alt="партия" />
                                </div>
                            </div>
                            <div className="cell-6">
                                <div className="medium-block-2">
                                    <span className="category"><i><I18n i18nkey="sport"/></i></span>
                                    <img src="img/top-block/politic.jpg" alt="политика" />
                                    <div className="topic">
                                        <h2><I18n i18nkey="firstSport"/></h2>
                                        <span className="date"><i>3 <I18n i18nkey="August"/>, 2016</i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="cell-6">
                                <div className="medium-block-2">
                                    <img src="img/top-block/partia.jpg" alt="партия" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*End top news*/}
                    {/* News */}
                    <div id="news" className="center">
                        <div className="clearfix" />
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
                                    <span className="date"><i>3 <I18n i18nkey="August"/>, 2016</i></span>
                                    <span className="shared"><a href="#"><img src="img/icons/shared.png" alt="shared" /></a></span>
                                </div>
                            </div>
                            <div className="medium-block">
                                <span className="category"><i><I18n i18nkey="politics"/></i></span>
                                <img src="img/center-block/region.jpg" alt="регион" />
                                <div className="topic">
                                    <h2><I18n i18nkey="secondPolitics"/></h2>
                                    <span className="date"><i>3 <I18n i18nkey="August"/>, 2016</i></span>
                                    <span className="shared"><a href="#"><img src="img/icons/shared.png" alt="shared" /></a></span>
                                </div>
                            </div>
                            


                            {this.render_news()}


                            <button className="load-more" type="button"><I18n i18nkey="LoadMore"/></button>
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
                                                <li><a href="#"><img src="img/icons/edit.png" alt="edit" /> <I18n i18nkey="PostTreatment"/></a></li>
                                                <li><a href="#"><img src="img/icons/persons.png" alt="persons" /> <I18n i18nkey="MakeAnAppointment"/></a></li>
                                                <li><a href="#"><img src="img/icons/question.png" alt="question" /> <I18n i18nkey="AskAQuestion"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabs" data-tabs>
                                    <ul>
                                        <li><a href="#"><I18n i18nkey="COMMENTS"/></a></li>
                                        <li>
                                            <a href="#" className="icon twitter">Twitter</a>
                                        </li>
                                        <li>
                                            <a href="#" className="icon facebook">Facebook</a>
                                        </li>
                                    </ul>
                                    <section>

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




                                    </section>
                                        <section><p>Twitter api</p></section>
                                        <section><p>Facebook api</p></section>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </div>
                    {/*End News*/}
                    {/*Center green block*/}
                    <div id="green-block">
                        <div className="content-center">
                            <div id="review">
                                <h2 className="opinion"><i><I18n i18nkey="opinions"/></i></h2>
                                <div className="yellow-block">
                                    <p><I18n i18nkey="AllOpinions"/></p>
                                    <img src="img/icons/quick.png" alt="комментари" className="quick" />
                                    <a href="#shred"><img src="img/icons/shared-black.png" alt="поделиться" className="shared-black" /></a>
                                </div>
                                <div className="persons">
                                    <div className="person">
                                        <img src="img/person/person-1.jpg" alt="person" />
                                        <div className="description">
                                            <span><I18n i18nkey="FirstOpinTitle"/></span>
                                            <h2><I18n i18nkey="FirstOpinName"/></h2>
                                            <p><I18n i18nkey="FirstOpinText"/></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="persons">
                                    <div className="person">
                                        <img src="img/person/person-2.jpg" alt="person" />
                                        <div className="description">
                                            <span><I18n i18nkey="SecondOpinTitle"/></span>
                                            <h2><I18n i18nkey="SecondOpinName"/></h2>
                                            <p><I18n i18nkey="SecondOpinText"/></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="persons">
                                    <div className="person">
                                        <img src="img/person/person-3.jpg" alt="person" />
                                        <div className="description">
                                            <span><I18n i18nkey="ThirdOpinTitle"/></span>
                                            <h2><I18n i18nkey="ThirdOpinName"/></h2>
                                            <p><I18n i18nkey="ThirdOpinText"/></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                            
                           
                            
                            <SliderCenter/>
                            
                            
                            
                            
                        </div>
                    </div>
                    {/*End Center green block*/}
                    {/*Video*/}
                    
                    
                    
                    
                    <SliderVideo/>
                    
                    
                    
                    
                    
                    {/*End video*/}
                    {/*Photo*/}
                    <div id="photo" className="center">
                        <h2><i><I18n i18nkey="photo"/></i></h2>
                        <div className="black-block">
                            <div className="cell-6 cell-medium-12 last">
                                <div className="large-block">
                                    <img src="img/bottom-block/politic.jpg" alt="политик" />
                                    <div className="topic">
                                        <h2><I18n i18nkey="firstPhoto"/></h2>
                                        <a href>
                                            <img src="img/icons/instagram.png" alt="instagram" className="right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="cell-6 cell-medium-12 last">
                                <div className="cell-6">
                                    <div className="medium-block">
                                        <div className="category">
                                            <a href><img src="img/icons/instagram.png" alt="instagram" /></a>
                                        </div>
                                        <img src="img/bottom-block/politic-2.jpg" alt="политик" />
                                        <div className="topic">
                                            <h2><I18n i18nkey="secondPhoto"/></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell-6">
                                    <div className="medium-block">
                                        <div className="category">
                                            <a href><img src="img/icons/instagram.png" alt="instagram" /></a>
                                        </div>
                                        <img src="img/bottom-block/politic-3.jpg" alt="политик" />
                                        <div className="topic">
                                            <h2><I18n i18nkey="fourthPhoto"/></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell-6">
                                    <div className="medium-block-2">
                                        <div className="category">
                                            <a href><img src="img/icons/instagram.png" alt="instagram" /></a>
                                        </div>
                                        <img src="img/bottom-block/politic-4.jpg" alt="политик" />
                                        <div className="topic">
                                            <h2><I18n i18nkey="thirdPhoto"/></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell-6">
                                    <div className="medium-block-2">
                                        <div className="category">
                                            <a href><img src="img/icons/instagram.png" alt="instagram" /></a>
                                        </div>
                                        <img src="img/bottom-block/politic-5.jpg" alt="политик" />
                                        <div className="topic">
                                            <h2><I18n i18nkey="fifthPhoto"/></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                    {/*End Photo*/}
                    {/*Slider links*/}
                    
                    <SliderBottom/>
                    
                    
             
                    {/*End Slider links*/}
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
