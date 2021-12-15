import React, { useEffect } from 'react'
import './App.css';
import { Trans, useTranslation } from "react-i18next";
import LanguageSelect from "./languageSelect";

function App() {
  const { t } = useTranslation();
  
  useEffect(() => {
      document.title = t("document_title")
  }, []);

  return (
      <div id="main">
        <header className="header">
          <div className="language-select">
            <LanguageSelect />
          </div>
          <h1 id="title" className="header__title">{t("hadn_dadn")}</h1>
          <p className="header__description">{t("moscow_music_group")}</p>
        </header>
        
        <main className='main-content'>
          <figure id="img-div" className="main-content__image">
              <a href="https://commons.wikimedia.org/wiki/File:%D0%A5%D0%B0%D0%B4%D0%BD_%D0%B4%D0%B0%D0%B4%D0%BD_2020.jpg#/media/Файл:Хадн_дадн_2020.jpg">
                <img id="image" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/%D0%A5%D0%B0%D0%B4%D0%BD_%D0%B4%D0%B0%D0%B4%D0%BD_2020.jpg" alt="Hadn Dadn on stage"/>
              </a>
              <figcaption id="img-caption">
                <Trans i18nKey="figcaption_img_caption">
                  Hand Dadn are on the stage on <time dateTime="2020-09-06">September 6, 2020</time>, Author: Kerrin Key
                </Trans>
              </figcaption>
          </figure>
        
          <article id="tribute-info" className="main-content__article article">
            <h2 className="article__title">{t("article_title")}</h2>
            <section className="article__main-description">
              <h3 className="article__subtitle">{t("history")}</h3>
              <p className="article__paragraph">{t("everything_that_hadn_dadns_gaze_falls")}</p>
              <p className="article__paragraph">
                <Trans i18nKey="the_musical_group_was_created">
                  The musical group was created in <time dateTime="2016">2016</time>. The name of the group was given by Varvara Kraminova, who in her childhood called everything in a row with the phrase 'hadn dadn'. The band members define their own genre as 'liaoakyn'. The word 'liaoakyn', invented by the producer of the group <a href="https://www.kinopoisk.ru/name/4190871/" target="_blank" rel="noopener noreferrer">Anton Moiseenko</a>, consists of two parts: 'liao' - ethnic motives and self-righteousness, 'akyn' - knowledge of the world through personal experience.
                </Trans>
              </p>
              <p className="article__paragraph">
                <Trans i18nKey="in_march_2020_performed_at_urgant">
                  In <time dateTime="2020-03">March 2020</time>, Hadn Dadn performed at the Evening Urgant show on Channel One (russian television):
                </Trans>
              </p>
              <center><iframe className="article__video" width="560" height="315" src="https://www.youtube.com/embed/nD3b83HzD7c?start=29" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></center>
            </section>
            <section className="article__composition">
              <h3 className="article__subtitle">{t("composition")}</h3>
              <ul className="members-list">
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kramvaro/">{t("varvara_kraminova")}</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/shiimemtsh/?hl=ru">{t("nikita_chernat")}</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://vk.com/id38986168">{t("sergey_kakurkin")}</a></li> 
              </ul>
            </section>
            <section className="article__awards">
              <h3 className="article__subtitle">{t("awards")}</h3>
              <p>
                <Trans i18nKey="in_2018_won_jager_music_award">
                  In <time dateTime="2018">2018</time>, the group won the Jager Music Awards in the Young Blood category.
                </Trans>
              </p>
            </section>
            <section className="article__albums">
              <h3 className="article__subtitle">{t("discography")}</h3>
              <ul>
                <li>
                <Trans i18nKey="2017_gradual_album">
                  <time dateTime="2017">2017</time> - Gradual Album
                </Trans>
                </li>
                <li>
                  <Trans i18nKey="2017_secret_album">
                    <time dateTime="2017">2017</time> - <a href="https://www.last.fm/ru/music/%D0%A5%D0%B0%D0%B4%D0%BD+%D0%B4%D0%B0%D0%B4%D0%BD/%D0%A2%D0%B0%D0%B9%D0%BD%D1%8B%D0%B9+%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC" target="_blank" rel="noopener noreferrer">Secret album</a>
                  </Trans>
                </li>
                <li>
                  <Trans i18nKey="2018_girlfriends">
                    <time dateTime="2018">2018</time> - <a href="https://www.last.fm/ru/music/%D0%A5%D0%B0%D0%B4%D0%BD+%D0%B4%D0%B0%D0%B4%D0%BD/%D0%9F%D0%BE%D0%B4%D1%80%D1%83%D0%B6%D0%BA%D0%B8" target="_blank" rel="noopener noreferrer">Girlfriends</a>
                  </Trans>
                </li>
                <li>
                  <Trans i18nKey="2019_liaoakyn">
                    <time dateTime="2019">2019</time> - <a href="https://www.last.fm/ru/music/%D0%A5%D0%B0%D0%B4%D0%BD+%D0%B4%D0%B0%D0%B4%D0%BD/%D0%9B%D1%8F%D0%BE%D0%B0%D0%BA%D1%8B%D0%BD" target="_blank" rel="noopener noreferrer">Liaoakyn</a>
                  </Trans>
                </li>
                <li>
                  <Trans i18nKey="2020_nostalgia">
                    <time dateTime="2020">2020</time> - <a href="https://www.last.fm/ru/music/%D0%A5%D0%B0%D0%B4%D0%BD+%D0%B4%D0%B0%D0%B4%D0%BD/%D0%9D%D0%BE%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%B3%D0%B8%D1%8F" target="_blank" rel="noopener noreferrer">Nostalgia</a>
                  </Trans>
                </li>
              </ul>
            </section>
            <section className="article__external-links">
              <h3 className="article__subtitle">{t("more_information")}</h3>
              <p className="article__paragraph">
                <Trans i18nKey="you_could_read_more">
                  You could read more about Hadn Dadn on <a id="tribute-link" target="_blank" rel="noopener noreferrer" href="https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D0%B4%D0%BD_%D0%B4%D0%B0%D0%B4%D0%BD">Wikipedia</a>.
                </Trans>
              </p>
            </section>
            <section className="article__social-media">
              <h3 className="article__subtitle">{t("official_social_media")}</h3>
              <ul className="social-media-list">
                <li><a target="_blank" rel="noopener noreferrer" className="fa fa-youtube" href="https://www.youtube.com/channel/UCNWI_pyxZk0xbPTfgTl_P-A"><div className="sr-only">Youtube</div></a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="fa fa-vk" href="https://vk.com/hadndadn"><div className="sr-only">VKontakte</div></a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="fa fa-facebook" href="https://www.facebook.com/hadndadn/"><div className="sr-only">Facebook</div></a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="fa fa-instagram" href="https://www.instagram.com/hadn_dadn/?hl=ru"><div className="sr-only">Instagram</div></a></li>
              </ul>
            </section>  
          </article> 
        </main>

        <footer className="footer">This webpage is created by <a href="https://www.appalse.ru/" target="_blank" rel="noopener noreferrer">appalse</a>, <time dateTime="2021">2021</time></footer>
      </div>
  );
}

export default App;
