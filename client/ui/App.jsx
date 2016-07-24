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
            <div className="cell-6 cell-medium-12 last">
              <div className="large-block">
                <span className="category"><i><I18n i18nkey="politics"/></i></span>
                <img src="img/top-block/conference.jpg" alt="конференция" />
                <div className="topic">
                  <h2><I18n i18nkey="firstPolitics"/></h2>
                  <span className="date"><i>{this.state.datenow}</i></span>
                </div>
              </div>
            </div>
            <div className="cell-6 cell-medium-12 last">
              <div className="cell-6">
                <div className="medium-block">
                  <span className="category"><i><I18n i18nkey="politics"/></i></span>
                  <img src="img/top-block/floar.jpg" alt="конференция" />
                  <div className="topic">
                    <h2><I18n i18nkey="secondPolitics"/></h2>
                    <span className="date"><i>{this.state.datenow}</i></span>
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
                    <span className="date"><i>6 июля, 2016</i></span>
                  </div>
                </div>
              </div>
              <div className="cell-6">
                <div className="medium-block-2">
                  <img src="img/top-block/partia.jpg" alt="партия" />
                </div>
              </div>
            </div>
           <News />
          </div>
          <div className="clearfix" />
          <div className="content-center">
            <div id="green-block">
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
                      <span>Вице-министр здравоохранения и социального развития РК</span>
                      <h2>Светлана Жакупова</h2>
                      <p>О внедрении адресной социальной помощи нового формата</p>
                    </div>
                  </div>
                </div>
                <div className="persons">
                  <div className="person">
                    <img src="img/person/person-2.jpg" alt="person" />
                    <div className="description">
                      <span>Член Фракции партии «Нұр Отан» в Мажилисе Парламента</span>
                      <h2>Нуртай Сабильянов</h2>
                      <p>О внедрении налогового декларирования доходов и расходов</p>
                    </div>
                  </div>
                </div>
                <div className="persons">
                  <div className="person">
                    <img src="img/person/person-3.jpg" alt="person" />
                    <div className="description">
                      <span>Член совета Ассамблеи народа Казахстана</span>
                      <h2>Анатолий Башмаков</h2>
                      <p>Манифест «Мир. XXI век» носит политический характер</p>
                    </div>
                  </div>
                </div>
              </div>
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
            </div>
          </div>
          <div id="videos">
            <h2><i><I18n i18nkey="video"/></i></h2>
            <div className="columns-video">
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p><I18n i18nkey="steps"/></p>
              <span className="date">
                <strong><i>{this.state.datenow}</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p><I18n i18nkey="steps"/></p>
              <span className="date">
                <strong><i>{this.state.datenow}</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p><I18n i18nkey="steps"/></p>
              <span className="date">
                <strong><i>{this.state.datenow}</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p><I18n i18nkey="steps"/></p>
              <span className="date">
                <strong><i>{this.state.datenow}</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p><I18n i18nkey="steps"/></p>
              <span className="date">
                <strong><i>{this.state.datenow}</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p><I18n i18nkey="steps"/></p>
              <span className="date">
                <strong><i>{this.state.datenow}</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p><I18n i18nkey="steps"/></p>
              <span className="date">
                <strong><i>{this.state.datenow}</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p><I18n i18nkey="steps"/></p>
              <span className="date">
                <strong><i>{this.state.datenow}</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
            </div>
          </div>
          <div id="blocks-bottom" className="content">
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
          <div className="slider-bottom">
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
          </div>
          <div className="clearfix" />
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
          {/*Content END*/}
        </div>
        {/* End Main */}


                {this.props.children}






      </div>
    );
  }
}
