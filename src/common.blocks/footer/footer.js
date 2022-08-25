import React from "react";
import "./footer.css";
import "../link/link.css";
import { Trans } from "react-i18next";

const Footer = () => {

    return (
        <footer className="footer">
            <Trans i18nKey="this_webpage_created">
                This webpage is created by <a className="link link__text-color_special-purple" href="https://www.natkdev.com/" target="_blank" rel="noopener noreferrer">natkdev.com</a>, <time dateTime="2022">2022</time>
            </Trans>
        </footer>
    );
};

export default Footer;
