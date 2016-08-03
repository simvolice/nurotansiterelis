import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {NewsRecords} from '../../api/news/NewsRecords.js';
import {Meteor} from 'meteor/meteor';
import ReactDisqusThread from 'react-disqus-thread';
import SliderBottom from './SliderBottom';
import I18n from 'meteor/timoruetten:react-i18n';
Meteor.subscribe('news_records');

export default class NewsItem extends Component {


    constructor(props) {
        super(props);


    }







    
    render(){




        
        const divStyle = {
            paddingLeft: 50

        };

        if(!this.props.ready){return <span></span>}

        const { news_records } = this.props;

        const urlNews = "http://nurotan.kz/news/";


        var settings = {

            shortname: "nurotan-1",
            identifier: news_records._id,
            title : news_records.title,
            url: urlNews + news_records._id

    };


        return(


            
           <div>


               {/* Main*/}
               <div id="main" className="news-page">
                   {/*Theme blog*/}
                   <div className="theme-search center">
                       <div className="left-theme">
                           <h1 style={divStyle}><I18n i18nkey="news"/></h1>
                       </div>
                       <div className="right-theme">
                           <input type="text" placeholder="Я ищу..." />
                           <button type="button"><I18n i18nkey="find"/></button>
                       </div>
                   </div>
                   {/*End blog*/}
                   {/*News*/}
                   <div className="center" id="news">
                       <div className="theme">
                           <ul>
                               <li><a href="#"><I18n i18nkey="AllNews"/></a></li>
                               <li><a href="#"><I18n i18nkey="regionalNews"/></a></li>
                               <li><a href="#"><I18n i18nkey="PressReleases"/></a></li>
                               <li><a href="#"><I18n i18nkey="announcements"/></a></li>
                               <li><a href="#"><I18n i18nkey="Interview"/></a></li>
                               <li className="right"><a href="#" className="active"><I18n i18nkey="calendar"/> <span className="calendar active" /></a>
                               </li>
                           </ul>
                       </div>
                       <div className="content-news">
                           <div id="blocks-news" className="cell-8">
                               <h2>{news_records.title}</h2>
                               <div>
                                   <storng className="category"><I18n i18nkey="politics"/></storng>
                                   <span className="date-news" style={divStyle}>{news_records.createdAt}</span>
                                   <img src="../img/icons/shared-grey.png" alt="shared" className="right" />
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


                                   
                                   <ReactDisqusThread {...settings}/>





                               </div>
                           </div>
                           <div id="blog" className="cell-4">
                               <h2 className="see-also"><I18n i18nkey="seeAlso"/></h2>
                               <div className="cell-12">
                                   <div className="medium-block">
                                       <span className="category"><i><I18n i18nkey="politics"/></i></span>
                                       <img src="../img/center-block/region.jpg" alt="регион" />
                                       <div className="topic">
                                           <h2><I18n i18nkey="secondPolitics"/></h2>
                                           <span className="date"><i>3 <I18n i18nkey="August"/>, 2016</i></span>
                                       </div>
                                   </div>
                                   <div className="medium-block">
                                       <span className="category"><i><I18n i18nkey="politics"/></i></span>
                                       <img src="../img/center-block/region.jpg" alt="регион" />
                                       <div className="topic">
                                           <h2><I18n i18nkey="secondPolitics"/></h2>
                                           <span className="date"><i>3 <I18n i18nkey="August"/>, 2016</i></span>
                                       </div>
                                   </div>
                                   <div className="medium-block-2">
                                       <img src="../img/top-block/electron.jpg" alt="Общественная Приемная" />
                                       <div className="topic-electron">
                                           <div className="content-app">
                                               <span><I18n i18nkey="electronic"/></span>
                                               <h3><i><I18n i18nkey="publicReception"/></i></h3>
                                               <span><I18n i18nkey="PartyNurOtan"/></span>
                                               <ul>
                                                   <li>
                                                       <a href="#"><img src="../img/icons/edit.png" alt="edit" /> <I18n i18nkey="PostTreatment"/></a>
                                                   </li>
                                                   <li>
                                                       <a href="#"><img src="../img/icons/persons.png" alt="persons" /> <I18n i18nkey="MakeAnAppointment"/></a>
                                                   </li>
                                                   <li>
                                                       <a href="#"><img src="../img/icons/question.png" alt="question" /> <I18n i18nkey="AskAQuestion"/></a>
                                                   </li>
                                               </ul>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="medium-block-2">
                                       <img src="../img/top-block/partia.jpg" alt="партия" />
                                   </div>
                               </div>
                           </div>
                           <div className="clearfix"/>
                       </div>
                   </div>
                   {/*End News*/}
                   {/*See see also blog*/}
                   <div id="see-also-blog">
                       <h2 className="see-also"><I18n i18nkey="seeAlso"/></h2>
                       <div className="blog-description-news">
                           <div className="mini-news cell-3">
                               <storng className="category"><I18n i18nkey="politics"/></storng>
                               <span className="date-news">3 <I18n i18nkey="August"/>, 2016</span>
                               <p><I18n i18nkey="cloneNewsItem"/></p>
                               <a href="#" className="shared"><img src="../img/icons/shared-grey.png" alt="shared" /></a>
                           </div>
                           <div className="mini-news cell-3">
                               <storng className="category"><I18n i18nkey="politics"/></storng>
                               <span className="date-news">3 <I18n i18nkey="August"/>, 2016</span>
                               <p><I18n i18nkey="cloneNewsItem"/></p>
                               <a href="#" className="shared"><img src="../img/icons/shared-grey.png" alt="shared" /></a>
                           </div>
                           <div className="mini-news cell-3">
                               <storng className="category"><I18n i18nkey="politics"/></storng>
                               <span className="date-news">3 <I18n i18nkey="August"/>, 2016</span>
                               <p><I18n i18nkey="cloneNewsItem"/></p>
                               <a href="#" className="shared"><img src="../img/icons/shared-grey.png" alt="shared" /></a>
                           </div>
                           <div className="mini-news cell-3">
                               <storng className="category"><I18n i18nkey="politics"/></storng>
                               <span className="date-news">3 <I18n i18nkey="August"/>, 2016</span>
                               <p><I18n i18nkey="cloneNewsItem"/></p>
                               <a href="#" className="shared"><img src="../img/icons/shared-grey.png" alt="shared" /></a>
                           </div>
                           <div className="mini-news cell-3">
                               <storng className="category"><I18n i18nkey="politics"/></storng>
                               <span className="date-news">3 <I18n i18nkey="August"/>, 2016</span>
                               <p><I18n i18nkey="cloneNewsItem"/></p>
                               <a href="#" className="shared"><img src="../img/icons/shared-grey.png" alt="shared" /></a>
                           </div>
                           <div className="mini-news cell-3">
                               <storng className="category"><I18n i18nkey="politics"/></storng>
                               <span className="date-news">3 <I18n i18nkey="August"/>, 2016</span>
                               <p><I18n i18nkey="cloneNewsItem"/></p>
                               <a href="#" className="shared"><img src="../img/icons/shared-grey.png" alt="shared" /></a>
                           </div>
                           <div className="mini-news cell-3">
                               <storng className="category"><I18n i18nkey="politics"/></storng>
                               <span className="date-news">3 <I18n i18nkey="August"/>, 2016</span>
                               <p><I18n i18nkey="cloneNewsItem"/></p>
                               <a href="#" className="shared"><img src="../img/icons/shared-grey.png" alt="shared" /></a>
                           </div>
                           <div className="mini-news cell-3">
                               <storng className="category"><I18n i18nkey="politics"/></storng>
                               <span className="date-news">3 <I18n i18nkey="August"/>, 2016</span>
                               <p><I18n i18nkey="cloneNewsItem"/></p>
                               <a href="#" className="shared"><img src="../img/icons/shared-grey.png" alt="shared" /></a>
                           </div>
                           <button className="load-more" type="button"><I18n i18nkey="LoadMore"/></button>
                       </div>
                   </div>
                   {/*End see also blog*/}
                   {/*Category block*/}
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
                   {/*End category block*/}
                   {/*Slider links*/}


                   <SliderBottom/>

                   
                   {/*End Slider links*/}
                
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


