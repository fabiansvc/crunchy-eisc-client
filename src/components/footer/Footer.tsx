import React from "react";
import { Link } from "react-router";
import "./Footer.scss";

/**
 * Application footer with a quick link to the site map.
 *
 * @component
 * @returns {JSX.Element} Footer navigation for secondary routes.
 */
const Footer: React.FC = () => {
  return (
    <footer>
      <Link to="/mapa-sitio">Mapa del Sitio</Link>
    </footer>
  );
};

export default Footer;
