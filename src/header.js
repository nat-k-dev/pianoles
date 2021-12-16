import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./languageSelect";

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="header">
          <div className="language-select">
            <LanguageSelect />
          </div>
          <h1 id="title" className="header__title">{t("hadn_dadn")}</h1>
          <p className="header__description">{t("moscow_music_group")}</p>
        </header>
    );
};

export default Header;
