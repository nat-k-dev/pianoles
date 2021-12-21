import React from "react";
import "./socialMediaList.css";

const SocialMediaList = () => {
    return (
        <ul className="article__social-media-list social-media-list">
            <li><a target="_blank" rel="noopener noreferrer" className="fa fa-youtube" href="https://www.youtube.com/channel/UCNWI_pyxZk0xbPTfgTl_P-A"><div className="sr-only">Youtube</div></a></li>
            <li><a target="_blank" rel="noopener noreferrer" className="fa fa-vk" href="https://vk.com/hadndadn"><div className="sr-only">VKontakte</div></a></li>
            <li><a target="_blank" rel="noopener noreferrer" className="fa fa-facebook" href="https://www.facebook.com/hadndadn/"><div className="sr-only">Facebook</div></a></li>
            <li><a target="_blank" rel="noopener noreferrer" className="fa fa-instagram" href="https://www.instagram.com/hadn_dadn/?hl=ru"><div className="sr-only">Instagram</div></a></li>
        </ul>
    );
};

export default SocialMediaList;
