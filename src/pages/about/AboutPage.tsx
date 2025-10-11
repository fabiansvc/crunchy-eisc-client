import React from "react";
import "./AboutPage.css";
import useUserStore from "../../stores/useUserStore";

/**
 * About page describing the CrunchyEISC team and purpose.
 *
 * @component
 * @returns {JSX.Element} A brief description about the team.
 */
const AboutPage: React.FC = () => {
  const {user} = useUserStore()
  return (
    <div>
      <h1>Sobre nosotros</h1>
      <h2>Conoce a nuestro equipo </h2>
      <span>{user?.email}</span>
    </div>
  );
};

export default AboutPage;
