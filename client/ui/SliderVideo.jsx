import React, {Component} from 'react';
import '../js/owl.carousel.min.js';
import {Link, IndexLink} from 'react-router';
import I18n from 'meteor/timoruetten:react-i18n';
import moment from 'moment';

export default class SliderVideo extends Component{
    
    
    componentDidMount(){

        $('.columns-video').owlCarousel({
            loop: true,
            items: 4,
            margin: 10,
            nav: true,
            pagination: true,
            navText: ["<", ">"],
            responsive: {
                0: {
                    items: 2
                },
                960: {
                    items: 4
                }
            }
        }); 
        
        
        
    }
    
    
    render(){
        
        return(

            <div id="videos">
                <Link to="/videos"><h2><i><I18n i18nkey="video"/></i></h2></Link>
                <div className="columns-video">
                    <div className="video item">
                        <a href="https://www.youtube.com/embed/YjUXZjTjJ9E" data-modal-title="Коротко о Плане нации - 100 конкретных шагов">
                            <img src="http://img.youtube.com/vi/YjUXZjTjJ9E/0.jpg" />
                        </a>
                        <p><I18n i18nkey="steps"/></p>
              <span className="date">
                <strong><i>3 <I18n i18nkey="August"/>, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
                    </div>
                    <div className="video item">
                        <a href="https://www.youtube.com/embed/YjUXZjTjJ9E" data-modal-title="Коротко о Плане нации - 100 конкретных шагов">
                            <img src="http://img.youtube.com/vi/YjUXZjTjJ9E/0.jpg" />
                        </a>
                        <p><I18n i18nkey="steps"/></p>
              <span className="date">
                <strong><i>3 <I18n i18nkey="August"/>, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
                    </div>
                    <div className="video item">
                        <a href="https://www.youtube.com/embed/YjUXZjTjJ9E" data-modal-title="Коротко о Плане нации - 100 конкретных шагов">
                            <img src="http://img.youtube.com/vi/YjUXZjTjJ9E/0.jpg" />
                        </a>
                        <p><I18n i18nkey="steps"/></p>
              <span className="date">
                <strong><i>3 <I18n i18nkey="August"/>, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
                    </div>
                    <div className="video item"><a href="https://www.youtube.com/embed/YjUXZjTjJ9E" data-modal-title="Коротко о Плане нации - 100 конкретных шагов">
                        <img src="http://img.youtube.com/vi/YjUXZjTjJ9E/0.jpg" />
                    </a>
                        <p><I18n i18nkey="steps"/></p>
              <span className="date">
                <strong><i>3 <I18n i18nkey="August"/>, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
                    </div>
                    <div className="video item"><a href="https://www.youtube.com/embed/YjUXZjTjJ9E" data-modal-title="Коротко о Плане нации - 100 конкретных шагов">
                        <img src="http://img.youtube.com/vi/YjUXZjTjJ9E/0.jpg" />
                    </a>
                        <p><I18n i18nkey="steps"/></p>
              <span className="date">
                <strong><i>3 <I18n i18nkey="August"/>, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
                    </div>
                    <div className="video item"><a href="https://www.youtube.com/embed/YjUXZjTjJ9E" data-modal-title="Коротко о Плане нации - 100 конкретных шагов">
                        <img src="http://img.youtube.com/vi/YjUXZjTjJ9E/0.jpg" />
                    </a>
                        <p><I18n i18nkey="steps"/></p>
              <span className="date">
                <strong><i>3 <I18n i18nkey="August"/>, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
                    </div>
                    <div className="video item"><a href="https://www.youtube.com/embed/YjUXZjTjJ9E" data-modal-title="Коротко о Плане нации - 100 конкретных шагов">
                        <img src="http://img.youtube.com/vi/YjUXZjTjJ9E/0.jpg" />
                    </a>
                        <p><I18n i18nkey="steps"/></p>
              <span className="date">
                <strong><i>3 <I18n i18nkey="August"/>, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
                    </div>
                    <div className="video item"><a href="https://www.youtube.com/embed/YjUXZjTjJ9E" data-modal-title="Коротко о Плане нации - 100 конкретных шагов">
                        <img src="http://img.youtube.com/vi/YjUXZjTjJ9E/0.jpg" />
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
            </div>
            
            
            
            
            
        )
        
        
        
        
    }
    
    
    
    
    
    
}