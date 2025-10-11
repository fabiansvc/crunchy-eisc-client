import React, { useEffect, useState } from "react";
import "./MoviePage.scss";
import useUserStore from "../../stores/useUserStore";

/**
 * Movies listing page.
 *
 * @component
 * @returns {JSX.Element} A heading for the movies section.
 */
const MoviePage: React.FC = () => {
  const {user} = useUserStore()

  const [videos, setVideos] = useState<any[]>([]);

  async function getData() {
    const url = `${ import.meta.env.VITE_API_LOCAL_URL || import.meta.env.VITE_API_PROD_URL}/videos/popular`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      //console.log(result);
      setVideos(result.videos);
    } catch (error: any) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(videos);
  }, [videos]);

  return (
    <div className="movie-page">
      <h1>Peliculas </h1>
      <h2>{user?.name}</h2>
      <div>
        {
          videos && videos.map((video: any) =>
            <video controls src={video.video_files[0].link} />
          )
        }
      </div>
    </div>
  );
};

export default MoviePage;
