import React from "react";
import "./article.css";
import "../../link/link.css";
import { Trans, useTranslation } from "react-i18next";
import SocialMediaList from "../../social-media-list/socialMediaList";

const Article = () => {
    const { t } = useTranslation();

    return (
        <article className="main-content__article article">
            <h2 className="article__title article__title_font_800">{t("article_title")}</h2>
            <section className="article__main-description">
              <h3 className="article__subtitle">{t("history")}</h3>
              <p className="article__paragraph paragraph">{t("everything_that_hadn_dadns_gaze_falls")}</p>
              <p className="article__paragraph paragraph paragraph_text_justify">
                <Trans i18nKey="the_musical_group_was_created">
                  The musical group was created in <time dateTime="2016">2016</time>. The name of the group was given by Varvara Kraminova, who in her childhood called everything in a row with the phrase 'hadn dadn'. The band members define their own genre as 'liaoakyn'. The word 'liaoakyn', invented by the producer of the group <a className="link link__text-color_special-purple" href="https://www.kinopoisk.ru/name/4190871/" target="_blank" rel="noopener noreferrer">Anton Moiseenko</a>, consists of two parts: 'liao' - ethnic motives and self-righteousness, 'akyn' - knowledge of the world through personal experience.
                </Trans>
              </p>
              <p className="article__paragraph paragraph">
                <Trans i18nKey="in_march_2020_performed_at_urgant">
                  In <time dateTime="2020-03">March 2020</time>, Hadn Dadn performed at the Evening Urgant show.
                </Trans>
              </p>
              <center>
                <iframe className="article__video" width="560" height="315" src="https://www.youtube.com/embed/JGNiMutYBm4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </center>
            </section>
            <section className="article__composition">
              <h3 className="article__subtitle">{t("composition")}</h3>
              <ul className="members-list">
                <li><a className="link link__text-color_special-purple" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/kramvaro/">{t("varvara_kraminova")}</a></li>
                <li><a className="link link__text-color_special-purple" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/shiimemtsh/?hl=ru">{t("nikita_chernat")}</a></li>
                <li><a className="link link__text-color_special-purple" target="_blank" rel="noopener noreferrer" href="https://vk.com/id38986168">{t("sergey_kakurkin")}</a></li> 
              </ul>
            </section>
            <section className="article__awards">
              <h3 className="article__subtitle">{t("awards")}</h3>
              <p className="article__paragraph paragraph">
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
                    <time dateTime="2017">2017</time> - <a className="link link__text-color_special-purple" href="https://www.last.fm/ru/music/%D0%A5%D0%B0%D0%B4%D0%BD+%D0%B4%D0%B0%D0%B4%D0%BD/%D0%A2%D0%B0%D0%B9%D0%BD%D1%8B%D0%B9+%D0%B0%D0%BB%D1%8C%D0%B1%D0%BE%D0%BC" target="_blank" rel="noopener noreferrer">Secret album</a>
                  </Trans>
                </li>
                <li>
                  <Trans i18nKey="2018_girlfriends">
                    <time dateTime="2018">2018</time> - <a className="link link__text-color_special-purple" href="https://www.last.fm/ru/music/%D0%A5%D0%B0%D0%B4%D0%BD+%D0%B4%D0%B0%D0%B4%D0%BD/%D0%9F%D0%BE%D0%B4%D1%80%D1%83%D0%B6%D0%BA%D0%B8" target="_blank" rel="noopener noreferrer">Girlfriends</a>
                  </Trans>
                </li>
                <li>
                  <Trans i18nKey="2019_liaoakyn">
                    <time dateTime="2019">2019</time> - <a className="link link__text-color_special-purple" href="https://www.last.fm/ru/music/%D0%A5%D0%B0%D0%B4%D0%BD+%D0%B4%D0%B0%D0%B4%D0%BD/%D0%9B%D1%8F%D0%BE%D0%B0%D0%BA%D1%8B%D0%BD" target="_blank" rel="noopener noreferrer">Liaoakyn</a>
                  </Trans>
                </li>
                <li>
                  <Trans i18nKey="2020_nostalgia">
                    <time dateTime="2020">2020</time> - <a className="link link__text-color_special-purple" href="https://www.last.fm/ru/music/%D0%A5%D0%B0%D0%B4%D0%BD+%D0%B4%D0%B0%D0%B4%D0%BD/%D0%9D%D0%BE%D1%81%D1%82%D0%B0%D0%BB%D1%8C%D0%B3%D0%B8%D1%8F" target="_blank" rel="noopener noreferrer">Nostalgia</a>
                  </Trans>
                </li>
              </ul>
            </section>
            <section className="article__external-links">
              <h3 className="article__subtitle">{t("more_information")}</h3>
              <p className="article__paragraph paragraph">
                <Trans i18nKey="you_could_read_more">
                  You could listen to <a className="link link__text-color_special-purple" target="_blank" rel="noopener noreferrer" href="https://hadndadn.onerpm.link/music">their music</a> or read more on <a className="link link__text-color_special-purple" target="_blank" rel="noopener noreferrer" href="https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D0%B4%D0%BD_%D0%B4%D0%B0%D0%B4%D0%BD">Wikipedia</a>.
                </Trans>
              </p>
            </section>
            <section className="article__social-media">
              <h3 className="article__subtitle">{t("official_social_media")}</h3>
              <SocialMediaList />
            </section>  
          </article>
    );
};

export default Article;
