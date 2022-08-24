import React from "react";
import { Trans } from "react-i18next";
import "./mainContent.css";
import Article from "./__article/article";
import mainContentImage from '../../assets/img/look-from-mother-daughter-playing-white-piano_1275_850.jpg';

const MainContent = () => {
    return (
        <main className='main__main-content main-content main-content_background_light'>
          <figure>
              <a href="https://www.freepik.com/free-photo/look-from-mother-daughter-playing-white-piano_1120622.htm#query=woman%20playing%20piano&position=1&from_view=keyword">
                <img className="main-content__image" src={mainContentImage} alt="look from mother daughter playing white piano"/>
              </a>
              <figcaption className="main-content__image-caption image-caption image-caption_text_small image-caption_text_italic">
                <Trans i18nKey="figcaption_img_caption">
                  Piano lessons for adults and children, image by v.ivash from freepik.com
                </Trans>
              </figcaption>
          </figure>
        
          <Article /> 
        </main>
    );
};

export default MainContent;
