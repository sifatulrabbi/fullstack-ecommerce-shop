import React from "react";
import Link from "next/link";
import {
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiSass,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import {footerData} from "./footer.data";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <section className="footer-about">
          <h3 className="logo">FS</h3>
          <p className="footer-about-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            aliquid inventore minus necessitatibus voluptatibus enim, maiores
            accusantium, explicabo modi, pariatur hic odit doloribus in!
          </p>
          <ul className="footer-about-list">
            <li className="footer-about-list-icon">
              <SiNodedotjs />
            </li>
            <li className="footer-about-list-icon">
              <SiTypescript />
            </li>
            <li className="footer-about-list-icon">
              <SiMongodb />
            </li>
            <li className="footer-about-list-icon">
              <SiSass />
            </li>
            <li className="footer-about-list-icon">
              <SiExpress />
            </li>
            <li className="footer-about-list-icon">
              <SiNextdotjs />
            </li>
          </ul>
        </section>
        <section className="footer-site-map">
          <h4 className="footer-title">Site Map</h4>
          <ul className="footer-site-map-list">
            {footerData.siteMap.map((item) => (
              <li key={item.link} className="footer-site-map-list-item">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="footer-links">
          <h4 className="footer-title">Links</h4>
          <ul className="footer-links-list">
            {footerData.links.map((item) => (
              <li key={item.link} className="footer-links-list-item">
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section className="footer-bottom">
        <span className="footer-bottom-text">
          Built with NodeJs and NextJs by{" "}
          <a
            href="https://github.com/sifatulrabbi"
            target="_blank"
            rel="noreferrer"
          >
            sifatulrabbi
          </a>
        </span>
      </section>
    </footer>
  );
};
