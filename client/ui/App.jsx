import React, {Component} from 'react';
import News from './News';
import { TAPi18n } from 'meteor/tap:i18n';
import I18n from 'meteor/timoruetten:react-i18n';

import classNames from 'classnames';

import 'moment/locale/ru';
import 'moment/locale/kk';

import moment from 'moment';

moment.locale('ru');

export default class App extends Component {

  constructor(props){
    super(props);


    this.state = {

      datenow: moment().format('LL')


  }



    this.setLang = this.setLang.bind(this);

  }






  setLang(i){

    TAPi18n.setLanguage(i);

    if (i === 'kz'){

      moment.locale('kk');
      this.setState({datenow: moment().format('LL')});


    }else {

      moment.locale(i);
      this.setState({datenow: moment().format('LL')});


    }


  }



  componentDidMount(){

    

    $(".burger").on('click', function(){
      $('.small-menu').toggle();
      console.log("ok");
    });


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



    jQuery.fn.lightTabs = function(options){

      var createTabs = function(){
        tabs = this;
        i = 0;

        showPage = function(i){
          $(tabs).children("div").children("div").hide();
          $(tabs).children("div").children("div").eq(i).show();
          $(tabs).children("ul").children("li").removeClass("active");
          $(tabs).children("ul").children("li").eq(i).addClass("active");
        };

        showPage(0);

        $(tabs).children("ul").children("li").each(function(index, element){
          $(element).attr("data-page", i);
          i++;
        });

        $(tabs).children("ul").children("li").click(function(){
          showPage(parseInt($(this).attr("data-page")));
        });
      };
      return this.each(createTabs);
    };

    $(".tabs").lightTabs();
    $(".tabs-2").lightTabs();
  }

  render() {



    

    return (
      <div>




        {/*[if lt IE 8]>
         <p class="browserupgrade">Вы используете устаревший браузер. Пожалуйста, обновите <a href="http://browsehappy.com/">браузер</a>,
         чтобы улучшить свои возможности.</p>
         <![endif]*/}
        {/* Main*/}
        <div id="main">
          {/*Banner top*/}
          <div className="banner">
            <img src="img/banner.jpg" alt="баннер" />
          </div>
          {/*Banner top END*/}
          {/*Content*/}
          <div className="content">
            <header>
              <div id="logo" className="cell-2">
                <img src="img/logo.png" alt="Нур отан логотип" />
              </div>
              <div className="on-menu cell-10">
                <div className="left-on-menu">
                  <div className="block-top-right">
                  <span className="date">
                    <strong><i>{this.state.datenow}</i></strong>
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
                    <input type="text" placeholder={TAPi18n.__('searchPlaceHolder')} className="search" />
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
                    <span><a href="http://46.101.144.160/registration"><i><I18n i18nkey="registration"/></i></a></span>
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
            </header>
            <div className="clearfix"></div>
            
           


          



            {this.props.children}


            <div className="clearfix"></div>
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

          <footer>
            <div className="cell-2">
              <img src="img/logo-2.png" alt="Нур отан логотип" className="logo2" />
            </div>
            <div className="block-top-right">
              <input type="text" placeholder={TAPi18n.__('searchPlaceHolder')} className="search" />
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
          {/*Content END*/}
        </div>
        {/* End Main */}





      </div>
        
        
        
        
        </div>
    )
  }
};
        
      
