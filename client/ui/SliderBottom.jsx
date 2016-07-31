import React, {Component} from 'react';

import '../js/owl.carousel.min.js';

import I18n from 'meteor/timoruetten:react-i18n';

export default class SliderBottom extends Component {



    componentDidMount(){



       
        $('.slider-bottom').owlCarousel({
            loop: true,
            items: 5,
            margin: 10,
            nav: true,
            pagination: true,
            navText: ["<", ">"],
            responsive: {
                0: {
                    items: 2
                },
                960: {
                    items: 5
                }
            }
        });



      
    }
    
    
    
    render(){
        
        
        return(





            <div id="slider-block" className="slider-bottom">
                <div className="item">
                    <a href="#">www.akorda.kz</a>
                    <span><I18n i18nkey="ofSiteRK"/></span>
                </div>
                <div className="item">
                    <a href="#">www.ipp.kz</a>
                    <span><I18n i18nkey="ofSiteRK"/></span>
                </div>
                <div className="item">
                    <a href="#">www.nurmedia.kz</a>
                    <span><I18n i18nkey="ofSiteRK"/></span>
                </div>
                <div className="item">
                    <a href="#">www.zhasotan.kz</a>
                    <span><I18n i18nkey="ofSiteRK"/></span>
                </div>
                <div className="item">
                    <a href="#">www.zhasotan.kz</a>
                    <span><I18n i18nkey="ofSiteRK"/></span>
                </div>
                <div className="item">
                    <a href="#">www.akorda.kz</a>
                    <span><I18n i18nkey="ofSiteRK"/></span>
                </div>
                <div className="item">
                    <a href="#">www.akorda.kz</a>
                    <span><I18n i18nkey="ofSiteRK"/></span>
                </div>
                <div className="clearfix" />
            </div>
            
            
            
            
        )
        
        
        
    }
    
    
    
    
    
    
}