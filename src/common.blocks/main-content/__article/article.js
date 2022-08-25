import React from "react";
import "./article.css";
import "../../link/link.css";
import { Trans, useTranslation } from "react-i18next";
import SocialMediaList from "../../social-media-list/socialMediaList";
import pianoVideo from "../../../assets/video/fingers_playing_piano.mp4";

const Article = () => {
    const { t } = useTranslation();

    return (
        <article className="main-content__article article">
            <h2 className="article__title article__title_font_800">{t("article_title")}</h2>
            <section className="article__main-description">
              <h3 className="article__subtitle">{t("history")}</h3>
              <p className="article__paragraph paragraph paragraph_text_justify">
                {t("history_text_1")}
              </p>
              <center>
                <video width="600" height="315" loop autoPlay muted>
                  <source src={pianoVideo} type="video/mp4" />
                </video>
              </center>
            </section>
            <section className="article__awards">
              <h3 className="article__subtitle">{t("awards")}</h3>
              <p className="article__paragraph paragraph paragraph_text_justify">
                <Trans i18nKey="in_2018_won_young_music_award">
                  In <time dateTime="2018">2018</time> I won the «Young Music Awards» in the «Young Blood» category.
                </Trans>
              </p>
            </section>
            <section className="article__lessons">
              <h3 className="article__subtitle">{t("lessons")}</h3>
              <p className="article__paragraph paragraph paragraph_text_justify">{t("lessons_description")}</p>
            </section>
            <section className="article__external-links">
              <h3 className="article__subtitle">{t("contacts")}</h3>
              <p className="article__paragraph paragraph paragraph_text_center">{t("contacts_information")}</p>
              <ul className="contacts-container">
                <li className="contacts-container__item fa fa-phone">
                  <a className="link link__text-color_special-purple" href="tel:123-456-7890">123-456-7890</a>
                </li>
                <li className="contacts-container__item fa fa-envelope">
                  <a className="link link__text-color_special-purple" href = "mailto: pianoles-example@example.com">Send Email</a>
                </li>
              </ul>
            </section>
            <section className="article__social-media">
              <h3 className="article__subtitle">{t("official_social_media")}</h3>
              <SocialMediaList />
            </section>  
          </article>
    );
};

export default Article;
