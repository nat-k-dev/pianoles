import React from "react";
import "./header.css";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./__language-select/languageSelect";

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="header">
          <div className="header__language-select">
            <LanguageSelect />
          </div>
          <h1 className="header__title header__title_font_important">{t("hadn_dadn")}</h1>
          <p className="header__description header__description_font_800">{t("moscow_music_group")}</p>
        </header>
    );
};

export default Header;
