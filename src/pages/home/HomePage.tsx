import React, { useCallback } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router";
import  useUserStore  from "../../stores/useUserStore";

/**
 * Home (landing) page of the application.
 *
 * @component
 * @returns {JSX.Element} The landing view with a CTA button to browse movies.
 * @example
 * // Renders a title, subtitle, and a button that navigates to "/peliculas"
 * <HomePage />
 */
const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const {setUser} = useUserStore();

  const handleLogin = useCallback(()=>{
    const User = {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      age: 25,
    } 

    setUser(User);
    navigate("peliculas");
  }, [setUser, navigate])

  return (
    <div>
      <h1>CrunchyEISC</h1>
      <h2>Anime y mucho más</h2>
      <button onClick={handleLogin}>Ver peliculas</button>
    </div>
  );
};

export default HomePage;
