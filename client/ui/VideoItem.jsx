import React, {Component} from 'react';
import SliderBottom from './SliderBottom';

import I18n from 'meteor/timoruetten:react-i18n';


export default class VideoItem extends Component{





    render(){


        const divStyle = {
            paddingLeft: 50

        };



        return(

            <div>


                {/* Main*/}
                <div id="main" className="video-page">
                    {/*Theme blog*/}
                    <div className="theme-search center">
                        <div className="left-theme">
                            <h1 style={divStyle}><I18n i18nkey="video"/></h1>
                        </div>
                        <div className="right-theme">
                            <input type="text" placeholder="Я ищу..." />
                            <button type="button"><I18n i18nkey="find"/></button>
                        </div>
                        <div className="clearfix" />
                    </div>
                    {/*Theme block*/}
                    <div id="theme" className="theme center">
                        <ul>
                            <li> <a href="#back" className="back"><I18n i18nkey="BackTo"/> </a><span className="active"><I18n i18nkey="Allvideos"/></span></li>
                            <li className="right"><a href="#" className="active"><I18n i18nkey="calendar"/> <span className="calendar active" /></a>
                            </li>
                            <div className="clearfix" />
                        </ul>
                    </div>
                    {/*End theme block*/}
                    {/*Main video*/}
                    <div id="main-video" className="center">
                        <div className="content-news">
                            <div id="blocks-news" className="cell-8">
                                <h2><I18n i18nkey="firstNewsVideoItem"/></h2>
                                <div>
                                    <storng className="category"><I18n i18nkey="politics"/></storng>
                                    <span className="date-news">3 <I18n i18nkey="August"/>, 2016</span>
                                    <img src="/../img/icons/shared-grey.png" alt="shared" className="right" />
                                </div>
                                <div className="large-block">
                                    <a href="https://www.youtube.com/embed/YjUXZjTjJ9E" data-modal-title="Коротко о Плане нации - 100 конкретных шагов">
                                        <img src="/../img/top-block/conference.jpg" alt="конференция" />
                                    </a>
                                </div>
                                <div className="description-topic">
                                    <p>
                                        <I18n i18nkey="secondNewsVideoItem"/>
                                    </p>
                                </div>
                                <div className="description">
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
                                <h2 className="see-also"><I18n i18nkey="seeAlso"/></h2>
                                <div className="cell-12">
                                    <div className="video item text-center">
                                        <a href="https://www.youtube.com/embed/YjUXZjTjJ9E" data-modal-title="Коротко о Плане нации - 100 конкретных шагов">
                                            <img src="../img/poster/video-poster1.png"/>
                                        </a>
                                        <p><I18n i18nkey="steps"/></p>
                  <span className="date">
                    <strong><i>3 <I18n i18nkey="August"/>, 2016</i></strong>
                  </span>
                  <span className="answer">
                    <strong><i>12</i></strong>
                  </span>
                                    </div>
                                    <div className="video item text-center">
                                        <a href="https://www.youtube.com/embed/YjUXZjTjJ9E" data-modal-title="Коротко о Плане нации - 100 конкретных шагов">
                                            <img src="../img/poster/video-poster1.png" />
                                        </a>
                                        <p><I18n i18nkey="steps"/></p>
                  <span className="date">
                    <strong><i>3 <I18n i18nkey="August"/>, 2016</i></strong>
                  </span>
                  <span className="answer">
                    <strong><i>12</i></strong>
                  </span>
                                    </div>
                                    <div className="medium-block-2">
                                        <img src="../img/top-block/partia.jpg" alt="партия" />
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                    {/*End main video*/}
                    {/*See also blog*/}
                    <div id="see-also-blog">
                        <h2 className="see-also"><I18n i18nkey="seeAlso"/></h2>
                        <div className="blog-description-news">
                            <div className="mini-news cell-3">
                                <div className="video item text-center">
                                    <a href="https://www.youtube.com/embed/YjUXZjTjJ9E" data-modal-title="Коротко о Плане нации - 100 конкретных шагов">
                                        <img src="../img/poster/video-poster1.png" />
                                    </a>
                                    <p><I18n i18nkey="steps"/></p>
                <span className="date">
                  <strong><i>3 <I18n i18nkey="August"/>, 2016</i></strong>
                </span>
                <span className="answer">
                  <strong><i>12</i></strong>
                </span>
                                </div>
                            </div>
                            <div className="mini-news cell-3">
                                <div className="video item text-center">
                                    <a href="https://www.youtube.com/embed/YjUXZjTjJ9E" data-modal-title="Коротко о Плане нации - 100 конкретных шагов">
                                        <img src="../img/poster/video-poster1.png" />
                                    </a>
                                    <p><I18n i18nkey="steps"/></p>
                <span className="date">
                  <strong><i>3 <I18n i18nkey="August"/>, 2016</i></strong>
                </span>
                <span className="answer">
                  <strong><i>12</i></strong>
                </span>
                                </div>
                            </div>
                            <div className="mini-news cell-3">
                                <div className="video item text-center">
                                    <a href="https://www.youtube.com/embed/YjUXZjTjJ9E" data-modal-title="Коротко о Плане нации - 100 конкретных шагов">
                                        <img src="../img/poster/video-poster1.png" />
                                    </a>
                                    <p><I18n i18nkey="steps"/></p>
                <span className="date">
                  <strong><i>3 <I18n i18nkey="August"/>, 2016</i></strong>
                </span>
                <span className="answer">
                  <strong><i>12</i></strong>
                </span>
                                </div>
                            </div>
                            <div className="mini-news cell-3">
                                <div className="video item text-center">
                                    <a href="https://www.youtube.com/embed/YjUXZjTjJ9E" data-modal-title="Коротко о Плане нации - 100 конкретных шагов">
                                        <img src="../img/poster/video-poster1.png" />
                                    </a>
                                    <p><I18n i18nkey="steps"/></p>
                <span className="date">
                  <strong><i>3 <I18n i18nkey="August"/>, 2016</i></strong>
                </span>
                <span className="answer">
                  <strong><i>12</i></strong>
                </span>
                                </div>
                            </div>
                            <button className="load-more" type="button"><I18n i18nkey="LoadMore"/></button>
                        </div>
                    </div>
                    {/*End see also blog*/}
                    {/*Category blog*/}
                    <div id="category-blog">
                        <ul>
                            <li><a href="#" className="active"><I18n i18nkey="AllCategories"/></a></li>
                            <li><a href="#"><I18n i18nkey="Popular"/></a></li>
                            <li className="right"><a href="#" className="active"><I18n i18nkey="calendar"/> <span className="calendar active" /></a>
                            </li>
                        </ul>
                        <div className="blog-description-news">
                            <div className="mini-news cell-5">
                                <storng className="category"><I18n i18nkey="consignment"/></storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category"><I18n i18nkey="politics"/></storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category"><I18n i18nkey="culture"/></storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category"><I18n i18nkey="Regions"/></storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category"><I18n i18nkey="sport"/></storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category"><I18n i18nkey="Society"/></storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category"><I18n i18nkey="Programs"/></storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category"><I18n i18nkey="Strategy"/></storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category"><I18n i18nkey="Business"/></storng>
                            </div>
                            <div className="mini-news cell-5">
                                <storng className="category"><I18n i18nkey="Development"/></storng>
                            </div>
                            <button className="load-more" type="button"><I18n i18nkey="showAll"/></button>
                        </div>
                    </div>
                    {/*End category blog*/}
                    {/*Slider links*/}


                    <SliderBottom/>
                    {/*End Slider links*/}
                
                </div>
                {/* End Main */}





            </div>



        )



    }






}