import React, {Component} from 'react';
import '../js/owl.carousel.min.js';

import I18n from 'meteor/timoruetten:react-i18n';

export default class SliderCenter extends Component{
    
    

    
    render(){



        return(




            <div id="slider-center">
                <div className="tabs" data-tabs>
                    <ul>
                        <li><a href="#"><I18n i18nkey="PROJECTS"/></a></li>
                        <li><a href="#"><I18n i18nkey="dialoguePlatforms"/></a></li>
                    </ul>
                    <section className="slider-green">
                        <div className="carousel">
                            <figure className="carousel-active">
                                <img src="img/slider/ardagerler.jpg" alt="Ардагерлер" />
                                <figcaption>
                                    <h4><I18n i18nkey="BringingDownBarriers"/></h4>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src="img/slider/ardagerler.jpg" alt="Ардагерлер" />
                                <figcaption>
                                    <h4><I18n i18nkey="BringingDownBarriers"/></h4>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src="img/slider/ardagerler.jpg" alt="Ардагерлер" />
                                <figcaption>
                                    <h4><I18n i18nkey="BringingDownBarriers"/></h4>
                                </figcaption>
                            </figure>
                            <button>&lt;</button>
                            <button className="forward">&gt;</button>
                        </div>
                    </section>
                    <section className="slider-green">
                        <div className="carousel">
                            <figure className="carousel-active">
                                <img src="img/slider/ardagerler.jpg" alt="Ардагерлер" />
                                <figcaption>
                                    <h4><I18n i18nkey="BringingDownBarriers"/></h4>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src="img/slider/ardagerler.jpg" alt="Ардагерлер" />
                                <figcaption>
                                    <h4><I18n i18nkey="BringingDownBarriers"/></h4>
                                </figcaption>
                            </figure>
                            <figure>
                                <img src="img/slider/ardagerler.jpg" alt="Ардагерлер" />
                                <figcaption>
                                    <h4><I18n i18nkey="BringingDownBarriers"/></h4>
                                </figcaption>
                            </figure>
                            <button>&lt;</button>
                            <button className="forward">&gt;</button>
                        </div>
                    </section>
                </div>
            </div>



        )
        
        
        
        
    }
    
}





