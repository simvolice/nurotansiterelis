import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

import { TAPi18n } from 'meteor/tap:i18n';
import I18n from 'meteor/timoruetten:react-i18n';

import classNames from 'classnames';
import moment from 'moment';
import 'moment/locale/ru';
import 'moment/locale/kk';
import 'moment/locale/en-gb';
import Footer from './Footer';


moment.locale('ru');



export default class Header extends Component {


    constructor(props){
        super(props);





        this.state = {

            datenow: moment().format('LL'),

            placeHolderSearch: 'Я ищу...'


        };



        this.setLang = this.setLang.bind(this);


    }




    setLang(i){






        TAPi18n.setLanguage(i);
        localStorage.setItem('lang', i);



        if (i === 'kz'){

            moment.locale('kk');
            this.setState({datenow: moment().format('LL')});


        }else {

            moment.locale(i);
            this.setState({datenow: moment().format('LL')});


        }


        if (i === 'ru'){

            this.setState({placeHolderSearch: 'Я ищу...'});


        }else if(i === 'kz'){

            this.setState({placeHolderSearch: 'Іздестіру...'});


        }else if (i === 'en'){

            this.setState({placeHolderSearch: 'I am looking for...'});



        }




    }









    render(){




    return(

        <div>

            {/*[if lt IE 8]>
             <p class="browserupgrade">Вы используете устаревший браузер. Пожалуйста, обновите <a href="http://browsehappy.com/">браузер</a>,
             чтобы улучшить свои возможности.</p>
             <![endif]*/}


            {/* Header block */}
            <header>
                {/*Banner top*/}
                <div className="banner">
                    <img src="img/banner2.jpg" alt="баннер" />
                </div>
                {/*Banner top END*/}
                <div className="center">
                    <div id="logo" className="cell-2">
                       <Link to="/" ><img src="img/logo.png" alt="Нур отан логотип" /></Link>
                    </div>
                    <div className="on-menu cell-10">
                        <div className="left-on-menu">
                            <div className="block-top-right">
                <span className="date">
                  <strong><i>{moment().format('LL')}</i></strong>
                </span>
                <span className="language">
                  <i onClick={this.setLang.bind(this, 'kz')}>KZ</i>
                  <i onClick={this.setLang.bind(this, 'ru')}>RU</i>
                  <i onClick={this.setLang.bind(this, 'en')}>EN</i>
                </span>
                <span className="tel">
                  <img src="img/icons/tel.png" alt="telephone" />
                </span>
                <span>
                  <img src="img/icons/glasses.png" alt="glasses" />
                </span>
                            </div>
                        </div>
                        <div className="right-on-menu">
                            <div className="block-top-right right">
                                <input type="text" placeholder={this.state.placeHolderSearch} className="search" />
                <span className="social">
                  <a href="#twitter" className="twitter" />
                  <a href="#facebook" className="facebook" />
                  <a href="#google-plus" className="google-plus" />
                  <a href="#youtube" className="youtube" />
                  <a href="#rss" className="rss" />
                </span>
                <span className="login">
                  <span>
                    <a href="#sign">
                      <img src="img/icons/login.png" alt="Войти" />
                      <i><I18n i18nkey="enter"/></i>
                    </a>
                  </span>
                  <span><a href="#sign-up"><i><I18n i18nkey="registration"/></i></a></span>
                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu cell-10">
                        <ul className="big-menu">
                            <li><a href="#" className="active"><I18n i18nkey="main"/></a></li>
                            <li><a href="#"><I18n i18nkey="consignment"/></a></li>
                            <li><a href="#"><I18n i18nkey="faction"/></a></li>
                            <li><a href="#"><I18n i18nkey="news"/></a></li>
                            <li><a href="#"><I18n i18nkey="PolicyDocuments"/></a></li>
                            <li><a href="#"><I18n i18nkey="Regions"/></a></li>
                            <li><a href="#" className="red"><I18n i18nkey="PublicReception"/></a></li>
                            <li className="last"><a href="#"><span><I18n i18nkey="yet"/></span> <img src="img/icons/burger.png" alt="burger" /></a></li>
                            <li className="burger"><a href="#"><img src="img/icons/burger.png" alt="burger" /></a></li>
                        </ul>
                        <ul className="small-menu">
                            <li><a href="#" className="active"><I18n i18nkey="main"/></a></li>
                            <li><a href="#"><I18n i18nkey="consignment"/></a></li>
                            <li><a href="#"><I18n i18nkey="faction"/></a></li>
                            <li><a href="#"><I18n i18nkey="news"/></a></li>
                            <li><a href="#"><I18n i18nkey="PolicyDocuments"/></a></li>
                            <li><a href="#"><I18n i18nkey="Regions"/></a></li>
                            <li><a href="#" className="red"><I18n i18nkey="PublicReception"/></a></li>
                        </ul>
                    </div>
                </div>
            </header>
            {/* End Header block */}


        </div>




    )


}





}