import React from "react";
import "./header.css";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./__language-select/languageSelect";

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="header">
          <div className="header__container">
            <h1 className="header__title header__title_font_big-caveat">{t("header_h1_title")}</h1>
            <div className="header__language-select">
              <LanguageSelect />
            </div>
          </div>
          <p className="header__description header__description_font_small-caveat">{t("header_text")}</p>
        </header>
    );
};

export default Header;
