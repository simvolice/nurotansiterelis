import React, {Component} from 'react';
import News from './News';

export default class App extends Component {


  componentDidMount(){

    
    
    $(document).ready(function () {


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
    });

    (function($){
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
    })(jQuery);
    $(document).ready(function(){
      $(".tabs").lightTabs();
      $(".tabs-2").lightTabs();
    });



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
                    <strong><i>11 июля, 2016</i></strong>
                  </span>
                  <span className="language">
                    <i>KZ</i>
                    <i className="active">RU</i>
                    <i>EN</i>
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
                    <input type="text" placeholder="Я ищу..." className="search" />
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
                        <i>Войти</i>
                      </a>
                    </span>
                    <span><a href="#sign-up"><i>Регистрация</i></a></span>
                  </span>
                  </div>
                </div>
              </div>
              <div className="menu cell-10">
                <ul className="big-menu">
                  <li><a href="#" className="active">Главная</a></li>
                  <li><a href="#">Партия</a></li>
                  <li><a href="#">Фракция</a></li>
                  <li><a href="#">Новости</a></li>
                  <li><a href="#">Программные документы</a></li>
                  <li><a href="#">Регионы</a></li>
                  <li><a href="#" className="red">Общественная приемная</a></li>
                  <li className="last"><a href="#"><span>Еще</span> <img src="img/icons/burger.png" alt="burger" /></a></li>
                  <li className="burger"><a href="#"><img src="img/icons/burger.png" alt="burger" /></a></li>
                </ul>
                <ul className="small-menu">
                  <li><a href="#" className="active">Главная</a></li>
                  <li><a href="#">Партия</a></li>
                  <li><a href="#">Фракция</a></li>
                  <li><a href="#">Новости</a></li>
                  <li><a href="#">Программные документы</a></li>
                  <li><a href="#">Регионы</a></li>
                  <li><a href="#" className="red">Общественная приемная</a></li>
                </ul>
              </div>
            </header>
            <div className="cell-6 cell-medium-12 last">
              <div className="large-block">
                <span className="category"><i>Политика</i></span>
                <img src="img/top-block/conference.jpg" alt="конференция" />
                <div className="topic">
                  <h2>XVI съезд партии «Нур Отан» под председательством Главы государства</h2>
                  <span className="date"><i>6 июля, 2016</i></span>
                </div>
              </div>
            </div>
            <div className="cell-6 cell-medium-12 last">
              <div className="cell-6">
                <div className="medium-block">
                  <span className="category"><i>Политика</i></span>
                  <img src="img/top-block/floar.jpg" alt="конференция" />
                  <div className="topic">
                    <h2>Автопробег в Костанайской области</h2>
                    <span className="date"><i>6 июля, 2016</i></span>
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
                  <span className="category"><i>Спорт</i></span>
                  <img src="img/top-block/politic.jpg" alt="политика" />
                  <div className="topic">
                    <h2>В честь празднования Дня столицы жителям Павлодара подарили....</h2>
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
                <h2 className="opinion"><i>Мнения</i></h2>
                <div className="yellow-block">
                  <p>Все мнения</p>
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
                    <li>Проекты</li>
                    <li>ДИАЛОГОВЫЕ ПЛОЩАДКИ</li>
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
            <h2><i>Видео</i></h2>
            <div className="columns-video">
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
              <div className="video item">
                <iframe src="https://www.youtube.com/embed/l8hJittOaCQ" allowFullScreen />
                <p>Коротко о Плане нации - 100 конкретных шагов</p>
              <span className="date">
                <strong><i>11 июля, 2016</i></strong>
              </span>
              <span className="answer">
                <strong><i>12</i></strong>
              </span>
              </div>
            </div>
          </div>
          <div id="blocks-bottom" className="content">
            <h2><i>Фото</i></h2>
            <div className="black-block">
              <div className="cell-6 cell-medium-12 last">
                <div className="large-block">
                  <img src="img/bottom-block/politic.jpg" alt="политик" />
                  <div className="topic">
                    <h2>Церемония награждения лучших спортсменов по национальным видам спорта «Алтын Тұғыр -
                      2015»</h2>
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
                      <h2>Внеочередной Съезд партии “Нұр Отан”</h2>
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
                      <h2>Казахстанцы - Герои Советского Союза</h2>
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
                      <h2>“Большая Евразия: Территория диалога молодежи”</h2>
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
                      <h2>Республиканский конкурс "Лучшая первичная партийная организация"</h2>
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
              <span>Официальный сайт Президента РК</span>
            </div>
            <div className="item">
              <a href="#">www.ipp.kz</a>
              <span>Официальный сайт Президента РК</span>
            </div>
            <div className="item">
              <a href="#">www.nurmedia.kz</a>
              <span>Официальный сайт Президента РК</span>
            </div>
            <div className="item">
              <a href="#">www.zhasotan.kz</a>
              <span>Официальный сайт Президента РК</span>
            </div>
            <div className="item">
              <a href="#">www.zhasotan.kz</a>
              <span>Официальный сайт Президента РК</span>
            </div>
            <div className="item">
              <a href="#">www.akorda.kz</a>
              <span>Официальный сайт Президента РК</span>
            </div>
            <div className="item">
              <a href="#">www.akorda.kz</a>
              <span>Официальный сайт Президента РК</span>
            </div>
          </div>
          <div className="clearfix" />
          <div className="menu-bottom">
            <ul>
              <li><a href="#" className="active">Главная</a></li>
              <li><a href="#">Партия</a></li>
              <li><a href="#">Фракция</a></li>
              <li><a href="#">Новости</a></li>
              <li><a href="#">Программные документы</a></li>
              <li><a href="#">Регионы</a></li>
              <li><a href="#">Общественная приемная</a></li>
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
              <span>© 2016  Партия “Нұр Отан”. Все права защищены.</span>
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

