import React from "react";
import { Trans } from "react-i18next";
import "./mainContent.css";
import Article from "./__article/article";

const MainContent = () => {
    return (
        <main className='main__main-content main-content main-content_background_light'>
          <figure>
              <a href="https://commons.wikimedia.org/wiki/File:%D0%A5%D0%B0%D0%B4%D0%BD_%D0%B4%D0%B0%D0%B4%D0%BD_2020.jpg#/media/Файл:Хадн_дадн_2020.jpg">
                <img className="main-content__image" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/%D0%A5%D0%B0%D0%B4%D0%BD_%D0%B4%D0%B0%D0%B4%D0%BD_2020.jpg" alt="Hadn Dadn on stage"/>
              </a>
              <figcaption className="main-content__image-caption image-caption image-caption_text_small image-caption_text_italic">
                <Trans i18nKey="figcaption_img_caption">
                  Hand Dadn are on the stage on <time dateTime="2020-09-06">September 6, 2020</time>, Author: Kerrin Key
                </Trans>
              </figcaption>
          </figure>
        
          <Article /> 
        </main>
    );
};

export default MainContent;
