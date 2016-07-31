import React, {Component} from 'react';
import '../js/owl.carousel.min.js';

import I18n from 'meteor/timoruetten:react-i18n';

export default class SliderCenter extends Component{
    
    
    componentDidMount(){


        $('.owl-carousel').owlCarousel({
            loop: true,
            items: 1,
            margin: 10,
            nav: true,
            navText: ["<", ">"],
            responsive: {
                0: {
                    items: 1
                }
            }
        });



    }
    
    
    render(){
        
        return(


            <div id="slider-center">
                <div className="tabs">
                    <ul>
                        <li><I18n i18nkey="PROJECTS"/></li>
                        <li><I18n i18nkey="dialoguePlatforms"/></li>
                    </ul>
                    <div>
                        <div className="slider-green">
                            <div className="owl-carousel">
                                <div className="item">
                                    <img src="img/slider/ardagerler.jpg" alt="Ардагерлер" />
                                    <h4>«БУДУЩЕЕ БЕЗ БАРЬЕРОВ»</h4>
                                </div>
                                <div className="item">
                                    <img src="img/slider/ardagerler.jpg" alt="Ардагерлер" />
                                    <h4>«БУДУЩЕЕ БЕЗ БАРЬЕРОВ»</h4>
                                </div>
                                <div className="item">
                                    <img src="img/slider/ardagerler.jpg" alt="Ардагерлер" />
                                    <h4>«БУДУЩЕЕ БЕЗ БАРЬЕРОВ»</h4>
                                </div>
                            </div>
                        </div>
                        <div className="slider-green">
                            <div className="owl-carousel">
                                <div className="item">
                                    <img src="img/slider/ardagerler.jpg" alt="Ардагерлер" />
                                </div>
                                <div className="item"><img src="img/slider/ardagerler.jpg" alt="Ардагерлер" /></div>
                                <div className="item"><img src="img/slider/ardagerler.jpg" alt="Ардагерлер" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        )
        
        
        
        
    }
    
}





