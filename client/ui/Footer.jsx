import React, {Component} from 'react';

import I18n from 'meteor/timoruetten:react-i18n';
import { TAPi18n } from 'meteor/tap:i18n';

export default class Footer extends Component{




    constructor(props){

        super(props);




    }







    render(){





        return(

            <div>

                {/*Footer*/}
                <footer>
                    <div className="menu-bottom">
                        <ul>
                            <li><a href="#" className="active"><I18n i18nkey="main"/></a></li>
                            <li><a href="#"><I18n i18nkey="consignment"/></a></li>
                            <li><a href="#"><I18n i18nkey="faction"/></a></li>
                            <li><a href="#"><I18n i18nkey="news"/></a></li>
                            <li><a href="#"><I18n i18nkey="PolicyDocuments"/></a></li>
                            <li><a href="#"><I18n i18nkey="Regions"/></a></li>
                            <li><a href="#"><I18n i18nkey="PublicReception"/></a></li>
                        </ul>
                    </div>
                    <div className="cell-2">
                        <img src="img/logo-2.png" alt="Нур отан логотип" className="logo2" />
                    </div>
                    <div className="block-top-right">
                        <input type="text" placeholder="Я ищу..." className="search" />
          <span className="social">
            <a href="#twitter" className="twitter" />
            <a href="#facebook" className="facebook" />
            <a href="#google-plus" className="google-plus" />
            <a href="#youtube" className="youtube" />
            <a href="#rss" className="rss" />
          </span>
                    </div>
                    <div className="copright">
                        <span><I18n i18nkey="copyright"/></span>
                    </div>
                </footer>
                {/*Footer END*/}




            </div>




        )



    }



}